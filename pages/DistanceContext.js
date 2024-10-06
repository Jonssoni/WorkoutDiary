
import React, { createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DistanceContext = createContext();



export const DistanceProvider = ({ children }) => {
  const [isMetric, setIsMetric] = useState(true); 

  useEffect(() => {
    const loadDistanceUnit = async () => {
      try {
        const storedUnit = await AsyncStorage.getItem('distanceUnit');
        if (storedUnit === 'miles') {
          setIsMetric(false);
        }
      } catch (error) {
        console.error('Error loading distance unit:', error);
      }
    };
    loadDistanceUnit();
  }, []);

const toggleDistanceUnit = async () => {
    const newUnit = isMetric ? 'miles' : 'km';
    try {
      await AsyncStorage.setItem('distanceUnit', newUnit);
      setIsMetric(!isMetric);
    } catch (error) {
      console.error('Error saving distance unit:', error);
    }
  };

  return (
    <DistanceContext.Provider value={{ isMetric, toggleDistanceUnit }}>
      {children}
    </DistanceContext.Provider>
  );
};
