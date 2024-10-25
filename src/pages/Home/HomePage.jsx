import { Link } from 'react-router-dom';
import { Search, Calendar, Users, Menu } from 'lucide-react';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            Cozyama
          </Link>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link to="/preference-center" className={styles.navLink}>
              Preferences
            </Link>
            <div className={styles.profileSwitch}>
              <button className={styles.navLink}>
                Switch Profile
              </button>
            </div>
            <Link to="/account" className={styles.navLink}>
              Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuButton}>
            <Menu />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Support</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Help Center</a></li>
                <li><a href="#" className={styles.footerLink}>Safety Information</a></li>
                <li><a href="#" className={styles.footerLink}>Contact Us</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Community</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Digital Nomad Forum</a></li>
                <li><a href="#" className={styles.footerLink}>Local Events</a></li>
                <li><a href="#" className={styles.footerLink}>Blog</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Hosting</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>List Your Property</a></li>
                <li><a href="#" className={styles.footerLink}>Host Resources</a></li>
                <li><a href="#" className={styles.footerLink}>Community Guidelines</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>About</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>About Us</a></li>
                <li><a href="#" className={styles.footerLink}>Careers</a></li>
                <li><a href="#" className={styles.footerLink}>Press</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;