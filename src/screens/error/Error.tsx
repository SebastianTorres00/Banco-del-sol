import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { resFromBack, Props } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { styles } from './ErrorStyles';
import colors from '../../constants/colors';

export function Error({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);

  return (
    <View style={styles.container}>
      <View>
        <Text>Ha ocurrido un error</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={ButtonPrimaryStyle.button}
        >
          <Text style={ButtonSecondaryStyle.text}>Volver</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
}