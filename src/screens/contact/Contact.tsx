import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { loginStackParamList, RootState, TypeContact } from '../../types/Types';
import { styles } from './ContactStyles';
import { detailContact, RemoveContact } from '../../redux/actions';
import colors from '../../constants/colors';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  const [contactos, setContactos] = useState<{ name: string; email: string }[]>(
    [{ name: '', email: '' }],
  );

  const [text, setText] = useState<String>('');
  const dispatch = useDispatch();
  const contact = useSelector<RootState>(state => state.Contacts);

  function clear() {
    navigation.push('HomeTab');
    dispatch(detailContact('', ''));
  }
  useEffect(() => {
    setContactos(contact);
  }, [contact]);

  function detailsfn(email: string, name: string) {
    navigation.push('ContactDetails');
    dispatch(detailContact(email, name));
  }
  function filterSearch(searchText: string) {
    setText(searchText);
    const newData = contact.filter(function (item: TypeContact) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setContactos(newData);
    if (text.length === 0) {
      setContactos(contact);
    }
  }

  function alertremove(email: string) {
    const info = window.confirm(
      '¿Estas seguro/a que quieres eliminar este contacto?',
    );
    if (info) {
      dispatch(RemoveContact(email));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerOne}>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Contactos</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            clear();
          }}
        >
          <AntDesign name="arrowleft" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <FontAwesome5
        name="search"
        size={24}
        color={colors.primary}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Nombre de tu contacto"
        onChangeText={search => filterSearch(search)}
        value={text}
      />
      <View style={styles.viewbtn}>
        <TouchableOpacity onPress={() => navigation.push('ContactAdd')}>
          <Ionicons
            name="ios-person-add-sharp"
            size={24}
            color={colors.primary}
            style={styles.iconAdd}
          />
        </TouchableOpacity>
      </View>

      {contactos.map((contacto: TypeContact) => {
        return contacto.name ? (
          <View>
            <TouchableOpacity
              onPress={() => detailsfn(contacto.email, contacto.name)}
              style={styles.BTNBox}
            >
              <TouchableOpacity
                onPress={() => alertremove(contacto.email)}
                style={styles.BTNRemove}
              >
                <View key={contacto.email}>
                  <Ionicons
                    name="ios-trash-outline"
                    size={24}
                    color={colors.primary}
                  />
                </View>
              </TouchableOpacity>
              <View key={contacto.email} style={styles.Box}>
                <Text style={styles.textBoxName}>{contacto.name}</Text>
                <Text style={styles.textBoxEmail}>{contacto.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null;
      })}

      {!contact[0] ? (
        <View style={styles.ViewDescription}>
          <Text style={styles.TextDescription}>
            Aca podras visualizar tus contactos.
          </Text>
        </View>
      ) : null}
    </View>
  );
};
