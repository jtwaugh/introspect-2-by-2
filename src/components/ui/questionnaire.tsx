"use client"

import { useState } from 'react';
import TextareaWithEnterPrompt from './text-area-with-enter-prompt';

const Questionnaire = ({ questions, onAnswer, onComplete }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index: number, event: any) => {
    if (event.key === 'Enter') {
        onAnswer(index, event.target.value)
        nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
    } else {
        onComplete(); // Notify parent that the questionnaire is complete
    }
  };

  return (
    <div>
        <TextareaWithEnterPrompt
            key={currentQuestion}
            className="w-[300px] h-[200px]"
            placeholder={questions[currentQuestion]}
            onKeyDown={(event: any) => handleAnswer(currentQuestion, event)}
        />
    </div>
  );
};

export default Questionnaire;
