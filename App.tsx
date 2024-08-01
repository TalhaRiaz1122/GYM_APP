//import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React from 'react';
import Routes from './src/navigation/Routes';
import {StripeProvider} from '@stripe/stripe-react-native';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    //<StripeProvider publishableKey="pk_test_51PfJxpRo5Ols8TLixC5dUr7cAWRQihQ89dnwyWUXJFJwnWLi4zvjtmxbMCGltRBLXX8SGb6JrCJBVwBz0I1l2jkk00kE4ZfBCD">
    <Routes />
    // </StripeProvider>
    //</GestureHandlerRootView>
  );
}

export default App;
