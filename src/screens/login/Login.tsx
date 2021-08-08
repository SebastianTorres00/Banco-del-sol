import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import { loginStackParamList } from '../../types/Types';
import { styles } from './LoginStyles';
// import { resFromBack } from '../../types/Types';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Login = ({ navigation }: Props) => {
  // const userStore = useSelector((state: resFromBack) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Email..."
          placeholderTextColor="black"
          value={user.email}
          onChangeText={(text: string) => setUser({ ...user, email: text })}
          keyboardType="email-address"
          style={styles.inputEmail}
        />

        <TextInput
          placeholder="Password..."
          placeholderTextColor="black"
          value={user.password}
          onChangeText={(text: string) => setUser({ ...user, password: text })}
          secureTextEntry
          style={styles.inputEmail}
        />

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.push('ForgotPassword')}
        >
          <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        {user.password.length > 6 && user.email.length > 4 ? (
          <Button
            onPress={() => {
              dispatch(login(user.email, user.password));
            }}
            title="Login"
            color="#ff4b6e"
          />
        ) : (
          <Button
            onPress={() => console.log('esto no puede pasar')}
            title="Login"
            disabled
          />
        )}
      </View>
    </View>
  );
};
