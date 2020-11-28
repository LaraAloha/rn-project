import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return <View>
    <Button
      onPress={
        () => {
          setCounter(counter + 1)
        }
      }
      title="Increase"
    />

    <Button
      onPress={
        () => {
          setCounter(counter - 1)
        }
      }
      title="Decrease"
    />

    <Text style={styles.text}>
      Current count: {counter}
    </Text>
  </View>
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default CounterScreen;
