import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaProvider>
              <HomeScreen />
          </SafeAreaProvider>
      </Provider>
  );
}
