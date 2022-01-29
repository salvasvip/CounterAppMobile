import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#fff98c`,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',

  },
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
