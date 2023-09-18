import { db } from './config'
import { getFirestore, collection, updateDoc, doc } from 'firebase/firestore'


const putRequest = async (total, current, longest) => {
  const mealDocRef = doc(db, 'Meals', '8rhTTawNno5YJWVbHkfI');

  try {
    await updateDoc(mealDocRef, {
      total: total,
      currentStreak: current,
      longestStreak: longest
    });
    console.log('Successfully updated')
  } catch(error) {
    console.error('there was an error', error)
  }
}

export default putRequest