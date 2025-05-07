import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, Platform, StyleSheet, Linking, AppState, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HighScoreScreen from '../screens/HighScoreScreen';
import LowScoreScreen from '../screens/LowScoreScreen';
import { Ionicons } from '@expo/vector-icons';
import ContactsScreen from '../screens/ContactsScreen';

const openLinkProducts = () => {
  Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html');
};

const openLinkEducations = () => {
  Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html');
};

const BoutiqueScreen = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require('../assets/image/produits-bg.jpg')}
      style={{ width: '100%', height: '45%' }}
      resizeMode="cover"
    />
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Products</Text>
      <Text style={{ fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'left' }}>
        Récuperation, reconditionnement & vente d'ordinateurs à prix solidaires
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 32 }} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/computer.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 32 }} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/desktop.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Desktop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/gaming.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Gaming</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);

const EducationScreen = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require('../assets/image/formation-bg.jpg')}
      style={{ width: '100%', height: '45%' }}
      resizeMode="cover"
    />
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Nos Ateliers Numériques</Text>
      <Text style={{ fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'left' }}>
        Récuperation, reconditionnement & vente d'ordinateurs à prix solidaires
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 32 }} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/blogger.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 32 }} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/erp.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Desktop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/internet-security.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 8, fontSize: 20 }}>Gaming</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
          Réinitialiser les progrès et recommencer ?
        </Text>
        <Button
          title="Réinitialiser"
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
    return <HighScoreScreen onContinue={() => navigation.navigate('Accueil')} />;
  }

  if (step === 'low') {
    return <LowScoreScreen onContinue={() => navigation.navigate('Accueil')} />;
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
          borderRadius: 8, 
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Boutique Solidaire"
        component={BoutiqueScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Formations"
        component={EducationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Questionnaire"
        component={ResetWrapper}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="refresh-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
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