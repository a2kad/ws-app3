import AsyncStorage from '@react-native-async-storage/async-storage';

export const isFirstLaunch = async () => {
  try {
    const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
    if (alreadyLaunched === null) {
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      return true;
    }
    return false;
  } catch (e) {
    console.error('Storage error', e);
    return false;
  }
};
