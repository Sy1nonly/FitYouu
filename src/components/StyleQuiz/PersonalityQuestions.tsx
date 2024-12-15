import React from 'react';

interface Props {
  onComplete: (results: any) => void;
}

export default function PersonalityQuestions({ onComplete }: Props) {
  const [answers, setAnswers] = React.useState({});

  const questions = [
    {
      id: 'music',
      text: 'What type of music do you listen to most?',
      options: ['Hip Hop', 'Rock', 'Pop', 'Classical', 'Electronic']
    },
    {
      id: 'activities',
      text: 'How do you usually spend your weekends?',
      options: ['Outdoor Activities', 'Social Events', 'Relaxing at Home', 'Cultural Activities']
    },
    // Add more personality questions
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Let's Find Your Style</h3>
      {questions.map(q => (
        <div key={q.id} className="space-y-3">
          <p className="font-medium">{q.text}</p>
          <div className="grid grid-cols-2 gap-2">
            {q.options.map(option => (
              <button
                key={option}
                onClick={() => {
                  const newAnswers = { ...answers, [q.id]: option };
                  setAnswers(newAnswers);
                  if (Object.keys(newAnswers).length === questions.length) {
                    onComplete(newAnswers);
                  }
                }}
                className={`p-3 rounded-lg border ${
                  answers[q.id] === option
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}