//ximport 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React from 'react';
import {Text, View} from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import OnboardingFirstScreen from '../screens/OnboardingFirstScreen';
import SecondOnboardingScreen from '../screens/SecondOnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationCode from '../screens/VerificationCode';
import Subscription1 from '../screens/Subscription1';
import UserRegistration from '../screens/UserRegistration';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Goals from '../screens/Goals';
import HomeScreen from '../screens/HomeScreen';
import Workouts from '../screens/Workouts';
import WorkoutPreview from '../screens/WorkoutPreview';
import Meals from '../screens/Meals';
import MealPreview from '../screens/MealPreview';
import CalenderScreen from '../screens/CalenderScreen';
import MyFeedScreen from '../screens/MyFeedScreen';
import TrainerProfileScreen from '../screens/TrainerProfileScreen';

enableScreens(true);
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="OnboardingFirstScreen"
            component={OnboardingFirstScreen}
          />
          <Stack.Screen
            name="SecondOnboardingScreen"
            component={SecondOnboardingScreen}
          />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="VerificationCode" component={VerificationCode} />
          <Stack.Screen name="Subscription1" component={Subscription1} />
          <Stack.Screen name="UserRegistration" component={UserRegistration} />
          <Stack.Screen name="Goals" component={Goals} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Workouts" component={Workouts} />
          <Stack.Screen name="WorkoutPreview" component={WorkoutPreview} />
          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen name="MealPreview" component={MealPreview} />
          <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
          <Stack.Screen name="MyFeedScreen" component={MyFeedScreen} />
          <Stack.Screen
            name="TrainerProfileScreen"
            component={TrainerProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Routes;
