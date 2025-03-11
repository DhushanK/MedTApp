import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Receiver() {
  const router = useRouter();

  useEffect(() => {
    if (router && router.isReady) {
      // Example: Received Data from Bluetooth
      const receivedData = {
        objectType: 'car', // Can be 'car', 'truck', 'person', 'dog', 'cat'
        row: 3,  // Grid row
        col: 4,  // Grid column
      };

      router.push({
        pathname: '/objectplacement',
        params: { objectData: receivedData },
      });
    }
  }, [router.isReady]); // Only runs when router is ready

  return null; // No UI needed
}
