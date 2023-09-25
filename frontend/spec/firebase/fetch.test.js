import putRequest from "../../firebase/fetch";
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from "../../firebase/config";

// Mock the Firebase functions
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  updateDoc: jest.fn()
}));

describe('putRequest', () => {
  // Mock the console.error function
  const originalConsoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalConsoleError;
  });
  
  it('should update the document in Firestore', async () => {
    // Mock the Firestore functions
    const mockedDocRef = doc(db, 'Meals', '8rhTTawNno5YJWVbHkfI')
    doc.mockReturnValue(mockedDocRef);

    const total = 10;
    const current = 5;
    const longest = 7;

    // Call the function
    await putRequest(total, current, longest);

    // Check if the function has been called with the correct arguments
    expect(updateDoc).toHaveBeenCalledWith(mockedDocRef, {
      total: total,
      currentStreak: current,
      longestStreak: longest,
    });
  });

  it('should handle errors', async () => {
    // Mock the Firestore functions
    const mockedDocRef = doc(db, 'Meals', '8rhTTawNno5YJWVbHkfI')
    doc.mockReturnValue(mockedDocRef);

    // Mock the updateDoc function to throw an error
    const error = new Error('there was an error');
    updateDoc.mockRejectedValue(error);

    // Mock the console.error function
    const consoleErrorSpy = jest.spyOn(console, 'error');

    // Call the function
    await putRequest(10, 5, 7);

    // Check if the function has been called with the correct arguments
    expect(updateDoc).toHaveBeenCalledWith(mockedDocRef, {
      total: 10,
      currentStreak: 5,
      longestStreak: 7,
    });

    // Check if the console.error function has been called with the correct arguments
    expect(consoleErrorSpy).toHaveBeenCalledWith('there was an error', error);

    // Restore the console.error function
    consoleErrorSpy.mockRestore();
  })
});