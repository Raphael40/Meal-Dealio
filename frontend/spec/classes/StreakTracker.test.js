import StreakTracker from "../../classes/StreakTracker";

// npx jest - to run tests

describe("StreakTracker Class", () => {
  it("should return a new instance of StreakTracker", () => {
      const streakTracker = new StreakTracker();
      expect(streakTracker).toBeInstanceOf(StreakTracker);
  });

  it("should construct with currentStreak as 0 and longestStreak as 0", () => {
    const streakTracker = new StreakTracker();
    expect(streakTracker.getCurrentStreak()).toEqual(0);
    expect(streakTracker.getLongestStreak()).toEqual(0);
  })

  it("should increment the currentStreak by 1", () => {
    const streakTracker = new StreakTracker();
    streakTracker.incrementCurrentStreak();
    expect(streakTracker.getCurrentStreak()).toEqual(1);
  })

  it("should increment the longestStreak by 1", () => {
    const streakTracker = new StreakTracker();
    streakTracker.incrementLongestStreak();
    expect(streakTracker.getLongestStreak()).toEqual(1);
  })

  it("should change the longestStreak to the currentStreak if the currentStreak is bigger", () => {
    const streakTracker = new StreakTracker();
    streakTracker.incrementLongestStreak();
    streakTracker.incrementLongestStreak();
    expect(streakTracker.getLongestStreak()).toEqual(2);
    streakTracker.incrementCurrentStreak();
    streakTracker.incrementCurrentStreak();
    streakTracker.incrementCurrentStreak();
    expect(streakTracker.getCurrentStreak()).toEqual(3);
    expect(streakTracker.getLongestStreak()).toEqual(3);
  })

  it("should reset the currentStreak to 0 if resetCurrentStreak is called", () => {
    const streakTracker = new StreakTracker();
    streakTracker.incrementCurrentStreak();
    expect(streakTracker.getCurrentStreak()).toEqual(1);
    streakTracker.resetCurrentStreak();
    expect(streakTracker.getCurrentStreak()).toEqual(0);
  })
})