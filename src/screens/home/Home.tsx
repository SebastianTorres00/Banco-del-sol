/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './HomeStyle';
import { Start } from '../start/Start';
import { Register } from '../register/Register';
import { Login } from '../login/Login';
import { AddFunds } from '../addFunds/AddFunds';

const Tab = createBottomTabNavigator();

const theme = {
  Button: {
    containerStyle: [
      {
        marginRight: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FF6C5D',
        textAlign: 'center',
      },
    ],
    titleStyle: {
      color: '#FF6C5D',
    },
  },
};

function recargarDinero() {
  console.log('recargaste dinero');
}

function enviarDinero() {
  console.log('enviaste dinero');
}

function HomeScreen() {
  const [balance, setBalance] = useState<number>(0);

  const [ing, setIng] = useState<number>(0);

  const [gast, setGast] = useState<number>(0);

  useEffect(() => {
    setBalance(500);
    setIng(12);
    setGast(12);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.view1}>
        <Text style={{ fontSize: 40 }}>Balance</Text>
        <Text style={{ fontSize: 30 }}>${balance}</Text>

        <View style={styles.view}>
          <Text style={styles.textGeneral}>General</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.text}>Ingresos</Text>
            <Text style={styles.text}>Gastos</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>${ing}</Text>
            <Text style={styles.text}>${gast}</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View>
          <TouchableOpacity
            onPress={recargarDinero}
            style={styles.bottonRecargar}
          >
            <Text style={styles.bottonTextR}>Recargar Dinero</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={enviarDinero} style={styles.bottonEnviar}>
            <Text style={styles.bottonTextE}>Enviar Dinero</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// const [name, setName] = useState<string>('');
// setName('Seba');
export const Home = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: `Hola {name}`,
        headerShown: true,
        headerRight: () => (
          <ThemeProvider theme={theme}>
            <Button
              onPress={() => alert('This is a button!')}
              title="mi cuenta"
              type="clear"
            />
          </ThemeProvider>
        ),
      }}
    />
    <Tab.Screen name="Start" component={Start} />
    <Tab.Screen name="Register" component={Register} />
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Estadisticas" component={AddFunds} />
  </Tab.Navigator>
);
