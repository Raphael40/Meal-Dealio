class StreakTracker {
	constructor() {
		this.currentStreak = 0;
		this.longestStreak = 0;
	}

	incrementCurrentStreak() {
		this.currentStreak++;
		if (this.currentStreak > this.longestStreak) {
			this.longestStreak = this.currentStreak;
		}
	}

	incrementLongestStreak() {
		this.longestStreak++
	}

	resetCurrentStreak() {
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