import React, { useState } from 'react'
import StreakCounter from '../streak-counter/StreakCounter';
import Input from '../input/Input';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";

function Feed() {
	const [streakTracker] = useState(new StreakTracker());
	const [total, setTotal] = useState(new Total());

  const handleMealDealConsumed = () => {
    setTotal(prevTotal => {
      prevTotal.incrementTotal(); // Use the function to update the state
      return { ...prevTotal }; // Return the updated state
    });
    streakTracker.incrementStreak();
  };

  return (
    <>
      <StreakCounter
        total={total.getTotal()}
        currentStreak={streakTracker.getCurrentStreak()}
        longestStreak={streakTracker.getLongestStreak()}
      />
      <Input handleMealDealConsumed={handleMealDealConsumed} />
    </>
  )
}

export default Feed;