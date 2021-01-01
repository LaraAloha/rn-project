import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";


const TextScreen = () => {

  const [name, setName] = useState('')
  return <View>
    <Text style={styles.text}
    >
      Enter Password
    </Text>

    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newValue) => {
        setName(newValue)
      }}
    />

    <Text>
      Hi, {name}
    </Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 25,
    margin: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    fontSize: 20,
    lineHeight: 25
  }
});

export default TextScreen;
