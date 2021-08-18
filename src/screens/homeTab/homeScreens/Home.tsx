/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  LogBox,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './HomeStyles';
import { logout, updateAccount } from '../../../redux/actions';
import { Props, RootState } from '../../../types/Types';
import colors from '../../../constants/colors';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export const Home = ({ navigation }: Props) => {
  const [ing, setIng] = useState(0);
  const [gast, setGast] = useState(0);

  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {burger ? (
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 200,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              width: '60%',
              height: '100%',
            }}
          >
            <View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => setBurger(!burger)}
              >
                <Ionicons
                  style={styles.icon}
                  name="menu"
                  size={28}
                  color={colors.primary}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.push('Contact')}
                style={{ marginTop: '40%', justifyContent: 'center' }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Icon
                    type="material-community"
                    name="contacts"
                    size={27}
                    color={colors.primary}
                    style={{ marginLeft: 20 }}
                  />
                  <Text style={styles.burgerText}>Contactos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(logout());
                  navigation.popToTop();
                }}
                style={{ marginTop: '20%', justifyContent: 'center' }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Icon
                    type="material-community"
                    name="logout"
                    size={27}
                    color="red"
                    style={{ marginLeft: 20 }}
                  />
                  <Text style={styles.burgerTextLogout}>Cerrar sesion</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => setBurger(!burger)}>
            <View
              style={{
                alignItems: 'flex-end',
                backgroundColor: 'black',
                width: '40%',
                height: '100%',
                opacity: 0.7,
              }}
            />
          </TouchableWithoutFeedback>
          ;
        </View>
      ) : null}
      <View>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Hola {userStore.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => setBurger(!burger)}
        >
          <Ionicons style={styles.icon} name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.view1}>
        <Text style={{ fontSize: 20, fontWeight: '100', color: '#3b3b3b' }}>
          Balance
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 40, fontWeight: '900' }}>
            ${accountStore.balance.amount}
          </Text>
          <TouchableOpacity
            onPress={() =>
              updateAccount(accountStore.email.toLowerCase(), token, dispatch)
            }
          >
            <Ionicons
              style={styles.styleIcon}
              name="reload-circle-sharp"
              size={28}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxt}>
          <Text style={styles.textGeneral}>General</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.text}>Ingresos</Text>
            <Text style={styles.text}>Gastos</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.textNum}>${ing}</Text>
            <Text style={styles.textNum}>${gast}</Text>
          </View>
        </View>
      </View>
      {/* style={styles.view3} */}
      <View style={styles.view3}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('AddFunds')}
            style={styles.bottonRecargar}
          >
            <Ionicons style={styles.styleIcon} name="add-circle" size={28} />
            <Text style={styles.bottonTextR}>Recargar Dinero</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('Transfer')}
            style={styles.bottonEnviar}
          >
            <Ionicons style={styles.styleIcon1} name="send" size={28} />
            <Text style={styles.bottonTextE}>Enviar Dinero</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
