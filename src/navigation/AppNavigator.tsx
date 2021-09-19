import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import SigninScreen from "~/screens/SigninScreen";
import SignupScreen from "~/screens/SignupScreen";
import HomeScreen from "~/screens/HomeScreen";
import CartScreen from "~/screens/CartScreen";

const Stack = createNativeStackNavigator();
const Botton = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  const [isLogged] = useState(true);

  function renderAuthRoutes() {
    return (
        <Botton.Navigator 
            initialRouteName="Home"
            activeColor="rgb(56, 58, 58)"
            inactiveColor="rgb(191, 192, 193)"
            barStyle={{
                backgroundColor: '#ffff',
                shadowColor: '#ffff',
                elevation: 0,
            }}
        >
            <Botton.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                    <Ionicons name="home" color={color} size={20} />
                    ),
                }}
            />

            <Botton.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="cart" color={color} size={20} />
                    ),
                }}
            />

            <Botton.Screen
                name="Profile"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={20} />
                    ),
                }}
            />
        </Botton.Navigator>
    );
  }

  function renderNoAuthRoutes() {
    return (
      <Stack.Navigator initialRouteName="Sigin">
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerTransparent: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerTransparent: true, headerTitle: "" }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {isLogged ? renderAuthRoutes() : renderNoAuthRoutes()}
    </NavigationContainer>
  );
}
