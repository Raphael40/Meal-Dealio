import React, { Component } from "react";
import { Text,View } from "react-native"

import StreakTracker from "../classes/StreakTracker"

class StreakCounter extends Component {
	constructor(props) {
		super(props);
		this.streakTracker = new StreakTracker();
	}

	handleMealDealConsumed() {
		this.StreakTracker.incrementStreak();
	}

	render() {
		return (
			<View>
				<Text>Current Streak: {this.streakTracker.getCurrentStreak()}</Text>
				<Text>Longest Streak: {this.streakTracker.getLongestStreak()}</Text>
			</View>
		)
	}
}

export default StreakCounter