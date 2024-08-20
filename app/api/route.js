import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email' });
      }

      try{

        //save email to firestrore
        const docRef = await addDoc(collection(db, 'waitlist'), {
            email,
            timestamp: serverTimestamp(),
        });

        return res.status(200).json({ message: 'You have been added to the waitlist!'});
      } catch (error) {
        return res.status(500).json({ message: 'Failed to add email to waitlist'});
      }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end('Method ${req.method} Not Allowed');
    }
}
