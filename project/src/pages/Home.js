import BigTitle from '../components/BigTitle';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const handleSearch = (city) => {
        // logic and API call
        console.log(`Searching for city: ${city}`);
      };

    return (
      <div>
        <BigTitle title="Weather App"/>
        <SearchBar onSearch={handleSearch}/>
      </div>
    );
  };
  
  export default Home;
  