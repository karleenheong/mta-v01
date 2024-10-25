import { Search, Calendar, Users } from 'lucide-react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Find Your Perfect Digital Nomad Nest
        </h1>
        
        {/* Search Box */}
        <div className={styles.searchBox}>
          <div className={styles.searchGrid}>
            {/* Location Search */}
            <div className={styles.searchField}>
              <Search className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Where are you going?"
                className={styles.searchInput}
              />
            </div>

            {/* Check-in/Check-out */}
            <div className={styles.searchField}>
              <Calendar className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Add dates"
                className={styles.searchInput}
              />
            </div>

            {/* Guests */}
            <div className={styles.searchField}>
              <Users className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Add guests"
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Search Button */}
          <button className={styles.searchButton}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;