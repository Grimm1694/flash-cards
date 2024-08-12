"use client";
import React, { useEffect, useState } from 'react';
import '../components/style.css';
import Link from 'next/link';
interface Flashcard {
  id: number;
  question: string;
  answer: string;
}
const Flashcard: React.FC = () => {
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const handleFlip = (index: number) => {
    setFlippedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  useEffect(() => {
    // Fetch all flashcards from the database
    const fetchFlashcards = async () => {
      try {
        const response = await fetch("/api/flashcard");
        const data = await response.json();
        setFlashcards(data.flashcards);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, []);
  useEffect(() => {
    const stack = document.querySelector('.stack') as HTMLElement;
    const children = Array.from(stack.children) as HTMLElement[];

    children.reverse().forEach(i => stack.append(i));
  }, []);

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
            onClick={() => handleFlip(index)}
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
      <div className="flex mt-6 space-x-[300px]">
      <button 
        onClick={swapPrevious} 
         className="w-[100px] h-[30px] bg-[#FF5F1F] text-[#FFF5EE] rounded transition-all duration-300 ease-in-out hover:bg-[#EC5800] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white flex justify-center items-center">
          &larr; Previous
      </button>
      <button 
        onClick={swapNext} 
        className="w-[100px] h-[30px] bg-[#FF5F1F] text-[#FFF5EE] rounded transition-all duration-300 ease-in-out hover:bg-[#EC5800] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white flex justify-center items-center">
        Next &rarr;
      </button>
      </div>
    </div>
  );
};

export default Flashcard;
