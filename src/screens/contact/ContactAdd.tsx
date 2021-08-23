import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import {
  detailContact,
  getEmail,
  getName,
  RemoveError,
} from '../../redux/actions';
import { styles } from './ContactAddStyles';
import { loginStackParamList, RootState } from '../../types/Types';
import colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactAdd = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [step, setStep] = useState<boolean>(false);
  const [msg, setMsg] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [msgContact, setMsgContact] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<boolean>(false);
  const contacts = useSelector<RootState>(state => state.Contacts);
  const idToken = useSelector<RootState>(state => state.token);
  const userEmail = useSelector<RootState>(state => state.account.email);
  let nameUser = useSelector<RootState>(state => state.nameDetail);
  const errorEmail = useSelector<RootState>(state => state.message);

  function askName() {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].email === email) setMsgContact(true);
    }
  }

  if (msgContact) {
    setTimeout(() => {
      setMsgContact(false);
      setShowInput(false);
      setMsg(false);
      setName('');
    }, 3000);
  }
  useEffect(() => {
    if (step) {
      setName(nameUser);
      setTimeout(() => {
        if (nameUser) {
          setShowInput(true);
          setMsg(true);
        }

        setTimeout(() => {
          setMsg(false);
        }, 2000);
      }, 500);
    } else {
      setName('');
    }
  }, [nameUser]);

  useEffect(() => {
    // En el caso  de el email no se encuentre en la DB el estado MsgError se coloca true , de esta forma muestra el msg y el input pasa a false para no ser visible i/o utilizable
    if (errorEmail.length > 5) {
      setMsgError(true);
      setShowInput(false);

      setTimeout(() => {
        //  Despues de dos segundos el mensaje se quita pasando el estado a false
        setMsgError(false);
        dispatch(RemoveError());
      }, 2000);
    }
  }, [errorEmail]);

  useEffect(() => {
    setStep(true);
    // dispatch(getName('', ''));
    nameUser = '';
  }, []);
  function callName() {
    askName();
    setShowInput(false);
    if (nameUser) {
      setName(nameUser);
      setTimeout(() => {
        if (nameUser) {
          setShowInput(true);
          setMsg(true);
        }

        setTimeout(() => {
          setMsg(false);
        }, 2000);
      }, 500);
    }
    if (!msgContact) {
      dispatch(getName(email, idToken));
    }

    if (!msg) {
      setName(nameUser);
    }
  }

  // AddFriend se encarga de guardar en "REDUX" los contactos que fueron agregados.

  function AddFriend(
    emailFriend: string,
    idTokenUser: string,
    nameFriend: string,
  ) {
    dispatch(getEmail(emailFriend, idTokenUser, nameFriend));
    setEmail('');
    setName('');
    setShowInput(false);
  }

  // BackAndClear se encarga de volver a "Contact" y limpiar todos los estados

  function BackAndClear() {
    setEmail('');
    setName('');
    dispatch(detailContact('', ''));
    setStep(false);
    setMsgError(false);
    dispatch(RemoveError());
    navigation.push('Contact');
  }

  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerOne}>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
            end={[1, 1]}
          />

          <View style={styles.title}>
            <Text style={styles.textTitle}>Agregar Contactos</Text>
          </View>

          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              BackAndClear();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {/* FIN HEADER */}
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email de tu contacto"
          style={styles.input}
        />
        {/* BOTON BUSCAR */}
        {email && email !== userEmail ? (
          <TouchableOpacity onPress={() => callName()} style={styles.button}>
            <Text style={styles.search}>BUSCAR</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttondisabled} disabled>
            <Text style={styles.searchDisable}>BUSCAR</Text>
          </TouchableOpacity>
        )}

        {/* INPUT NAME */}

        {showInput === true && msgContact === false ? (
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Nombre de tu contacto"
            style={styles.inputTwo}
          />
        ) : null}

        {msg && msgContact === false ? (
          <View style={styles.msgText}>
            <Text style={styles.TextAdd}>¡Se ha encontrado un usuario!</Text>
          </View>
        ) : null}

        {msgContact ? (
          <View style={styles.msgTextUser}>
            <Text style={styles.TextAdd}>
              ¡Este usuario se encuentra en tus contactos!
            </Text>
          </View>
        ) : null}

        {msgError ? (
          <View style={styles.msgTextUser}>
            <Text style={styles.TextAdd}>
              ¡Este usuario no se encuentra registrado!
            </Text>
          </View>
        ) : null}

        {name && msgContact === false ? (
          <TouchableOpacity
            onPress={() => AddFriend(email, idToken, name)}
            style={styles.buttonAdd}
          >
            <Text style={styles.TextAdd}>AGREGAR CONTACTO</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonAddDisable} disabled>
            <Text style={styles.TextAdd}>AGREGAR CONTACTO</Text>
          </TouchableOpacity>
        )}
        <LinearGradient
          style={styles.ellipse}
          colors={[colors.primary, colors.secondary]}
        />
      </View>
    </ScrollView>
  );
};
