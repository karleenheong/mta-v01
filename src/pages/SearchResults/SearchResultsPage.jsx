import { useState, useMemo } from 'react';
import { Star, MapPin, Wifi, ChevronDown } from 'lucide-react';

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

  // Calculate percentage
  return maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
};

const SearchResultsPage = ({ listings, activeProfile }) => {
  const [sortBy, setSortBy] = useState('match'); // 'match' or 'price'
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Properties in Fukuoka
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Filters <ChevronDown className="h-4 w-4" />
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="match">Sort by Match %</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6">
        {rankedListings.map(listing => (
          <div 
            key={listing.id} 
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 h-64 relative">
                <div className="absolute inset-0 bg-gray-200">
                  <img
                    src="/api/placeholder/400/320"
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{listing.matchScore}% match</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{listing.description}</p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag.replace(/_/g, ' ')}
                    </span>
                  ))}
                  {listing.tags.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      +{listing.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Features and Price Section */}
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">{listing.details.internetSpeed}</span>
                    </div>
                    <span className="text-sm text-gray-600">Min stay: {listing.details.minStay}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">¥{listing.basePrice.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
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