"use client";
import React from 'react';
import Flashcard from '../components/flashcard';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { name: "Arrays", link: "/arrays", description: "Learn about array manipulations and algorithms." },
    { name: "Strings", link: "/strings", description: "Master string operations and common problems." },
    { name: "Heaps", link: "/heaps", description: "Understand heaps and their various applications." },
    { name: "Graphs", link: "/graphs", description: "Explore graph theory and algorithms." },
    { name: "Trees", link: "/trees", description: "Dive into binary trees, AVL trees, and more." },
    { name: "Dynamic Programming", link: "/dynamic-programming", description: "Solve problems using dynamic programming." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section with Headings and Catchy Phrase */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#ff8906] pt-[20px]">Welcome to DSA Learning Hub</h1>
        <h2 className="text-2xl font-medium text-[#f25f4c] mt-[10px] mb-[30px]">Master Concepts, One Flashcard at a Time!</h2>
        <Link href="/flashcard">
          <button   className="ml-0 p-2 bg-[#ff8906] text-white rounded-lg  ring-[1px] ring-transparent  hover:bg-white hover:text-[#ff8906] hover:ring-[#ff8906] transition-all duration-300 ">
            Start Learning Now
          </button>
        </Link>
      </div>

      {/* Categories Section */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-6 pb-[10px]">
        {categories.map((category) => (
          <div key={category.name} >
            <div className="bg-[#FAD5A5] p-6 rounded-lg shadow-md hover:bg-[#FAC898] cursor-pointer">
              <h2 className="text-xl font-semibold text-[#ff8906]">{category.name}</h2>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
