import React from "react";
import { Text,View } from "react-native"

import styles from "./streakDisplay.style"

const StreakDisplay= ({ total, currentStreak, longestStreak }) => {

	return (
		<View testID="streakDisplayId" style={styles.statContainer}>
			<View style={styles.container}>
				<Text style={styles.text}>Total Meal Deals Consumed: {total}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Current Streak: {currentStreak}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Longest Streak: {longestStreak}</Text>
			</View>
		</View>
	)
}

export default StreakDisplay;