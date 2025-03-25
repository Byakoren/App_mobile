import { Slot } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1b2a59' }}>
      <StatusBar barStyle="light-content" />
      <Slot />
    </SafeAreaView>
  );
}
