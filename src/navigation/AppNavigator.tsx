import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "~/screens/SplashScreen";
import SigninScreen from "~/screens/SigninScreen";
import SignupScreen from "~/screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen/index";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLogged] = useState(true);

  function renderAuthRoutes() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
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
