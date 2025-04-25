import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isFirstLaunch } from './utils/storage';
import OnboardingScreen from './screens/OnboardingScreen';
import HighScoreScreen from './screens/HighScoreScreen';
import LowScoreScreen from './screens/LowScoreScreen';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  const [step, setStep] = useState('loading');

  useEffect(() => {
    isFirstLaunch().then((first) => {
      setStep(first ? 'onboarding' : 'main');
    });
  }, []);

  if (step === 'loading') return null;

  return (
    <NavigationContainer>
      {step === 'onboarding' && (
        <OnboardingScreen onFinish={(result) => setStep(result ? 'high' : 'low')} />
      )}
      {step === 'low' && <LowScoreScreen onContinue={() => setStep('main')} />}
      {step === 'high' && <HighScoreScreen onContinue={() => setStep('main')} />}
      {step === 'main' && <DrawerNavigator />}
    </NavigationContainer>
  );
}