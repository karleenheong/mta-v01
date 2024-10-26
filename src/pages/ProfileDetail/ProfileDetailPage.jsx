import { useParams, useNavigate } from 'react-router-dom';
import { User, ArrowLeft, Briefcase, MapPin, Tags } from 'lucide-react';
import digitalNomadProfiles from '../../data/mockData/profiles';
import styles from './ProfileDetailPage.module.css';

const ProfileDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = digitalNomadProfiles[id];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className={styles.container}>
      <button 
        onClick={() => navigate('/profiles')} 
        className={styles.backButton}
      >
        <ArrowLeft /> Back to Profiles
      </button>

      <div className={styles.header}>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>
            <User />
          </div>
          <div>
            <h1 className={styles.profileName}>{profile.name}</h1>
            <p className={styles.profileType}>
              {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>About</h2>
          <p className={styles.description}>{profile.description}</p>
        </section>

        <section className={styles.section}>
          <h2>Work & Stay Details</h2>
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
        </section>

        <section className={styles.section}>
          <h2>Budget Range</h2>
          <div className={styles.budgetDetails}>
            <div className={styles.budgetItem}>
              <span>Minimum:</span>
              <span>¥{profile.budget.min.toLocaleString()}</span>
            </div>
            <div className={styles.budgetItem}>
              <span>Preferred:</span>
              <span>¥{profile.budget.preferred.toLocaleString()}</span>
            </div>
            <div className={styles.budgetItem}>
              <span>Maximum:</span>
              <span>¥{profile.budget.max.toLocaleString()}</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Preferences</h2>
          <div className={styles.preferences}>
            <h3>Must-Haves (8-10)</h3>
            <div className={styles.tagGroup}>
              {Object.entries(profile.preferenceWeights)
                .filter(([_, weight]) => weight >= 8)
                .map(([tag, weight]) => (
                  <div key={tag} className={styles.tag}>
                    <span>{tag.replace(/_/g, ' ')}</span>
                    <span className={styles.weight}>{weight}</span>
                  </div>
                ))}
            </div>

            <h3>Strong Preferences (6-7)</h3>
            <div className={styles.tagGroup}>
              {Object.entries(profile.preferenceWeights)
                .filter(([_, weight]) => weight >= 6 && weight < 8)
                .map(([tag, weight]) => (
                  <div key={tag} className={styles.tag}>
                    <span>{tag.replace(/_/g, ' ')}</span>
                    <span className={styles.weight}>{weight}</span>
                  </div>
                ))}
            </div>

            <h3>Nice-to-Haves (4-5)</h3>
            <div className={styles.tagGroup}>
              {Object.entries(profile.preferenceWeights)
                .filter(([_, weight]) => weight >= 4 && weight < 6)
                .map(([tag, weight]) => (
                  <div key={tag} className={styles.tag}>
                    <span>{tag.replace(/_/g, ' ')}</span>
                    <span className={styles.weight}>{weight}</span>
                  </div>
                ))}
            </div>

            <h3>Neutral (1-3)</h3>
            <div className={styles.tagGroup}>
              {Object.entries(profile.preferenceWeights)
                .filter(([_, weight]) => weight > 0 && weight < 4)
                .map(([tag, weight]) => (
                  <div key={tag} className={styles.tag}>
                    <span>{tag.replace(/_/g, ' ')}</span>
                    <span className={styles.weight}>{weight}</span>
                  </div>
                ))}
            </div>

            <h3>Negatives</h3>
            <div className={styles.tagGroup}>
              {Object.entries(profile.preferenceWeights)
                .filter(([_, weight]) => weight < 0)
                .map(([tag, weight]) => (
                  <div key={tag} className={styles.tag}>
                    <span>{tag.replace(/_/g, ' ')}</span>
                    <span className={styles.weight}>{weight}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileDetailPage;