import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AppState } from 'react-native';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';

export default function SettingsScreen() {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    let timeout;

    const authenticateUser = async () => {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate to access settings',
        });

        if (result.success) {
            setAuthenticated(true);
        } else {
            alert('Authentication failed!');
            router.push('/');  // Redirect to Home if authentication fails
        }
    };

    const logoutUser = async () => {
        await SecureStore.deleteItemAsync('userToken');  // Remove token from secure storage
        alert('Logged out successfully!');
        router.push('/');  // Redirect to Home screen
    };

    const resetTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(logoutUser, 15 * 60 * 1000); // 15 minutes
    };

    useEffect(() => {
        authenticateUser();  // Ask for authentication when entering settings

        resetTimeout();
        const eventListener = AppState.addEventListener("change", resetTimeout);

        return () => eventListener.remove();
    }, []);

    return (
        <View style={styles.container}>
            {authenticated ? (
                <>
                    <Text style={styles.title}>Settings</Text>
                    <Text style={styles.subtitle}>You are authenticated!</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={logoutUser}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.subtitle}>Authenticating...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#192f6a' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    subtitle: { fontSize: 16, color: '#ddd', marginBottom: 20 },
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
    buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});