import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  return <View>
    <Text
      style={styles.text}
    > ~ current color to be adjusted – {color} ~ </Text>

    <Button
      style={styles.btn}
      onPress={() => onIncrease()}
      title={`increase ${color}-ish`} />
    <Button
      style={styles.btn}
      onPress={() => onDecrease()}
      title={`decrease ${color}-ish`} />

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  },
  btn: {
    width: 200,
    height: 45
  }
})


export default ColorCounter;
