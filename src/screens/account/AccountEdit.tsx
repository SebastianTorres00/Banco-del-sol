import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Picker,
  Dimensions,
  LogBox,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextInput from '../../components/TextInputFormix';
import { styles } from './AccountEditStyles';
import { loginStackParamList, resFromBack, RootState } from '../../types/Types';
import colors from '../../constants/colors';
import { updateUser } from '../../redux/actions';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //  Ignore all log notifications

const yup = require('yup');

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const size1 = 50;
export const size2 = (deviceHeight - 70 - 150 - 180) / 8;

require('yup-password')(yup);

export function AccountEdit({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);
  const token = useSelector((state: RootState) => state.token);

  const FormSchema = Yup.object().shape({
    phoneNumber: Yup.number()
      .typeError('Debe ser un numero')
      .required('Debe ingresar un telefono!'),
    address: Yup.object().shape({
      street: Yup.string().required('Debe ingresar una calle!'),
      number: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar un numero!'),
      zipCode: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar el codigo postal!'),
      city: Yup.string().required('Debe ingresar una ciudad!'),
      province: Yup.string().required('Debe ingresar una provincia!'),
    }),
  });

  const { handleChange, handleBlur, values, errors, touched } = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      phoneNumber: userStore.phoneNumber,
      address: {
        street: userStore.address.street,
        number: userStore.address.number,
        zipCode: userStore.address.zipCode,
        city: userStore.address.city,
        province: userStore.address.province,
      },
    },
    onSubmit: values => console.log(values),
    /* alert(`Email: ${values.email}`), */
  });

  const [selectedValue, setSelectedValue] = useState(
    userStore.address.province,
  );
  const handleConfirmProvince = provincia => {
    values.address.province = provincia;
  };

  const dispatch = useDispatch();

  const provinces = [
    'CABA',
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];

  const pickerItems = provinces.map(p => <Picker.Item label={p} value={p} />);

  function send(e: any) {
    const { phoneNumber, address } = e;
    const user = {
      phoneNumber,
      address,
    };
    updateUser(user, token, dispatch);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          size={size2}
          icon="phone"
          placeholderTextColor="grey"
          value={values.phoneNumber}
          placeholder="Telefono"
          onChangeText={handleChange('phoneNumber')}
          keyboardType="numeric"
          autoCapitalize="none"
          onBlur={handleBlur('phoneNumber')}
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          size={size2}
          icon="address"
          placeholderTextColor="grey"
          placeholder="Calle"
          value={values.address.street}
          onChangeText={handleChange('address.street')}
          onBlur={handleBlur('address.street')}
          error={errors.address?.street}
          touched={touched.address?.street}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          size={size2}
          icon="home"
          placeholderTextColor="grey"
          placeholder="Direccion NUM"
          onChangeText={handleChange('address.number')}
          value={values.address.number}
          autoCapitalize="none"
          keyboardType="numeric"
          onBlur={handleBlur('address.number')}
          error={errors.address?.number}
          touched={touched.address?.number}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: size2,
            borderRadius: 25,
            borderColor: '#fb6583',
            borderWidth: StyleSheet.hairlineWidth,
            padding: 8,
          }}
        >
          <View style={{ padding: 8 }}>
            <Entypo name="location" size={22} color="#fb6583" />
          </View>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              handleConfirmProvince(itemValue);
            }}
          >
            {pickerItems}
          </Picker>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          size={size2}
          icon="location"
          placeholderTextColor="grey"
          placeholder="Codigo Postal"
          onChangeText={handleChange('address.zipCode')}
          value={values.address.zipCode}
          autoCapitalize="none"
          onBlur={handleBlur('address.zipcode')}
          error={errors.address?.zipCode}
          touched={touched.address?.zipCode}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          size={size2}
          icon="location-pin"
          placeholderTextColor="grey"
          value={values.address.city}
          placeholder="Ciudad"
          onChangeText={handleChange('address.city')}
          autoCapitalize="none"
          onBlur={handleBlur('address.city')}
          error={errors.address?.city}
          touched={touched.address?.city}
        />
      </View>

      <View style={styles.btns}>
        <TouchableOpacity
          onPress={() => {
            if (
              !errors.phoneNumber &&
              !errors.address?.street &&
              !errors.address?.number &&
              !errors.address?.zipCode &&
              !errors.address?.city &&
              !errors.address?.province
            ) {
              send(values);
              alert('Tus datos fueron actualizados!');
              navigation.push('Account');
            }
          }}
        >
          <LinearGradient
            style={
              !errors.phoneNumber &&
              !errors.address?.street &&
              !errors.address?.number &&
              !errors.address?.zipCode &&
              !errors.address?.city &&
              !errors.address?.province
                ? styles.gradientButton
                : styles.gradientButtonDisabled
            }
            colors={
              !errors.phoneNumber &&
              !errors.address?.street &&
              !errors.address?.number &&
              !errors.address?.zipCode &&
              !errors.address?.city &&
              !errors.address?.province
                ? [colors.primary, colors.secondary]
                : [colors.disabledPrimary, colors.disabledSecondary]
            }
          >
            <Text style={styles.whiteText}>ACTUALIZAR</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}