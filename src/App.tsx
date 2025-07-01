import React, { useState } from 'react';
import { questions } from './data/questions';
import { QuizState } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResults: false,
    selectedAnswer: null,
  });

  const currentQuestion = questions[quizState.currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
    }));
  };

  const handleSubmitAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const newAnswers = [...quizState.answers, quizState.selectedAnswer];

    setQuizState(prev => ({
      ...prev,
      score: newScore,
      answers: newAnswers,
      showResults: true,
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        showResults: false,
      }));
    } else {
      // Quiz completed
      setQuizState(prev => ({
        ...prev,
        showResults: true,
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResults: false,
      selectedAnswer: null,
    });
  };

  const getOptionClass = (optionIndex: number) => {
    if (!quizState.showResults) {
      return quizState.selectedAnswer === optionIndex ? 'option selected' : 'option';
    }

    if (optionIndex === currentQuestion.correctAnswer) {
      return 'option correct';
    }

    if (quizState.selectedAnswer === optionIndex && optionIndex !== currentQuestion.correctAnswer) {
      return 'option incorrect';
    }

    return 'option';
  };

  const getScorePercentage = () => {
    return Math.round((quizState.score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Excellent! You're a true Three-Body Problem expert!";
    if (percentage >= 70) return "Great job! You have a solid understanding of the novel.";
    if (percentage >= 50) return "Good effort! You know the basics of The Three-Body Problem.";
    return "Keep reading! The Three-Body Problem is a complex and fascinating novel.";
  };

  if (quizState.currentQuestion >= questions.length) {
    return (
      <div className="container">
        <h1 className="title">Quiz Complete!</h1>
        <div className="score">
          Your Score: {quizState.score} out of {questions.length} ({getScorePercentage()}%)
        </div>
        <div className="result">{getScoreMessage()}</div>
        <button className="button" onClick={handleRestartQuiz}>
          Take Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">The Three-Body Problem Quiz</h1>
      <p className="subtitle">Test your knowledge of Liu Cixin's masterpiece</p>
      
      <div className="score">
        Question {quizState.currentQuestion + 1} of {questions.length}
      </div>

      <div className="question-container">
        <h2 className="question">{currentQuestion.question}</h2>
        
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={getOptionClass(index)}
              onClick={() => !quizState.showResults && handleAnswerSelect(index)}
            >
              {option}
            </div>
          ))}
        </div>

        {quizState.showResults && (
          <div className="feedback">
            <div className="explanation">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </div>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          {!quizState.showResults ? (
            <button
              className="button"
              onClick={handleSubmitAnswer}
              disabled={quizState.selectedAnswer === null}
            >
              Submit Answer
            </button>
          ) : (
            <button className="button" onClick={handleNextQuestion}>
              {quizState.currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 