export const quizQuestions = [
  {
    id: 'duration',
    category: 'Digital Nomad Style & Duration',
    question: 'How long do you typically stay in one location?',
    type: 'single',
    options: [
      { value: 'less_than_1', label: 'Less than 1 month' },
      { value: '1_to_3', label: '1-3 months' },
      { value: '3_to_6', label: '3-6 months' },
      { value: '6_plus', label: '6+ months' }
    ]
  },
  {
    id: 'budget',
    category: 'Digital Nomad Style & Duration',
    question: 'What\'s your preferred accommodation budget per month?',
    type: 'slider',
    min: 500,
    max: 3000,
    step: 100,
    unit: '$'
  },
  // ... rest of the questions from previous response ...
];