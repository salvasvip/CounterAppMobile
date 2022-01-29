import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.fabLocation,
          (position === 'bl')
            ? styles.left
            : styles.right,
        ]}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View style={[
        styles.fabLocation,
        (position === 'bl')
          ? styles.left
          : styles.right,
      ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={
            TouchableNativeFeedback.Ripple(
              'rgba(255,246,69,0.5)',
              false,
              17)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return (Platform.OS === 'ios') ? ios() : android();
};

export default Fab;

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 30,
  },
  left: {
    left: 30,
  },
  right: {
    right: 30,
  },
  fab: {
    backgroundColor: '#ffae45',
    width: 35,
    height: 35,
    borderRadius: 100,
    marginTop: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
