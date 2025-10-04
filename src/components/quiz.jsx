import React, { useState } from 'react';

function Quiz() {
   const questionBank = [
     {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au"
    },
    {
        question: "Which country is famous for the pyramids?",
        options: ["Mexico", "Egypt", "India", "Peru"],
        answer: "Egypt"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Vincent van Gogh"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: "Diamond"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "Which organ purifies blood in the human body?",
        options: ["Heart", "Liver", "Kidneys", "Lungs"],
        answer: "Kidneys"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Cheetah", "Tiger", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese"
    }   
   ];

   const [optionSelected, setOptionSelected] = useState("None");

   function handleSelectOption(option) {
    setOptionSelected(option);
   }



    return (
        <div>
            <h2>Question 1</h2>
            <p className="question">{questionBank[0].question}</p>

            {questionBank[0].options.map((option) => (
               <button className="option" onClick={() => handleSelectOption(option)}>
                {" "}
                {option}{" "}
               </button>
            ))}

            <p>Selected Option: {optionSelected}</p>

            <div className="nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>



        </div>


    )
}

export default Quiz