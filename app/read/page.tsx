"use client";
import React, { useEffect, useState } from 'react';
 import '../../components/style.css';
 interface Flashcard {
    id: number;
    question: string;
    answer: string;
  }

const AllCardsPage: React.FC = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
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
  return (
    <div className="h-screen w-screen p-8 bg-gray-100">
      <h1 className="text-3xl text-black font-bold text-center mb-8">All Flashcards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((flashcard, index) => (
          <div key={index} className="p-6 bg-[#ff8906] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-black mb-4">{flashcard.question}</h2>
            <p className="text-gray-100">{flashcard.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/" className="ml-0 p-2 bg-[#ff8906] text-white rounded-lg  ring-[1px] ring-transparent  hover:bg-white hover:text-[#ff8906] hover:ring-[#ff8906] transition-all duration-300 mb-8">
          Back to Flashcards
        </a>
      </div>
    </div>
  );
};

export default AllCardsPage;
