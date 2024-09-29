const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saubaan.me',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saubaan',
  role: 'Software Developer',
  description:
    'I’m a Computer Engineering student at the University of Waterloo with a passion for technology and coding since I was 9. I love building efficient, user-focused applications and working with both software and hardware to solve complex problems and create impactful digital solutions.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/saubaan/',
    github: 'https://github.com/SaubaanH',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cluo',
    description:
      'A Remote Desktop Protocol (RDP) application for iOS, macOS, and Android, providing secure and seamless remote access across platforms with dynamic server management.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/FreeRDP/FreeRDP',
    livePreview: 'https://www.mazzzing.com/cluoapp',
  },
  {
    name: 'HomieHub',
    description:
      'A matchmaking video chat application that pairs users based on personality traits, offering real-time video chats with icebreaker prompts, and won first overall at HackWithACrew for its innovation.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/SaubaanH/Homie-Hub',
    livePreview: 'https://devpost.com/software/homie-hub',
  },
  {
    name: 'Some AI Project',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saubaanhasan@gmail.com',
}

export { header, about, projects, skills, contact }
