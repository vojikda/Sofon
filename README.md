# The Three-Body Problem Quiz App

A beautiful, interactive quiz application based on Liu Cixin's masterpiece "The Three-Body Problem". Test your knowledge of this groundbreaking science fiction novel with carefully crafted questions covering key concepts, characters, and plot points.

## Features

- **10 Thoughtful Questions**: Covering major themes and concepts from the novel
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Detailed Explanations**: Learn more about each answer with comprehensive explanations
- **Score Tracking**: See your performance and get personalized feedback
- **Mobile Responsive**: Works perfectly on all devices

## Questions Covered

The quiz includes questions about:
- The three-body problem concept
- The virtual reality game "Three Body"
- The Trisolaran civilization
- The Dark Forest theory
- The Wallfacer Project
- Red Coast Base
- Sophon technology
- Key characters and their roles
- Chaotic Era on Trisolaris
- The Earth-Trisolaris Organization (ETO)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Enjoy the quiz!

### Building for Production

To create a production build:

```bash
npm run build
```

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients and animations

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles
├── types.ts             # TypeScript type definitions
└── data/
    └── questions.ts     # Quiz questions and answers
```

## How to Play

1. Read each question carefully
2. Select your answer from the four options provided
3. Click "Submit Answer" to see if you're correct
4. Read the explanation to learn more
5. Click "Next Question" to continue
6. At the end, see your final score and get personalized feedback
7. Click "Take Quiz Again" to restart

## Contributing

Feel free to add more questions or improve the application! The questions are stored in `src/data/questions.ts` and follow a simple format.

## About The Three-Body Problem

"The Three-Body Problem" is the first novel in Liu Cixin's Remembrance of Earth's Past trilogy. It explores complex scientific concepts, human nature, and the potential consequences of first contact with an alien civilization. The novel won the Hugo Award for Best Novel in 2015 and has been praised for its innovative approach to science fiction.

## License

This project is open source and available under the MIT License. 