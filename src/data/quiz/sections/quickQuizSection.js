export const quickQuizSection = {
  id: 'quick-quiz',
  title: 'Quick Preference Quiz',
  description: 'Let\'s quickly set up your basic preferences to find your perfect space',
  questions: [
    {
      id: 'stay_duration',
      type: 'single',
      question: 'How long do you typically stay in one location?',
      options: [
        { id: 'less_than_1', label: 'Less than 1 month' },
        { id: '1_to_3', label: '1-3 months' },
        { id: '3_to_6', label: '3-6 months' },
        { id: '6_plus', label: '6+ months' }
      ]
    },
    {
      id: 'monthly_budget',
      type: 'range',
      question: 'What\'s your preferred accommodation budget per month?',
      min: 500,
      max: 3000,
      step: 100,
      prefix: '$'
    },
    {
      id: 'work_schedule',
      type: 'single',
      question: 'What\'s your work schedule like?',
      options: [
        { id: 'standard', label: 'Standard work hours (9-5)' },
        { id: 'night_owl', label: 'Night owl (evening/night)' },
        { id: 'early_bird', label: 'Early bird (morning)' },
        { id: 'flexible', label: 'Flexible/variable hours' }
      ]
    },
    {
      id: 'work_location',
      type: 'single',
      question: 'Where do you primarily work?',
      options: [
        { id: 'home_office', label: 'Need dedicated home office room' },
        { id: 'living_space', label: 'Work from living space desk' },
        { id: 'mixed', label: 'Mix of home and coworking spaces' },
        { id: 'coworking', label: 'Mostly coworking spaces' }
      ]
    },
    {
      id: 'internet_speed',
      type: 'range',
      question: 'What\'s your minimum internet speed requirement?',
      min: 10,
      max: 1000,
      step: 10,
      suffix: 'Mbps'
    },
    {
      id: 'area_type',
      type: 'single',
      question: 'What\'s your preferred area type?',
      options: [
        { id: 'city_center', label: 'City center' },
        { id: 'residential', label: 'Quiet residential' },
        { id: 'nomad_hub', label: 'Digital nomad hub' },
        { id: 'suburban', label: 'Suburban' },
        { id: 'coastal', label: 'Beach/coastal' }
      ]
    },
    {
      id: 'must_have_amenities',
      type: 'multiple',
      question: 'Which amenities are must-haves?',
      maxSelections: 3,
      options: [
        { id: 'laundry', label: 'In-unit laundry' },
        { id: 'kitchen', label: 'Full kitchen' },
        { id: 'bathroom', label: 'Private bathroom' },
        { id: 'outdoor', label: 'Balcony/outdoor space' },
        { id: 'gym', label: 'Building gym' },
        { id: 'parking', label: 'Parking' },
        { id: 'ac', label: 'Air conditioning' }
      ]
    },
    {
      id: 'neighborhood_features',
      type: 'multiple',
      question: 'Which neighborhood features are most important?',
      maxSelections: 2,
      options: [
        { id: 'safety', label: 'Safety/security' },
        { id: 'dining', label: 'Dining options' },
        { id: 'coworking', label: 'Coworking spaces' },
        { id: 'fitness', label: 'Fitness facilities' },
        { id: 'expat', label: 'Expat community' },
        { id: 'culture', label: 'Local culture' },
        { id: 'nightlife', label: 'Nightlife' }
      ]
    }
  ]
};