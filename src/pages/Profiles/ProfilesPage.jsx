import { useNavigate } from 'react-router-dom';
import { User, ArrowRight, Briefcase, MapPin } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import digitalNomadProfiles from '../../data/mockData/profiles';
import styles from './ProfilesPage.module.css';

const ProfilesPage = () => {
  const navigate = useNavigate();
  const { activeProfile, setActiveProfile } = useProfile();

  const handleProfileSelect = (profileId) => {
    setActiveProfile(digitalNomadProfiles[profileId]);
    navigate('/search');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Digital Nomad Profiles</h1>
      <div className={styles.grid}>
        {Object.entries(digitalNomadProfiles).map(([id, profile]) => (
          <div 
            key={id} 
            className={`${styles.card} ${activeProfile.id === id ? styles.activeCard : ''}`}
            onClick={() => handleProfileSelect(id)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.profileInfo}>
                <div className={styles.avatar}>
                  <User />
                </div>
                <div>
                  <h3 className={styles.profileName}>{profile.name}</h3>
                  <p className={styles.profileType}>
                    {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                </div>
              </div>
              {activeProfile.id === id && (
                <span className={styles.activeLabel}>Active</span>
              )}
            </div>

            <p className={styles.description}>{profile.description}</p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <Briefcase />
                <span>{profile.workStyle}</span>
              </div>
              <div className={styles.detailItem}>
                <MapPin />
                <span>Stays {profile.stayDuration}</span>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.budget}>
                <span>Budget: </span>
                <span className={styles.budgetAmount}>
                  ¥{profile.budget.preferred.toLocaleString()}/mo
                </span>
              </div>
              <button className={styles.selectButton}>
                Select <ArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;