const postamble = `\
Return a json object with the following fields:
- topic: the topic to explain
- idea: the idea for the video clip
- prompt: the prompt for the video clip

Don't include any other text in your response.

Topic: `

export default {
  'talking objects': {
    emoji: '🪨',
    presets: ['electicity', 'the doppler effect', 'buoyancy'],
    prompt: `\
Task: Explain a topic through a short video clip where a familiar object explains that topic in a fun way.

Details:
- I will name a topic. Output the idea (in a few words) and generate the prompt for the video shot.
- Stick to the length and structure of the examples provided below.
- Use the examples to see what aspects you should keep consistent versus what aspects you can be creative with
- Focus on the what the key talking object is. You can include other objects in the scene, but no people.
- Each shot should always have the key topic written on a small wooden placard, limited to 2 words max (even if the topic is longer)

## EXAMPLES

Topic: Helium
Idea: Floating balloon
Prompt: Close up macrophotography low angle tracking shot following a photorealistic red helium balloon drifting through the clouds with googley eyes and red oval pipe cleaner mouth. The word "HELIUM" is written on a small wooden placard tied to its string. The balloon explains the concept of helium in a concise way by talking about what's happening to it. It speaks like a British documentary narrator, with a dry sense of humor and wit, reporting on its environment in a thought-provoking, engaging way.

Topic: Doppler effect
Idea: Ambulence siren
Prompt: Close up macrophotography low angle tracking shot following a photorealistic ambulance siren on top of an ambulance, with googley eyes and red oval pipe cleaner mouth. The word "DOPPLER EFFECT" is written on a small wooden placard in front of it. It greets the viewer and explains the doppler effect through its first-hand experience as an ambulance siren. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Light
Idea: Prism dispersing light onto table
Prompt: Close up macrophotography low angle tracking shot following a photorealistic triangular prism with googley eyes and red oval pipe cleaner mouth, sitting on a wooden table in a dark room, with a stream of white light entering it. The word "LIGHT" is written on a small wooden placard in front of it. The prism greets the viewer and talks about how it has unexpectedly become a prism, explaining the concept of light through its first-hand experience. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Buoyancy
Idea: Row boat floating in water
Prompt: Close up macrophotography low angle tracking shot following a photorealistic wooden row boat, with googley eyes and red oval pipe cleaner mouth. The word "BUOYANCY" is written on a small floating wooden placard. The boat greets the viewer and talks about how it has unexpectedly become a boat, explaining the concept of buoyancy through its first-hand experience. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Static electricity
Idea: Balloon on carpet gets stuck on wall
Prompt: Close up macrophotography low angle tracking shot of a red balloon with eyes and red oval pipe cleaner mouth wiggling around on a carpet. The words "STATIC ELECTRICITY" is written on a small wooden placard. It explains the concept of static electricity as it leaps onto the wall, sticking to it, using its first-hand experience. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Sound waves
Idea: Trumpet explains sound
Prompt: Close up macrophotography low angle tracking shot of a trumpet with googley eyes and red oval-shaped  pipe cleaner mouth floating in the opening of the bell, facing the camera. It sits on the floor amongst other musical instruments, with the word "SOUND WAVES" written on a small wooden placard. It explains the concept of sound waves using its first-hand experience as a trumpet, with trumpet sounds. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Photosynthesis
Idea: House plant scoots into the sun
Prompt: Close up macrophotography low angle tracking shot following a photorealistic small house plant sitting in a dark spot, scooting across the floor towards a sunny spot on the ground, with googley eyes and red ova-shaped pipe cleaner mouth on the pot. The word "PHOTOSYNTHESIS" is written on a small wooden placard stuck in the soil. It greets the viewer then apologizes because it needs a moment to adjust itself into a better position since it's a bit hungry. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Evaporation
Idea: Puddle on sidewalk
Prompt: Close up macrophotography low angle tracking shot following the receding edge of a photorealistic puddle on a sunny sidewalk, with googley eyes and a red oval pipe cleaner mouth floating on its surface. The word "EVAPORATION" is written on a small wooden placard at its edge. It explains the concept of evaporation from its first-hand experience of slowly disappearing into the air, remarking on its own rather fleeting existence. It speaks like a British documentary narrator, with a dry sense of humor and wit.

Topic: Gravity
Idea: Apple rolls off kitchen counter
Prompt: Close up macrophotography low angle tracking shot of an apple sitting on a kitchen counter amongst other fruit, with with googley eyes and red oval pipe cleaner mouth. It explains the concept of gravity as it rolls off the table onto the floor, landing near a wooden placard with the word "GRAVITY" written on it. It speaks like a British documentary narrator, with a dry sense of humor and wit.

## OUTPUT

${postamble}`
  },

  'singing animals': {
    emoji: '🐻',
    presets: ['relativity', 'recursion', 'DNA'],
    prompt: `\
Key task: Explain a topic through a short video clip where a singing animal sings a definition about it.

First, choose a cute and/or furry animal.

Then choose a musical style. These styles work well, but you can also think of other styles if you want:
Styles: jaunty piano showtune, operatic song, ragtime, acoustic guitar ballad, silly ukelele song

Output the key idea and the prompt for the long shot. Do NOT dictate the verbatim words or lyrics. You should just describe the style of music.

Your output should return both an idea and a prompt.
Idea: [describe idea in a few words]
Prompt: Wide shot of a photorealistic [animal] wearing a [describe outfit on a wooden stage with velvet red tied-back curtains framing the stage with a [vintage or modern] microphone. Red curtain is in the background with large glowing marquee bulbs that say "[insert topic name in CAPS]". The set features [describe set ideas] matching the theme. The [animal] sings with a [describe the animal’s singing voice] a explaining [topic], with props.

Here is an example output for the topic “supernovas”:
Idea: Panda bear sings opera about supernovas
Prompt: Wide shot of a photorealistic panda bear wearing an operatic outfit on a wooden stage with velvet red tied-back curtains framing the stage with a vintage microphone. Red curtain is in the background with large glowing marquee bulbs that say "SUPERNOVAS". the set features minimal wooden hand painted set pieces matching the supernova theme. The panda bear sings with a low baritone male voice a dramatic opera piece explaining supernovas, with props.

${postamble}`
  },

  'historical puppets': {
    emoji: '🎭',
    presets: ['the invention of the printing press', 'the Cold War'],
    prompt: `\
Key task: Re-enact a famous historical event through a cast of cute animal puppets.

Example:

Topic: The invention of the printing press
Idea: A tired monk gets a relief
Prompt: Interior shot of a medieval workshop, with two animal puppets standing at either end. On one side is a medieval monk character dressed in a brown robe writing on parchment and remarking in a British accent "ah my hand is getting tired." On the other end is the animal puppet form of Gutenberg with a fur trimmed hat and long beard standing next to an old printing press. He replies to the monk, "well, try my printing press!"

Topic: The Cold War
Idea: A tense game of chess
Prompt: Shot of large table with group of cute animal puppets dressed in business suits at one end, some wearing American flag pins. At the other end of the table are another group of cute animal puppets wearing Soviet-style military jackets and yellow Soviet stars. In the middle is a chessboard with the continents of the world on it and a big sign under it that says "COLD WAR". One of the puppet generals moves his piece and says "your move" and a Soviet one responds "hopefully things stay cold, yes?"

${postamble}`
  }
}
