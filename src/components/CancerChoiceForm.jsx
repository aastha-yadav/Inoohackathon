import React, { useState } from 'react';


const cancerTypes = [
  { name: 'Brain', image: './images/Brain.jpeg' },
  { name: 'Lungs', image: '/images/Lungs.jpeg' },
  { name: 'Breast', image: '/images/breast.jpeg' },
  { name: 'Mouth', image: '/images/mouth.jpeg' },
];

const CancerChoiceForm = () => {
  const [selectedType, setSelectedType] = useState(null); // to track selected cancer type

  const handleChoice = (type) => {
    setSelectedType(type); // open quiz modal
  };

  const closeModal = () => {
    setSelectedType(null);
  };

  return (
    <div className="p-8 py-12 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Choose a Cancer Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-64">
        {cancerTypes.map((type) => (
          <div
            key={type.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer h-80 flex flex-col items-center justify-center"
            onClick={() => handleChoice(type.name)}
          >
            <img
              src={type.image}
              alt={type.name}
              className="w-full h-40 object-contain p-4"
            />
            <div className="text-center py-4">
              <h3 className="text-3xl font-semibold text-blue-700">{type.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Show Quiz Modal when a type is selected */}
      {selectedType && (
        <QuizModal type={selectedType} onClose={closeModal} />
      )}
    </div>
  );
};

export default CancerChoiceForm;
