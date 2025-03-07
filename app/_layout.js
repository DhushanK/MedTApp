// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
// import * as LocalAuthentication from 'expo-local-authentication';
// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   // Function to authenticate user
//   const authenticateUser = async () => {
//     setIsLoading(true);
//     try {
//       const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
//       const isEnrolled = await LocalAuthentication.isEnrolledAsync();

//       if (hasBiometrics && isEnrolled) {
//         const result = await LocalAuthentication.authenticateAsync({
//           promptMessage: 'Authenticate to Access MedTMobile',
//           fallbackLabel: 'Use Passcode',
//         });

//         if (result.success) {
//           setIsAuthenticated(true);
//         }
//       } else {
//         alert('Biometric authentication is not available on this device.');
//       }
//     } catch (error) {
//       console.error('Authentication Error:', error);
//     }
//     setIsLoading(false);
//   };

//   // Run authentication when the app starts
//   useEffect(() => {
//     authenticateUser();
//   }, []);

//   // Show a loading indicator while authentication is in progress
//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#ffffff" />
//         <Text style={styles.loadingText}>Authenticating...</Text>
//       </View>
//     );
//   }

//   // If authentication fails, show a lock screen with a retry button
//   if (!isAuthenticated) {
//     return (
//       <View style={styles.authContainer}>
//         <Text style={styles.authText}>🔒 Authentication Required</Text>
//         <Text style={styles.authSubText}>Please enable Face ID or Touch ID</Text>
//         <Button title="Retry Authentication" onPress={authenticateUser} />
//       </View>
//     );
//   }

//   // If authenticated, load the app navigation (Bluetooth Receiver)
//   return (
//     <Stack>
//       <Stack.Screen name="bluetooth-receiver" options={{ title: "Bluetooth Receiver" }} />
//     </Stack>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#192f6a',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: 'white',
//     fontSize: 16,
//   },
//   authContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   authText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#3b5998',
//     marginBottom: 10,
//   },
//   authSubText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
// });
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="bluetooth-receiver" options={{ title: "Bluetooth Receiver" }} />
    </Stack>
  );
}