import React, { useState } from 'react'
import StreakCounter from '../streak-counter/StreakCounter';
import Input from '../input/Input';
import StreakTracker from "../../classes/StreakTracker";
import Total from "../../classes/Total";

const totalCounter = new Total();

function Feed() {
	const [streakTracker] = useState(new StreakTracker());

  const [total, setTotal] = useState(totalCounter.getTotal());

  const handleMealDealConsumed = () => {
    totalCounter.incrementTotal();
    setTotal(instantiatedClass.getTotal())
  };

  return (
    <>
      <StreakCounter
        total={total}
        currentStreak={streakTracker.getCurrentStreak()}
        longestStreak={streakTracker.getLongestStreak()}
      />
      <Input handleMealDealConsumed={handleMealDealConsumed} />
    </>
  )
}

export default Feed;