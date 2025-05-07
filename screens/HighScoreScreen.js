import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HighScoreScreen({ onContinue }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bravo! Nous vous suggérons de privilégier l'achat d'un ordinateur reconditionné ou d'un smartphone reconditionné à prix solidaire pour réduire les déchets D3E, et sensibiliser pour le Réemploi, limitant ainsi les impacts sur  l'environnement.</Text>
      <Button title="Continuer" onPress={onContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  text: { fontSize: 18, marginBottom: 24, textAlign: 'center' },
});
