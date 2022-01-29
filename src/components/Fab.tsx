import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  // position: string;
}

const Fab = ({title}: Props) => {
  return (
    <TouchableOpacity
      style={styles.fabLocationBR}
      onPress={() => console.log('clic')}
    >
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    left: 30,
    bottom: 30,
  },
  fabLocationBR: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  fab: {
    backgroundColor: '#ffae45',
    width: 35,
    height: 35,
    borderRadius: 100,
    marginTop: 15,
    justifyContent: 'center',
  },
  fabText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
