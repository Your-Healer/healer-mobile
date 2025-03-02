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
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
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