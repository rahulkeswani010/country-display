import React, { useEffect, useState } from 'react';
import styles from './Country.module.css';

const Country = () => {
  const [apiData, setApiData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCountries = apiData
    ? apiData.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className={styles.searchContainer} style={{ flexDirection: 'column' }}>
     <div>
       <input
        type="text"
        placeholder="Search for a countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
     </div>
      <div className={styles.flagSection} >
      <div style={containerStyle}>
        {filteredCountries.map((country) => (
          <div key={country.cca3}  className={styles.countryContainer} style={{ flexDirection: 'column' }}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className={styles.countryImage}
            />
            <h2 className={styles.countryName}>{country.name.common}</h2>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Country;
