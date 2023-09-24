import React, { useEffect, useState } from 'react'

import StreakDisplay from '../streak-display/StreakDisplay';
import Input from '../input/Input';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";
import putRequest from '../../firebase/fetch';

import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const totalCounter = new Total();
const streakTracker = new StreakTracker()

function Feed() {
  const [total, setTotal] = useState(0);
	const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ref = collection(db, 'Meals');
  
      try {
        const snapshot = await getDocs(ref);
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        }); 

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
    totalCounter.incrementTotal();
    setTotal(totalCounter.getTotal())
    
    streakTracker.incrementCurrentStreak();
    setCurrentStreak(streakTracker.getCurrentStreak())
    setLongestStreak(streakTracker.getLongestStreak())

    await putRequest(totalCounter.getTotal(), streakTracker.getCurrentStreak(), streakTracker.getLongestStreak())
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