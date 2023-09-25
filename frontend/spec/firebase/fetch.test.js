import putRequest from "../../firebase/fetch";
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from "../../firebase/config";

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  updateDoc: jest.fn()
}));

describe('putRequest', () => {
  it('should update the document in Firestore', async () => {
    const mockedDocRef = doc(db, 'Meals', '8rhTTawNno5YJWVbHkfI')
    doc.mockReturnValue(mockedDocRef);

    const total = 10;
    const current = 5;
    const longest = 7;

    await putRequest(total, current, longest);

    expect(updateDoc).toHaveBeenCalledWith(mockedDocRef, {
      total: total,
      currentStreak: current,
      longestStreak: longest,
    });
  });

  it('should handle errors', async () => {
    const mockedDocRef = doc(db, 'Meals', '8rhTTawNno5YJWVbHkfI')
    doc.mockReturnValue(mockedDocRef);

    const error = new Error('there was an error');
    updateDoc.mockRejectedValue(error);

    const consoleErrorSpy = jest.spyOn(console, 'error');

    await putRequest(10, 5, 7);

    expect(updateDoc).toHaveBeenCalledWith(mockedDocRef, {
      total: 10,
      currentStreak: 5,
      longestStreak: 7,
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith('there was an error', error);

    consoleErrorSpy.mockRestore();
  })
});