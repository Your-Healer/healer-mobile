import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/contexts/SessionProvider';
import { router } from 'expo-router';

const SignIn = () => {
    const { signIn } = useSession();
    return (
        <View style={[styles.container]}>
            <Text
                onPress={() => {
                    signIn();
                    router.replace('/');
                }}>
                Sign In
            </Text>
        </View>
    );
}

export default SignIn

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})