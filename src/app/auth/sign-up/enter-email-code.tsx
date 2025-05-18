import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react'
import { Appbar } from 'react-native-paper';
import OTP from '@/components/Inputs/OTP/OTP';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colorPallette } from '@/constants/colors';

const EnterEmailCode = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
        console.log('Continue with phone:', phoneNumber);
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction color={colorPallette.primaryBtn} onPress={handleBack} />
                <Appbar.Content title="" />
            </Appbar.Header>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.contentContainer}
            >
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="shield-checkmark-outline"
                        size={30}
                        color="#CCCCCC"
                    />
                </View>

                <Text style={styles.title}>Enter code</Text>
                <Text style={styles.subtitle}>
                    It's helpful to provide a good reason for why{'\n'}
                    the phone number is required.
                </Text>

                <View style={styles.otpContainer}>
                    <OTP />
                </View>

                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleContinue}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}

export default EnterEmailCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'transparent',
        elevation: 0,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#8E8E93',
        lineHeight: 22,
        marginBottom: 24,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 12,
        justifyContent: 'center',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
    },
    continueButton: {
        backgroundColor: colorPallette.primary,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    otpContainer: {
        marginVertical: 24,
    }
})