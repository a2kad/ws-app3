import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LowScoreScreen({ onContinue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Спасибо за ответы! Мы рекомендуем сначала изучить больше информации.
      </Text>
      <Button title="Перейти к приложению" onPress={onContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  text: { fontSize: 18, marginBottom: 24, textAlign: 'center' },
});