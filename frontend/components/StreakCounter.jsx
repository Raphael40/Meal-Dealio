import React, { useState } from "react";
import { Text,View } from "react-native"

import StreakTracker from "../classes/StreakTracker"
import Total from "../classes/Total";

const StreakCounter= (props) => {
	const [streakTracker] = useState(new StreakTracker());
	const [total] = useState(new Total());

	const handleMealDealConsumed = () => {
		this.total.incrementTotal();
		this.StreakTracker.incrementStreak();
	};

	return (
		<View>
			<Text>Total Meal Deals Consumed: {total.getTotal()}</Text>
			<Text>Current Streak: {streakTracker.getCurrentStreak()}</Text>
			<Text>Longest Streak: {streakTracker.getLongestStreak()}</Text>
		</View>
	)
}

export default StreakCounter