import React, { useState } from "react";
import { Text,View } from "react-native"

import StreakTracker from "../../classes/StreakTracker"
import Total from "../../classes/Total";
import styles from "./streakCounter.style"

const StreakCounter= (props) => {
	const [streakTracker] = useState(new StreakTracker());
	const [total] = useState(new Total());

	const handleMealDealConsumed = () => {
		this.total.incrementTotal();
		this.StreakTracker.incrementStreak();
	};

	return (
		<View style={styles.statContainer}>
			<View style={styles.container}>
				<Text style={styles.text}>Total Meal Deals Consumed: {total.getTotal()}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Current Streak: {streakTracker.getCurrentStreak()}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Longest Streak: {streakTracker.getLongestStreak()}</Text>
			</View>
		</View>
	)
}

export default StreakCounter