const CACHE_KEY = 'weatherCache';
const CACHE_LIMIT = 10; // cache size to 10 cities 


export const getCache = () => {
    const cache = localStorage.getItem(CACHE_KEY);
    return cache ? JSON.parse(cache) : [];
  };


  export const setCache = (cache) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  };
  

export const addToCache = (weatherData) => {
    let cache = getCache();
    cache = cache.filter(item => item.city !== weatherData.city); // Remove existing entry for the city
    cache.unshift(weatherData); // Add new data at the beginning
    if (cache.length > CACHE_LIMIT) {
      cache.pop(); // Remove the oldest entry if the cache exceeds the limit
    }
    setCache(cache);
  };
  

export const getFromCache = (city) => {
    const cache = getCache();
    return cache.find(item => item.city.toLowerCase() === city.toLowerCase());
  };
  

  // Can use this for debugging. Prints every cache entry in console
  export const printCache = () => {
    const cache = getCache();
    if (cache.length === 0) {
      console.log('The cache is empty.');
    } else {
      console.log('Cached Cities and their IDs:');
      cache.forEach(item => {
        console.log(`ID: ${item.id}, City: ${item.city}`);
      });
    }
  };
  
