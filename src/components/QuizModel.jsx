import React from 'react';

const quizData = {
  Brain: [
    { question: "Which part of the brain controls vision?", options: ["Occipital lobe", "Frontal lobe", "Temporal lobe", "Parietal lobe"] },
  ],
  Lungs: [
    { question: "What is the main function of the lungs?", options: ["Pump blood", "Digest food", "Exchange gases", "Produce hormones"] },
  ],
  Breast: [
    { question: "When should self-breast exams start?", options: ["After age 10", "After age 20", "After age 30", "After age 40"] },
  ],
  Mouth: [
    { question: "What is a common cause of mouth cancer?", options: ["Tobacco use", "Cold drinks", "Caffeine", "Spicy food"] },
  ]
};

const QuizModal = ({ type, onClose }) => {
  const questions = quizData[type] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-4">{type} Quiz</h2>
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium">{q.question}</p>
            <ul className="list-disc ml-6 mt-2">
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizModal;
