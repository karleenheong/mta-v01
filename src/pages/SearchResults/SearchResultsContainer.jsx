import SearchResultsPage from './SearchResultsPage';
import fukuokaListings from '../../data/mockData/listings';
import { useProfile } from '../../contexts/ProfileContext';

const SearchResultsContainer = () => {
  const { activeProfile } = useProfile();

  return (
    <SearchResultsPage 
      listings={fukuokaListings} 
      activeProfile={activeProfile}
    />
  );
};

export default SearchResultsContainer;