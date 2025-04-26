import React, { useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet, Linking, AppState } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ContactsScreen = () => {
  const [mapKey, setMapKey] = useState(0);

  const coordinate = {
    latitude: 49.5174,
    longitude: 0.0894,
  };

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        setMapKey((prev) => prev + 1);
      }
    });
    return () => sub.remove();
  }, []);

  const openInMaps = () => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?q=${encodeURIComponent('48-50 Rue Albert Samain, 76620, Le Havre, France')}`,
      android: `geo:0,0?q=48-50+Rue+Albert+Samain,+76620+Le+Havre,+France`,
    });

    Linking.openURL(url);
  };

  const openWebsite = () => {
    Linking.openURL('https://www.asso-websolidarite.org');
  };

  const callPhone = async () => {
    const supported = await Linking.canOpenURL('tel:0954149048');
    if (supported) {
      console.log('Call Phone');
      Linking.openURL('tel:0954149048');
    } else {
        console.log('tel-схема недоступна на этом устройстве');
      }
  };

  const sendEmail = async () => {
    const supported = await Linking.canOpenURL('mailto:contact@asso-websolidarite.org');
    if (supported) {
      Linking.openURL('mailto:contact@asso-websolidarite.org');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        key={mapKey}
        style={{ flex: 2 }}
        initialRegion={{
          ...coordinate,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={coordinate}
          title="Наш адрес"
          description="48-50 Rue Albert Samain, 76620, Le Havre, France"
          onPress={openInMaps}
        />
      </MapView>

      <View style={styles.addressContainer}>
        <Text style={styles.title}>Наш адрес:</Text>
        <Text style={styles.address}>
          48-50 Rue Albert Samain, 76620, Le Havre
        </Text>
        <Text style={styles.contactTitle}>Контактная информация:</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Сайт: </Text>
          <Text style={styles.contactLink} onPress={() => openWebsite()}>
            www.asso-websolidarite.org
          </Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Телефон: </Text>
          <Text style={styles.contactLink} onPress={() => callPhone()}>
            09 54 14 90 48
          </Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email: </Text>
          <Text style={styles.contactLink} onPress={() => sendEmail()}>
            contact@asso-websolidarite.org
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#374151',
  },
  address: {
    fontSize: 18,
    marginBottom: 12,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  addressContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 24 },
  contactTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#374151',
    textAlign: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 18,
    color: '#374151',
    fontWeight: '400',
  },
  contactLink: {
    fontSize: 18,
    color: '#2563EB',
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});

export default ContactsScreen;
