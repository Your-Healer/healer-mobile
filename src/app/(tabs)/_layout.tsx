import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
                }}
            />
            <Tabs.Screen
                name='appointment'
                options={{
                    title: 'Appointment',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="calendar-today" color={color} />
                }}
            />
            <Tabs.Screen
                name='healer-assistant'
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="face-agent" color={color} />
                }}
            />
            <Tabs.Screen
                name='history'
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="scroll" size={28} color={color} />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />
                }}
            />
        </Tabs>
    );
}
