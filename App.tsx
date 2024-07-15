/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from './src/AuthContext';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBl53mjkYiBA_JmamDErrEgHZiKlYr6RJg",
  authDomain: "login-assignment-20618.firebaseapp.com",
  databaseURL: "https://login-assignment-20618-default-rtdb.asia-southeast1.firebasedatabase.app/", // If you're using Realtime Database, put the URL here
  projectId: "login-assignment-20618",
  storageBucket: "login-assignment-20618.appspot.com",
  messagingSenderId: "747028095457",
  appId: "1:747028095457:android:d39159de4c8265a6e4b2a0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}






type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },700)
  })
  
  return (
   
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
