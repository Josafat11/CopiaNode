  // App.js

  import React, { useState } from 'react';
  import { View, Text, TextInput, TouchableOpacity,Image, StyleSheet } from 'react-native';

  const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      // Agrega la lógica de autenticación con tu servidor Node.js aquí
      console.log('Email:', email);
      console.log('Contraseña:', password);
    };

    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}  
          style={styles.logo}
        />
        <Text style={styles.title}>Crunchyroll</Text>
      </View>
        <View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="email"
    placeholderTextColor="white"
    onChangeText={(text) => setEmail(text)}
    value={email}
  />
</View>

<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="contraseña"
    placeholderTextColor="white"
    secureTextEntry
    onChangeText={(text) => setPassword(text)}
    value={password}
  />
</View>
  <Text style={styles.description}>
  Al usar tu cuenta accedes a nuestros{' '}
  <Text style={styles.orangeText}>términos</Text>{' '}
  y{' '}
  <Text style={styles.orangeText}>política de privacidad</Text>{' '}
  y confirmas que tienes 16 años o más.
</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ACCEDER</Text>
        </TouchableOpacity>
        <Text style={styles.links}>
    <Text style={styles.orangeText}>¿Olvidaste tu contraseña?</Text> | <Text style={styles.orangeText}>Crear cuenta</Text>
  </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    logo: {
      width: 30,  // Ajusta el ancho de acuerdo a tus necesidades
      height: 30,  // Ajusta la altura de acuerdo a tus necesidades
      marginLeft: -40,
      marginBottom: -30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#F47521',
      marginBottom: 20,
    },
    label: {
      color: 'white',
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginBottom: 5,
    },
    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      color: 'white',
      paddingHorizontal: 10,
    },
    description: {
      color: 'white',
      textAlign: 'center',
      margin: 10,
    },
    button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    },
    buttonText: {
      flexDirection: 'row',
      color: 'white',
    },
    links: {
      color: 'white',
      marginTop: 10,
    },
    orangeText: {
      color: '#F47521',
    },
    inputContainer: {
      backgroundColor: '#212121',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#F47521',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 10,
    },
    input: {
      flex: 1,
      color: 'white',
    },
    inputText: {
      flex: 1,
      color: 'white',
    },
    orangeText: {
      color: '#F47521',
    },
  });

  export default App;
