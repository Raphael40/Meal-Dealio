import React, { useState } from 'react'
import StreakCounter from '../streak-counter/StreakCounter';
import Input from '../input/Input';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";

const totalCounter = new Total();
const streakTracker = new StreakTracker()

function Feed() {
  const [total, setTotal] = useState(totalCounter.getTotal());
	const [currentStreak, setCurrentStreak] = useState(streakTracker.getCurrentStreak());
  const [longestStreak, setLongestStreak] = useState(streakTracker.getLongestStreak());

  const handleMealDealConsumed = () => {
    totalCounter.incrementTotal();
    streakTracker.incrementStreak();

    console.log(streakTracker.getCurrentStreak())
    setTotal(totalCounter.getTotal())
    setCurrentStreak(streakTracker.getCurrentStreak())
    setLongestStreak(streakTracker.getLongestStreak())
  };

  return (
    <>
      <StreakCounter
        total={total}
        currentStreak={currentStreak}
        longestStreak={longestStreak}
      />
      <Input handleMealDealConsumed={handleMealDealConsumed} />
    </>
  )
}

export default Feed;