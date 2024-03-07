import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const resetCounters = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contadores em React Native</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterLabel}>Contador 1:</Text>
        <Text style={styles.count}>{count1}</Text>
        <Button title="Incrementar" onPress={incrementCount1} />
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.counterLabel}>Contador 2:</Text>
        <Text style={styles.count}>{count2}</Text>
        <Button title="Incrementar" onPress={incrementCount2} />
      </View>
      <Button title="Zerar Contadores" onPress={resetCounters} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  count: {
    fontSize: 30,
    marginRight: 10,
  },
});
