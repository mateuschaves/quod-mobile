import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SigninScreen from '~/screens/SigninScreen';
import SignupScreen from '~/screens/SignupScreen';

export default function AuthNavigator() {
    return (
        <Stack.Group>
            <Stack.Screen name="Signin" component={SigninScreen} options={{ headerTransparent: true, headerTitle: '' }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTransparent: true, headerTitle: '' }} />
        </Stack.Group>
    )
}