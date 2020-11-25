import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const name = 'Larissa'
  
  return (
    <View>
      <Text style={styles.title}>
     Made by {name}
      </Text>

      <Text style={styles.subTitle}>
        with love
        </Text>

    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'red'
  },

  subTitle: {
    fontSize: 17
  }
});

export default ComponentScreen;
