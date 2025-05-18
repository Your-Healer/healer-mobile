import { useSession } from '@/contexts/SessionProvider'
import { Redirect, Stack } from 'expo-router';
import React from 'react'
import { Text } from 'react-native';

export const unstable_settings = {
    initialRouteName: '(root)',
};

export default function AppLayout() {
    const { session, isLoading } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (!session) {
        return <Redirect href={"/auth/sign-in"} />
    }

    return (
        <Stack />
    )
}
