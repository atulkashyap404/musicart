'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        name: "Franklin D. Roosevelt",
        title: "32nd President of the United States"
      },
      {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        name: "Martin Luther King Jr.",
        title: "Civil Rights Leader"
      },
      {
        quote: "The best way to predict the future is to invent it.",
        name: "Alan Kay",
        title: "Computer Scientist"
      },
      {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        name: "Charles R. Swindoll",
        title: "Author and Educator"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        name: "Steve Jobs",
        title: "Co-founder of Apple Inc."
      },
      {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        name: "Chinese Proverb",
        title: "Proverb"
      }
];

function TestimonialCards() {
  return (
     <div className="h-[50rem] w-full rounded flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
      <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default TestimonialCards
