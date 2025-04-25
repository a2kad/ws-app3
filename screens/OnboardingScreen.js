import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  'Вы пользуетесь мобильными приложениями ежедневно?',
  'Вы работаете в сфере услуг?',
  'Вы заинтересованы в цифровых решениях?',
  'У вас есть опыт с мобильными технологиями?',
  'Вы готовы использовать новое приложение?',
  'Вы хотите упростить свою работу?',
  'Вам важно экономить время?',
  'Вы работаете с клиентами напрямую?',
  'Вы заинтересованы в автоматизации?',
  'Вы пользуетесь мессенджерами для работы?',
  'Вы готовы попробовать новое решение?',
  'Вы хотите улучшить свои рабочие процессы?',
];

export default function OnboardingScreen({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (yes) => {
    const finalScore = score + (yes ? 1 : 0);
    const next = index + 1;
    console.log('Следующий индекс (next):', next);
  
    if (next < questions.length) {
      setScore(finalScore);
      setIndex(next);
    } else {
      console.log('Итоговый балл:', finalScore);
      onFinish(finalScore >= 6); // переход после последнего вопроса
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[index]}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
          <Text style={styles.buttonText}>Да</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
          <Text style={styles.buttonText}>Нет</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.progress}>
        Вопрос {index + 1} из {questions.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  question: { fontSize: 20, marginBottom: 32, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  button: {
    padding: 16,
    backgroundColor: '#FACC15',
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  buttonText: { color: '#374151', fontSize: 16 },
  progress: { textAlign: 'center', color: '#888' },
});
