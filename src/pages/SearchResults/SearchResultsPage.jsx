import { useState, useMemo } from 'react';
import { listingImages } from '../../assets/listings/listingImages';
import styles from './SearchResultsPage.module.css';

const calculateMatchScore = (listing, profile) => {
  let totalScore = 0;
  let maxPossibleScore = 0;

  listing.tags.forEach(tag => {
    if (profile.preferenceWeights[tag]) {
      const weight = profile.preferenceWeights[tag];
      if (weight > 0) {
        totalScore += weight;
        maxPossibleScore += weight;
      }
    }
  });

  return maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
};

const SearchResultsPage = ({ listings, activeProfile }) => {
  const [sortBy, setSortBy] = useState('match');
  const [showFilters, setShowFilters] = useState(false);

  const rankedListings = useMemo(() => {
    return Object.values(listings)
      .map(listing => ({
        ...listing,
        matchScore: calculateMatchScore(listing, activeProfile)
      }))
      .sort((a, b) => {
        if (sortBy === 'match') {
          return b.matchScore - a.matchScore;
        }
        return a.basePrice - b.basePrice;
      });
  }, [listings, activeProfile, sortBy]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Properties in Fukuoka</h1>
        <div className={styles.controls}>
          <button 
            className={styles.filterButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters ▼
          </button>
          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="match">Sort by Match %</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      <div className={styles.resultsGrid}>
        {rankedListings.map(listing => (
          <div key={listing.id} className={styles.listingCard}>
            <div className={styles.imageSection}>
            <img
              src={listingImages[listing.id]}
              alt={listing.title}
              className={styles.listingImage}
            />
              <div className={styles.matchBadge}>
                {listing.matchScore}% match
              </div>
            </div>

            <div className={styles.contentSection}>
              <div className={styles.titleSection}>
                <h2>{listing.title}</h2>
                <div className={styles.location}>{listing.location}</div>
                <div className={styles.price}>
                  ¥{listing.basePrice.toLocaleString()}
                  <span className={styles.perMonth}>per month</span>
                </div>
              </div>

              <div className={styles.description}>{listing.description}</div>

              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Internet:</span>
                  {listing.details.internetSpeed}
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Min stay:</span>
                  {listing.details.minStay}
                </div>
                {listing.details.nearbyStations && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Stations:</span>
                    {listing.details.nearbyStations.join(', ')}
                  </div>
                )}
              </div>

              <div className={styles.tagsSection}>
                <h3 className={styles.tagsTitle}>Property Tags:</h3>
                <div className={styles.tags}>
                  {listing.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;