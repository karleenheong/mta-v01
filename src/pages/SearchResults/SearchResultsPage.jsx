import { useState, useMemo } from 'react';
import { listingImages } from '../../assets/listings/listingImages';
import styles from './SearchResultsPage.module.css';

const calculateMatchScore = (listing, profile) => {
  let totalScore = 0;
  let totalPossibleScore = 0;
  
  // First, calculate points for matching tags
  listing.tags.forEach(tag => {
    const weight = profile.preferenceWeights[tag];
    if (weight) {
      if (weight > 0) {
        totalScore += weight;
      } else {
        // Negative preferences have a stronger impact
        totalScore += weight * 1.5;
      }
    }
  });

  // Then, penalize for missing preferred tags
  Object.entries(profile.preferenceWeights).forEach(([tag, weight]) => {
    if (weight > 5) { // Only consider important preferences
      totalPossibleScore += weight;
      // If the listing doesn't have a preferred tag, penalize
      if (!listing.tags.includes(tag) && weight > 0) {
        totalScore -= weight * 0.7; // Missing preferred features reduce score
      }
    }
  });

  // Calculate percentage and ensure it's between 0 and 100
  const rawScore = (totalScore / totalPossibleScore) * 100;
  return Math.max(0, Math.min(100, Math.round(rawScore)));
};

const getMatchExplanation = (listing, profile) => {
  const matches = [];
  const missingImportant = [];

  // Find matching important features
  listing.tags.forEach(tag => {
    const weight = profile.preferenceWeights[tag];
    if (weight && weight >= 7) {
      matches.push({ tag, weight });
    }
  });

  // Find missing important features
  Object.entries(profile.preferenceWeights).forEach(([tag, weight]) => {
    if (weight >= 7 && !listing.tags.includes(tag)) {
      missingImportant.push({ tag, weight });
    }
  });

  return { matches, missingImportant };
};

const formatTag = (tag) => {
  return tag
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const SearchResultsPage = ({ listings, activeProfile }) => {
  const [sortBy, setSortBy] = useState('match');

  const rankedListings = useMemo(() => {
    return Object.values(listings)
      .map(listing => {
        const matchScore = calculateMatchScore(listing, activeProfile);
        const { matches, missingImportant } = getMatchExplanation(listing, activeProfile);
        
        return {
          ...listing,
          matchScore,
          matches,
          missingImportant,
          withinBudget: listing.basePrice <= activeProfile.budget.max && 
                        listing.basePrice >= activeProfile.budget.min
        };
      })
      .sort((a, b) => {
        if (sortBy === 'match') {
          const aScore = a.withinBudget ? a.matchScore : a.matchScore * 0.8;
          const bScore = b.withinBudget ? b.matchScore : b.matchScore * 0.8;
          return bScore - aScore;
        }
        return a.basePrice - b.basePrice;
      });
  }, [listings, activeProfile, sortBy]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profileInfo}>
          <h1>Properties Matching {activeProfile.name}'s Preferences</h1>
          <p className={styles.profileDescription}>{activeProfile.description}</p>
          <div className={styles.profileDetails}>
            <span>Work Style: {activeProfile.workStyle}</span>
            <span>Stay Duration: {activeProfile.stayDuration}</span>
            <span>Budget: ¥{activeProfile.budget.min.toLocaleString()} - ¥{activeProfile.budget.max.toLocaleString()}</span>
          </div>
        </div>
        
        <div className={styles.controls}>
          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="match">Best match first</option>
            <option value="price">Price: low to high</option>
          </select>
        </div>
      </div>

      <div className={styles.listingsContainer}>
        {rankedListings.map(listing => (
          <div key={listing.id} className={styles.listingCard}>
            <div className={styles.listingImage}>
              <img
                src={listingImages[listing.id]}
                alt={listing.title}
                className={styles.propertyImage}
              />
              <div 
                className={styles.matchScore} 
                style={{ 
                  backgroundColor: `hsl(${listing.matchScore}, 70%, 45%)`
                }}
              >
                {listing.matchScore}% Match
              </div>
              {!listing.withinBudget && (
                <div className={styles.budgetWarning}>
                  Outside budget range
                </div>
              )}
            </div>

            <div className={styles.listingContent}>
              <div className={styles.mainInfo}>
                <h2>{listing.title}</h2>
                <div className={styles.location}>{listing.location}</div>
                <div className={styles.price}>
                  <span className={styles.amount}>¥{listing.basePrice.toLocaleString()}</span>
                  <span className={styles.period}>/month</span>
                </div>
              </div>

              <div className={styles.matchDetails}>
                {listing.matches.length > 0 && (
                  <div className={styles.matchingFeatures}>
                    <h3>Matching Preferences</h3>
                    <ul>
                      {listing.matches.map(({ tag, weight }) => (
                        <li key={tag} className={styles.matchingFeature}>
                          <span className={styles.checkmark}>✓</span>
                          {formatTag(tag)}
                          <span className={styles.weight}>Priority: {weight}/10</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {listing.missingImportant.length > 0 && (
                  <div className={styles.missingFeatures}>
                    <h3>Missing Important Features</h3>
                    <ul>
                      {listing.missingImportant.map(({ tag, weight }) => (
                        <li key={tag} className={styles.missingFeature}>
                          <span className={styles.xmark}>×</span>
                          {formatTag(tag)}
                          <span className={styles.weight}>Priority: {weight}/10</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className={styles.details}>
                <div className={styles.amenities}>
                  <span>
                    <strong>Internet:</strong> {listing.details.internetSpeed}
                  </span>
                  <span>
                    <strong>Min stay:</strong> {listing.details.minStay}
                  </span>
                  {listing.details.nearbyStations && (
                    <span>
                      <strong>Near:</strong> {listing.details.nearbyStations.join(', ')}
                    </span>
                  )}
                </div>
                <button className={styles.viewDetails}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;