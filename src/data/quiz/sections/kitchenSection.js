export const kitchenSection = {
  id: 'kitchen',
  title: 'Kitchen Preferences',
  description: 'Tell us about your ideal kitchen setup',
  questions: [
    {
      id: 'kitchen-type',
      type: 'single',
      question: 'What type of kitchen setup do you prefer?',
      options: [
        { value: 'full', label: 'Full kitchen (separate room)' },
        { value: 'open', label: 'Open-plan kitchen' },
        { value: 'kitchenette', label: 'Kitchenette' },
        { value: 'shared', label: 'Shared kitchen' },
        { value: 'none', label: 'No kitchen needed' }
      ]
    },
    {
      id: 'cooking-frequency',
      type: 'single',
      question: 'How often do you cook?',
      options: [
        { value: 'multiple', label: 'Every day, multiple meals' },
        { value: 'daily', label: 'Daily, one main meal' },
        { value: 'weekly', label: 'A few times per week' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'never', label: 'Never' }
      ]
    },
    // Add more kitchen questions here
  ]
};