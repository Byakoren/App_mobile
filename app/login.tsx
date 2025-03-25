import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // 🚧 MODE DÉMO TEMPORAIRE (pas d'authentification réelle)
    Alert.alert('Connexion simulée', `Bienvenue, ${email} !`);
    router.push('/planning');
    return;

    /*
    // Code à réactiver quand l'API sera prête :
    try {
      const response = await fetch('https://ton-ngrok-url/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Bienvenue !', `Connecté en tant que ${email}`);
        router.push('/planning');
      } else {
        Alert.alert('Erreur', data.message || 'Échec de la connexion');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de contacter le serveur');
    }
    */
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Connexion</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mot de passe :</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2a59',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formBox: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#fff',
    padding: 27,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#F26619',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  signupText: {
    marginTop: 15,
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    color: '#F26619',
    textDecorationLine: 'underline',
  },
});
