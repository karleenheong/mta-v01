import { Search, Calendar, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
      <div className={styles.heroTitles}>
        <h1 className={styles.heroTitle}>
          Find Your Perfect Nomad Nest
        </h1>
        <h2 className={styles.heroSubtitle}>
          Properties Ranked To Your Every Preference
        </h2>
      </div>
        
        {/* Search Box */}
        <div className={styles.searchBox}>
          <div className={styles.searchGrid}>
            <div className={styles.searchField}>
              <Search className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Where are you going?"
                className={styles.searchInput}
              />
            </div>

            <div className={styles.searchField}>
              <Calendar className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Add dates"
                className={styles.searchInput}
              />
            </div>

            <div className={styles.searchField}>
              <Users className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Add guests"
                className={styles.searchInput}
              />
            </div>
          </div>

          <button className={styles.searchButton}>
            Search
          </button>
        </div>

        {/* Quick Quiz Section */}
        <div className={styles.quizSection}>
          <h2 className={styles.quizTitle}>
            Start the Super-Personalization Quiz
          </h2>
          <p className={styles.quizDescription}>
            Get started with 10 quick questions about your digital nomad travel style
          </p>
          <button 
            onClick={() => navigate('/quiz')}
            className={styles.quizButton}
          >
            Find the Best Properties for Me
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;