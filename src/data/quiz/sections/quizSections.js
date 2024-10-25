import { kitchenSection } from './kitchenSection';
import { workspaceSection } from './workspaceSection';
// import { bathroomSection } from './bathroomSection';
// import { bedroomSection } from './bedroomSection';
// import { livingAreaSection } from './livingAreaSection';
// import { propertySection } from './propertySection';
// import { buildingAmenitiesSection } from './buildingAmenitiesSection';
// import { layoutAndSpaceSection } from './layoutAndSpaceSection';
// import { neighborhoodSection } from './neighborhoodSection';
// import { digitalNomadSection } from './digitalNomadSection';
// import { professionalSection } from './professionalSection';
// import { essentialSection } from './essentialSection';
// import { transportationSection } from './transportationSection';
// import { entertainmentSection } from './entertainmentSection';

const createPlaceholderSection = (title, description) => ({
  title,
  description,
  questions: [
    {
      id: 'placeholder',
      type: 'text',
      question: 'This section is under development',
      required: false
    }
  ]
});

const sectionsWithIds = [
  // Lifestyle Preferences
  {
    id: 'workspace',
    ...workspaceSection
  },
  {
    id: 'digitalNomad',
    ...createPlaceholderSection('Digital Nomad Infrastructure', 'Set your digital nomad and connectivity requirements')
  },

  // Living Spaces
  {
    id: 'kitchen',
    ...kitchenSection
  },
  {
    id: 'bathroom',
    ...createPlaceholderSection('Bathroom Preferences', 'Set your bathroom preferences')
  },
  {
    id: 'bedroom',
    ...createPlaceholderSection('Bedroom Preferences', 'Configure bedroom preferences')
  },
  {
    id: 'livingArea',
    ...createPlaceholderSection('Living Area Preferences', 'Set living space preferences')
  },

  // Property & Building
  {
    id: 'property',
    ...createPlaceholderSection('Property Features', 'Set general property preferences')
  },
  {
    id: 'buildingAmenities',
    ...createPlaceholderSection('Building Amenities', 'Choose important building features')
  },
  {
    id: 'layoutAndSpace',
    ...createPlaceholderSection('Layout & Space', 'Configure space and layout preferences')
  },

  // Location & Surroundings
  {
    id: 'neighborhood',
    ...createPlaceholderSection('Neighborhood Preferences', 'Set neighborhood preferences')
  },
  {
    id: 'professional',
    ...createPlaceholderSection('Professional Services', 'Configure nearby service requirements')
  },
  {
    id: 'essential',
    ...createPlaceholderSection('Essential Services', 'Set essential service preferences')
  },
  {
    id: 'transportation',
    ...createPlaceholderSection('Transportation Preferences', 'Configure transport preferences')
  },
  {
    id: 'entertainment',
    ...createPlaceholderSection('Entertainment & Culture', 'Set entertainment preferences')
  }
];

export const quizSections = sectionsWithIds;