import {useState} from 'react'
import c from 'clsx'
import modes from '../lib/modes'
import { generateText, generateKeyframe } from '../lib/llm'
import Idea from './Idea'

export default function App() {
  const [mode, setMode] = useState(Object.keys(modes)[0])
  const [ideas, setIdeas] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!value || loading) return
    
    setLoading(true)
    const currentMode = mode
    const currentTopic = value
    const id = crypto.randomUUID()

    try {
      // 1. Generate text idea
      const jsonResponse = await generateText(modes[mode].prompt + value)
      
      let data;
      try {
        // Handle potential markdown wrapping
        const cleaned = jsonResponse.replace(/```json/g, '').replace(/```/g, '').trim()
        data = JSON.parse(cleaned)
      } catch (e) {
        console.error("Failed to parse LLM JSON", jsonResponse)
        throw new Error("Invalid format received from AI")
      }

      const newIdea = {
        id,
        topic: data.topic || currentTopic,
        idea: data.idea,
        prompt: data.prompt,
        mode: currentMode,
        imageUrl: null // Image loads second
      }

      setIdeas(prev => [newIdea, ...prev])
      setValue('') // Clear input for next one

      // 2. Generate keyframe image in the background
      const image = await generateKeyframe(data.prompt)
      
      setIdeas(prev => prev.map(item => 
        item.id === id ? { ...item, imageUrl: image } : item
      ))

    } catch (err) {
      alert("Something went wrong with the generation. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const deleteIdea = id =>
    setIdeas(ideas => ideas.filter(idea => idea.id !== id))

  const clearAll = () => {
    if (window.confirm("Clear all generated ideas?")) {
      setIdeas([])
    }
  }

  return (
    <main>
      <section className="sidebar">
        <header className="logo">
          <h1>Explain it<br/><span>with</span> <em>Veo 3</em></h1>
        </header>

        <div className="input-group">
          <label><span className="icon">school</span> Explain</label>
          <input
            className="main-input"
            type="text"
            placeholder="e.g. Black Holes"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
          />
          <ul className="presets">
            {modes[mode].presets.map(preset => (
              <li key={preset}>
                <button onClick={() => setValue(preset)}>{preset}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="input-group">
          <label><span className="icon">palette</span> Visual Style</label>
          <div className="mode-selector">
            {Object.keys(modes).map(key => (
              <button 
                key={key} 
                className={c('mode-btn', {active: mode === key})}
                onClick={() => setMode(key)}
              >
                <span className="emoji">{modes[key].emoji}</span>
                {key}
              </button>
            ))}
          </div>
        </div>

        <button
          className="generate-btn"
          disabled={loading || !value}
          onClick={handleGenerate}
        >
          {loading ? (
            <><span className="icon rotating">sync</span> Generating...</>
          ) : (
            <><span className="icon">auto_awesome</span> Create Storyboard</>
          )}
        </button>
      </section>

      <section className="content">
        <header className="content-header">
          <h2>Project Storyboard ({ideas.length})</h2>
          {ideas.length > 0 && (
            <button className="clear-btn" onClick={clearAll}>
              <span className="icon">delete_sweep</span> Clear All
            </button>
          )}
        </header>

        {ideas.length ? (
          <ul className="ideas-grid">
            {ideas.map((item) => (
              <Idea
                key={item.id}
                {...item}
                onDelete={() => deleteIdea(item.id)}
              />
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <span className="icon">movie_edit</span>
            <h2>Your storyboard is empty</h2>
            <p>Enter a topic and choose a style to generate photorealistic video prompts and keyframe previews for your next Veo project.</p>
          </div>
        )}
      </section>
    </main>
  )
}
