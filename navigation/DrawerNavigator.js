import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HighScoreScreen from '../screens/HighScoreScreen';
import LowScoreScreen from '../screens/LowScoreScreen';

const Drawer = createDrawerNavigator();

const ResetWrapper = ({ navigation }) => {
  const [step, setStep] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setStep('start');
    }, [])
  );

  console.log('Текущее состояние step:', step);

  if (step === 'start') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 18, marginBottom: 24, textAlign: 'center' }}>
          Сбросить прогресс и начать заново?
        </Text>
        <Button
          title="Сбросить и начать"
          onPress={async () => {
            await AsyncStorage.removeItem('alreadyLaunched');
            setStep('onboarding');
          }}
        />
      </View>
    );
  }

  if (step === 'onboarding') {
    return <OnboardingScreen onFinish={(ok) => setStep(ok ? 'high' : 'low')} />;
  }

  if (step === 'high') {
    return <HighScoreScreen onContinue={() => navigation.navigate('Главная')} />;
  }

  if (step === 'low') {
    return <LowScoreScreen onContinue={() => navigation.navigate('Главная')} />;
  }

  return null;
};

export default function DrawerNavigator() {
  //const [step, setStep] = useState('start');

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Главная" component={HomeScreen} />
      <Drawer.Screen name="Сброс данных" component={ResetWrapper} />
    </Drawer.Navigator>
  );
}