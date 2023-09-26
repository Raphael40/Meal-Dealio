import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

import StreakDisplay from '../streak-display/StreakDisplay';
import Input from '../input/Input';
import Achievements from '../achievements/Achievements';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";
import putRequest from '../../firebase/fetch';

// Instantiate the classes
const totalCounter = new Total();
const streakTracker = new StreakTracker()

function Feed() {
  const [total, setTotal] = useState(0);
	const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Runs once on load
  useEffect(() => {
    const fetchData = async () => {

      const mealsCollection = collection(db, 'Meals');

      try {
        // Gets all documents from the collection
        const snapshot = await getDocs(mealsCollection);
        let results = [];
        snapshot.docs.forEach(doc => {
          // Pushes each document into the results array
          results.push({id: doc.id, ...doc.data()});
        }); 
        // For each item in the document, increment the total class and set the new value to the state
        for (let i = results[0].total; i > 0; i--) {
          totalCounter.incrementTotal()
          setTotal(totalCounter.getTotal())
        }
        for (let i = results[0].longestStreak; i > 0; i--) {
          streakTracker.incrementLongestStreak()
          setLongestStreak(streakTracker.getLongestStreak())
        }
        for (let i = results[0].currentStreak; i > 0; i--) {
          streakTracker.incrementCurrentStreak()
          setCurrentStreak(streakTracker.getCurrentStreak())
        }
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    }
  
    fetchData();
  }, []);

  const handleMealDealConsumed = async () => {
    // On button press increment classes and set the new value to the state
    totalCounter.incrementTotal();
    setTotal(totalCounter.getTotal())
    
    streakTracker.incrementCurrentStreak();
    setCurrentStreak(streakTracker.getCurrentStreak())
    setLongestStreak(streakTracker.getLongestStreak())

    // Update the database
    await putRequest(totalCounter.getTotal(), streakTracker.getCurrentStreak(), streakTracker.getLongestStreak())
  };

  return (
    <>
      <View testID="feedId">
        <View>
          <StreakDisplay
            total={total}
            currentStreak={currentStreak}
            longestStreak={longestStreak}
          />
        </View>
        <View>
          <Input handleMealDealConsumed={handleMealDealConsumed} />
        </View>
        <View>
          <Achievements />
        </View>
      </View>
    </>
  )
}

export default Feed;