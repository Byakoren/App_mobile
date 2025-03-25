import React, { useRef } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EmargementScreen() {
  const { cours } = useLocalSearchParams<{ cours: string }>();
  const router = useRouter();
  const signatureRef = useRef<any>();

  const handleOK = (signature: string) => {
    console.log("Signature base64 :", signature);
    Alert.alert('Succès', 'Signature capturée !');

  };

  const handleEmpty = () => {
    Alert.alert('Erreur', 'Veuillez signer avant de valider !');
  };

  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Émargement</Text>
      <Text style={styles.subtitle}>Cours : {cours}</Text>
      <Text style={styles.info}>Signez dans la zone ci-dessous :</Text>

      <View style={styles.signatureBox}>
        <SignatureScreen
          ref={signatureRef}
          onOK={handleOK}
          onEmpty={handleEmpty}
          descriptionText=""
          webStyle={signatureStyle}
          backgroundColor="white"
          autoClear={false}
        />
      </View>

      <View style={styles.buttonRow}>
        <Button title="Effacer" color="#F22727" onPress={handleClear} />
        <Button title="Valider" color="#F26619" onPress={() => signatureRef.current?.readSignature()} />
      </View>
    </View>
  );
}

const signatureStyle = `
  .m-signature-pad--footer { display: none; margin: 0; }
  .m-signature-pad { box-shadow: none; border: 2px solid #F26619; border-radius: 8px; }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2a59',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#F26619',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  signatureBox: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});
