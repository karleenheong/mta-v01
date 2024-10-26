import { createContext, useContext, useState } from 'react';
import digitalNomadProfiles from '../data/mockData/profiles';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState(digitalNomadProfiles["urban-minimalist"]);

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};