import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  
import { Image } from 'react-native'; 
export default function Page() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Text style={styles.title}>Welcome to MedTMobile</Text>
      <Text style={styles.subtitle}>Navigate through the app</Text>
      <Image source={require('../assets/images/medt.png')} style={{ width: 300, height: 100 }} />      <View style={styles.buttonContainer}>
        <CustomButton text="Go to Settings" onPress={() => router.push('/settings')} />
        <CustomButton text="Go to Map" onPress={() => router.push('/mapscreen')} />
        <CustomButton text="Go to Detection" onPress={() => router.push('/objectplacement')} />
      </View>
    </LinearGradient>
  );
}

const CustomButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 5 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#ddd',
    marginBottom: 20 
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#ff7f50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});