import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, Platform, StyleSheet, Linking, AppState } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HighScoreScreen from '../screens/HighScoreScreen';
import LowScoreScreen from '../screens/LowScoreScreen';
import { Ionicons } from '@expo/vector-icons';
import ContactsScreen from '../screens/ContactsScreen';

const BoutiqueScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>Бутик</Text>
  </View>
);

const EducationScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>Обучение</Text>
  </View>
);

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
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#374151',
        drawerInactiveTintColor: '#374151',
        drawerActiveBackgroundColor: '#FACC15',
        drawerInactiveBackgroundColor: 'transparent',
        drawerItemStyle: {
          borderRadius: 8, // уменьшение скругления активного пункта
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen
        name="Главная"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Бутик"
        component={BoutiqueScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Обучение"
        component={EducationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Сброс данных"
        component={ResetWrapper}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="refresh-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Контакты"
        component={ContactsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}