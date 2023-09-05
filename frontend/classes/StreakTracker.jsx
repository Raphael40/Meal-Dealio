class StreakTracker {
	constructor() {
		this.currentStreak = 0;
		this.longestStreak = 0;
	}

	incrementStreak() {
		this.CurrentStreak++;
		if (this.currentStreak > this.longestStreak) {
			this.longestStreak = this.currentStreak;
		}
	}

	resetStreak() {
		this.currentStreak = 0;
	}

	getCurrentStreak() {
		return this.currentStreak
	}

	getLongestStreak() {
		return this.longestStreak
	}
}

export default StreakTracker