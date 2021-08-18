import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { loginStackParamList } from '../../types/Types';
import { styles } from './ContactStyles';
import { detailContact } from '../../redux/actions';
import colors from '../../constants/colors';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.Contacts);
  function clear() {
    navigation.push('HomeTab');
    dispatch(detailContact('', ''));
  }

  function detailsfn(email: string, name: string) {
    navigation.push('ContactDetails');
    dispatch(detailContact(email, name));
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
          <AntDesign
            name="arrowleft"
            size={35}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewbtn}>
        <TouchableOpacity
          onPress={() => navigation.push('ContactAdd')}
          style={styles.button}
        >
          <Ionicons
            name="ios-person-add-outline"
            size={24}
            color={colors.primary}
            style={styles.iconAdd}
          />
          <Text style={styles.textBtn}>Agregar</Text>
        </TouchableOpacity>
      </View>

      {contact.map((contacto, i: number) => {
        return contacto.name ? (
          <View style={styles.Card}>
            <TouchableOpacity
              onPress={() => detailsfn(contacto.email, contacto.name)}
              style={styles.BTNBox}
            >
              <View key={i} style={styles.Box}>
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
