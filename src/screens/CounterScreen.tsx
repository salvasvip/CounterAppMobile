import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab title={'+1'}/>
      {/*<TouchableOpacity*/}
      {/*  style={styles.fabLocationBR}*/}
      {/*  onPress={() => setCounter(counter + 1)}*/}
      {/*>*/}
      {/*  <View style={styles.fab}>*/}
      {/*    <Text style={styles.fabText}>+1</Text>*/}
      {/*  </View>*/}
      {/*</TouchableOpacity>*/}

    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#fff98c`,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
});
