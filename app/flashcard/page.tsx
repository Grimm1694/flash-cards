import Flashcard from '@/components/flashcard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white pt-[30px]  w-full h-full">
      <p className="text-xs text-orange-400 text-center mb-[10px]">
           Click on a card to edit or delete it, or add new flashcards.
      </p>
      <div className="flex flex-col items-end w-full">
      <Link href="/read">
        <button
            className="ml-0 p-2 bg-[#ff8906] text-white rounded-lg  ring-[1px] ring-transparent  hover:bg-white hover:text-[#ff8906] hover:ring-[#ff8906] transition-all duration-300 mb-8">
            Review All Flashcards
            </button>
        </Link>
      </div>
        <Flashcard />
    </div>
  )
}

export default page