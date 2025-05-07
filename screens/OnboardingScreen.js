import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  'Avez-vous de l\'expérience dans la création et l\'organisation de dossiers ainsi que de sous-dossiers sur un ordinateur ?',
  'Savez-vous comment compresser et décompresser des fichiers sur votre ordinateur ?',
  'Êtes-vous capable de transférer des photos depuis votre téléphone vers votre ordinateur ?',
  'Êtes-vous en mesure de réaliser les mises à jour sur votre ordinateur et votre téléphone portable ?',
  'Êtes vous familier avec les bonnes pratiques pour éviter les arnaques et se protéger des virus et autres infections sur internet ?',
  'Connaissez-vous la procédure pour effacer l\'historique de votre navigation sur internet ?',
  'Êtes-vous à l\'aise pour gérer votre espace personnel sur des sites institutionnels tels que Impôts, CAF, Mairie, Ameli.fr, Pôle-Emploi, ANTS ?',
  'Avez-vous des connaissances concernant les logiciels et systèmes d\'exploitation open source et autres ?',
  'Maitrisez-vous les fonctionalités sur l\'application Ameli.fr?',
  'Seriez-vous en mesure d\'identifier la taille d\'un fichier (photo, PDF, audio, vidéo) ?',
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
      onFinish(finalScore >= 6); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[index]}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
          <Text style={styles.buttonText}>Oui</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
          <Text style={styles.buttonText}>Non</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.progress}>
      Question {index + 1} / {questions.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  question: { fontSize: 20, marginBottom: 32, textAlign: 'center', color: '#374151' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  button: {
    padding: 16,
    backgroundColor: '#FACC15',
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  buttonText: { color: '#374151', fontSize: 16 },
  progress: { textAlign: 'center', color: '#374151' },
});
