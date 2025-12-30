import {useState} from 'react'

export default function Idea({topic, mode, idea, prompt, imageUrl, onDelete}) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <li className="idea-card">
      <div className="card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={idea} />
        ) : (
          <div className="placeholder shimmer">
            <span className="icon">image</span>
            <span>Baking preview...</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <span className="tag">{mode} • {topic}</span>
        <h3>{idea}</h3>
        <div className="prompt-box">
          {prompt}
        </div>
      </div>
      <div className="card-actions">
        <button onClick={copyPrompt}>
          <span className="icon">{copied ? 'check' : 'content_copy'}</span>
          {copied ? 'Copied' : 'Copy Prompt'}
        </button>
        <button className="delete-btn" onClick={onDelete}>
          <span className="icon">delete</span>
        </button>
      </div>
    </li>
  )
}
