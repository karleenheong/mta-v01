import { Outlet, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import styles from './MainLayout.module.css';
import logoImage from '../../assets/images/logo.png';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo}>
            <img src={logoImage} alt="Cozyama" />
          </Link>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link to="/preference-center" className={styles.navLink}>
              Preferences
            </Link>
            <Link to="/profiles" className={styles.navLink}>
              Profiles
            </Link>
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

      {/* Main Content */}
      <main className={styles.main}>
        <Outlet />
      </main>

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
          <div className={styles.footerBottom}>
            <div>© 2024 Cozyama. All rights reserved.</div>
            <div>Terms · Privacy · Cookie Settings</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout