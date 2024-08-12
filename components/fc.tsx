import React, { useEffect, useState } from 'react';
import '../components/style.css';

const CardStack: React.FC = () => {
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  const flashcards = [
    { question: "What is Reac123123t?", answer: "A JavaScript library for building user interfaces" },
    { question: "What is JSX?123", answer: "A syntax extension for JavaScript" },
    { question: "What is a H1ook?", answer: "A special function in React for using state and other features" },
    { question: "What is a com123ponent?", answer: "A reusable piece of UI in React" },
    { question: "What is st123ate?", answer: "An object that holds information that influences the output of a component" },
    { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
    { question: "What is a Hook?", answer: "A special function in React for using state and other features" },
    { question: "What is a component?", answer: "A reusable piece of UI in React" },
    { question: "What is state?", answer: "An object that holds information that influences the output of a component" }
  ];

  useEffect(() => {
    const stack = document.querySelector('.stack') as HTMLElement;
    const children = Array.from(stack.children) as HTMLElement[];

    children.reverse().forEach(i => stack.append(i));
  }, []);

  const handleCardClick = (index: number) => {
    setFlippedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const swapNext = () => {
    const stack = document.querySelector('.stack') as HTMLElement;
    const card = document.querySelector('.card:last-child') as HTMLElement;

    if (card) {
      card.classList.add('swap');

      setTimeout(() => {
        card.classList.remove('swap');
        stack.prepend(card);
      }, 700);
    }
  };

  const swapPrevious = () => {
    const stack = document.querySelector('.stack') as HTMLElement;
    const card = document.querySelector('.card:first-child') as HTMLElement;

    if (card) {
      stack.removeChild(card);
      stack.append(card);
      card.classList.add('swap');

      setTimeout(() => {
        card.classList.remove('swap');
      }, 700);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat">
      <div className="stack">
        {flashcards.map((flashcard, index) => (
          <div
            key={index}
            className={`card ${flippedIndices.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{flashcard.question}</p>
              </div>
              <div className="flip-card-back">
                <p className="title">{flashcard.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-10 mt-6">
        <button onClick={swapPrevious} className="prev p-2 bg-gray-800 text-white rounded">
          Previous
        </button>
        <button onClick={swapNext} className="next p-2 bg-gray-800 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default CardStack;
