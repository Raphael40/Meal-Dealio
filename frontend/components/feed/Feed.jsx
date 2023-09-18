import React, { useEffect, useState } from 'react'

import StreakDisplay from '../streak-display/StreakDisplay';
import Input from '../input/Input';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";

import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const totalCounter = new Total();
const streakTracker = new StreakTracker()

function Feed() {
  const [total, setTotal] = useState(totalCounter.getTotal());
	const [currentStreak, setCurrentStreak] = useState(streakTracker.getCurrentStreak());
  const [longestStreak, setLongestStreak] = useState(streakTracker.getLongestStreak());

  useEffect(() => {
    async function fetchData() {
      const ref = collection(db, 'Meals');
  
      try {
        const snapshot = await getDocs(ref);
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        console.log(results);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    }
  
    fetchData();
  }, []);

  const handleMealDealConsumed = () => {
    totalCounter.incrementTotal();
    streakTracker.incrementStreak();

    setTotal(totalCounter.getTotal())
    setCurrentStreak(streakTracker.getCurrentStreak())
    setLongestStreak(streakTracker.getLongestStreak())
  };

  return (
    <>
      <StreakDisplay
        total={total}
        currentStreak={currentStreak}
        longestStreak={longestStreak}
      />
      <Input handleMealDealConsumed={handleMealDealConsumed} />
    </>
  )
}

export default Feed;