//import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React from 'react';
import Routes from './src/navigation/Routes';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <Routes />
    //</GestureHandlerRootView>
  );
}

export default App;
