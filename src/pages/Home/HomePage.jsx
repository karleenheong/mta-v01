import { Search, Calendar, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Find Your Perfect Digital Nomad Nest
        </h1>
        
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
            Not sure where to start?
          </h2>
          <p className={styles.quizDescription}>
            Take our 5-minute quiz to get personalized recommendations based on your digital nomad lifestyle
          </p>
          <button 
            onClick={() => navigate('/quiz')}
            className={styles.quizButton}
          >
            Start Quick Quiz
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;