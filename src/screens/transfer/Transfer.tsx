import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './TransferStyles';
import { RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import {
  addFunds,
  cleanErrors,
  detailContact,
  setLoadingFalse,
} from '../../redux/actions';
import { ErrorStyle } from '../../constants/ErrorStyle';
import { LoadingFull } from '../loading2/LoadingFull';

export const Transfer = () => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  // const error = useSelector((state: RootState) => state.errors);
  const loading = useSelector((state: RootState) => state.loading);
  const ContactDetails = useSelector(state => state.DetailTransfer);
  const dispatch = useDispatch();
  // const [state, setState] = useState(false);
  const [data, setData] = useState({
    email: '',
    amount: 0,
    comment: '',
  });

  useEffect(() => {
    if (ContactDetails.email) {
      setData({ ...data, email: ContactDetails.email });
    }
  }, []);

  return (
    <View style={styles.container}>
      <LoadingFull show={loading} />
      {/*   {error.length ? (
        <View style={ErrorStyle.errorView}>
          <Text style={ErrorStyle.errorText}>{error}</Text>
        </View>
      ) : null} */}

      <View style={{ justifyContent: 'space-between', height: '50%' }}>
        <TextInput
          placeholder="Ingresá email..."
          placeholderTextColor="grey"
          value={data.email}
          onChangeText={(text: string) => setData({ ...data, email: text })}
          keyboardType="email-address"
          style={ButtonPrimaryStyle.input}
        />
        <View>
          <Text style={styles.maxBalanceText}>
            SALDO ${accountStore.balance.amount}
          </Text>
          <TextInput
            value={`$${data.amount.toString()}`}
            onChangeText={(text: string) => {
              if (text.substring(1, text.length) === '')
                setData({ ...data, amount: 0 });
              else if (
                parseInt(text.substring(1, text.length), 10) <=
                accountStore.balance.amount
              )
                setData({
                  ...data,
                  amount: parseInt(text.substring(1, text.length), 10),
                });
            }}
            keyboardType="number-pad"
            style={ButtonPrimaryStyle.amountInput}
          />
        </View>

        <TextInput
          placeholder="Queres dejar un comentario?..."
          placeholderTextColor="grey"
          value={data.comment}
          onChangeText={(text: string) => setData({ ...data, comment: text })}
          style={ButtonPrimaryStyle.input}
        />
      </View>
      <View>
        {data.amount > 0 &&
        data.email.length > 0 &&
        data.email !== userStore.email ? (
          <View style={{ alignSelf: 'center', marginTop: '20%' }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  addFunds(
                    userStore.email.toLowerCase(),
                    data.email.toLowerCase(),
                    'Transfer',
                    data.amount,
                    data.comment,
                    token,
                  ),
                );
                setData({
                  ...data,
                  amount: 0,
                });
              }}
            >
              <LinearGradient
                style={ButtonPrimaryStyle.gradientButton}
                colors={[colors.primary, colors.secondary]}
              >
                <Text style={ButtonPrimaryStyle.whiteText}>ENVIAR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ alignSelf: 'center', marginTop: '20%' }}>
            <TouchableOpacity disabled>
              <LinearGradient
                style={ButtonPrimaryStyle.gradientButtonDisabled}
                colors={[colors.disabledPrimary, colors.disabledSecondary]}
              >
                <Text style={ButtonPrimaryStyle.whiteText}>ENVIAR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
