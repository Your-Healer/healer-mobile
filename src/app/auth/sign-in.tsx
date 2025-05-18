import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSession } from '@/contexts/SessionProvider';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignIn = () => {
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signIn();
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.appName}>Your Healer</Text>

            <Text style={styles.welcomeText}>Hi, Welcome back!</Text>
            <Text style={styles.subtitleText}>Hope, you're doing fine.</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.separatorText}>or</Text>
                <View style={styles.separator} />
            </View>

            <TouchableOpacity onPress={() => router.push('/auth/forgot-password')}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text style={styles.noAccountText}>Don't have an account yet? </Text>
                <TouchableOpacity onPress={() => router.push('/auth/sign-up')}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    appName: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 24,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    subtitleText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        height: '100%',
    },
    signInButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1A2C41',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    signInButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#E8E8E8',
    },
    separatorText: {
        marginHorizontal: 10,
        color: '#666',
    },
    forgotPasswordText: {
        color: '#3B82F6',
        fontWeight: '500',
        fontSize: 16,
    },
    signUpContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
    },
    noAccountText: {
        fontSize: 14,
        color: '#666',
    },
    signUpText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3B82F6',
    },
})