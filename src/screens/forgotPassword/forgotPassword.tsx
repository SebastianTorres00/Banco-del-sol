import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { styles } from './ForgotPasswordStyles';
import colors from '../../constants/colors';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handlePress(e: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(e);
      alert('Revisa tu email para resetear tu contraseña');
    } catch (error) {
      alert('Debes ingresar un email válido');
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.prueba}></View> */}
      {/* <View style={styles.prueba1}></View> */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>
          Ingresa el mail con el que te registraste y te enviaremos un correo
          con un link para recuperar tu contraseña.
        </Text>
        <TextInput
          placeholder="Ingresa tu email..."
          placeholderTextColor="grey"
          value={email}
          style={ButtonPrimaryStyle.input}
          onChangeText={(text: string) => setEmail(text)}
        />
      </View>
      <View style={styles.containerButton}>
        {email.length > 4 ? (
          <TouchableOpacity
            onPress={() => handlePress(email)}
            style={styles.button}
          >
            <Text style={ButtonSecondaryStyle.text}>Enviar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handlePress(email)}
            style={styles.buttondisabled}
          >
            <Text style={ButtonSecondaryStyle.text}>Enviar</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
}
