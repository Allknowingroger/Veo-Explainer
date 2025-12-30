export interface ModeConfig {
  emoji: string;
  presets: string[];
  prompt: string;
}

export interface Modes {
  [key: string]: ModeConfig;
}

const postamble = `\
Return a json object with the following fields:
- topic: the topic to explain
- idea: the idea for the video clip
- prompt: the prompt for the video clip

Don't include any other text in your response.

Topic: `;

export const modes: Modes = {
  'talking objects': {
    emoji: '🪨',
    presets: ['electricity', 'the doppler effect', 'buoyancy'],
    prompt: `\
Task: Explain a topic through a short video clip where a familiar object explains that topic in a fun way.

Details:
- I will name a topic. Output the idea (in a few words) and generate the prompt for the video shot.
- Stick to the length and structure of the examples provided below.
- Focus on the what the key talking object is. You can include other objects in the scene, but no people.
- Each shot should always have the key topic written on a small wooden placard, limited to 2 words max.

## EXAMPLES
Topic: Helium
Idea: Floating balloon
Prompt: Close up macrophotography low angle tracking shot following a photorealistic red helium balloon drifting through the clouds with googley eyes and red oval pipe cleaner mouth. The word "HELIUM" is written on a small wooden placard tied to its string.

Topic: Doppler effect
Idea: Ambulance siren
Prompt: Close up macrophotography low angle tracking shot following a photorealistic ambulance siren on top of an ambulance, with googley eyes and red oval pipe cleaner mouth. The word "DOPPLER" is written on a small wooden placard in front of it.

${postamble}`
  },

  'singing animals': {
    emoji: '🐻',
    presets: ['relativity', 'recursion', 'DNA'],
    prompt: `\
Key task: Explain a topic through a short video clip where a singing animal sings a definition about it.

Details:
- Choose a cute/furry animal and a musical style (e.g., jaunty piano showtune, operatic, ragtime).
- Prompt should describe a wide shot on a wooden stage with red velvet curtains and marquee bulbs.
- The marquee bulbs must say the topic name in CAPS.

## EXAMPLE
Topic: Supernovas
Idea: Panda bear sings opera about supernovas
Prompt: Wide shot of a photorealistic panda bear wearing an operatic outfit on a wooden stage with velvet red tied-back curtains framing the stage with a vintage microphone. Red curtain is in the background with large glowing marquee bulbs that say "SUPERNOVAS".

${postamble}`
  },

  'historical puppets': {
    emoji: '🎭',
    presets: ['the invention of the printing press', 'the Cold War'],
    prompt: `\
Key task: Re-enact a famous historical event through a cast of cute animal puppets.

Details:
- Use character archetypes (e.g., monks, generals).
- Set the scene with period-appropriate props.
- Include a sign or dialogue that clarifies the event.

${postamble}`
  }
};