import React from "react";
import { Text, TouchableOpacity, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>
      HomeScreen
      </Text>
    <Button
      onPress={
        () => {
          navigation.navigate('Component')
        }
      }
      title="Go to components demo?"
    />

    <Button
      onPress={
        () => {
          navigation.navigate('List')
        }
      }
      title="Go to components demo"
    />
    <Button
      onPress={
        () => {
          navigation.navigate('Squares')
        }
      }
      title="Show SquareScreen"
    />
    <Button
      onPress={
        () => {
          navigation.navigate('Image')
        }
      }
      title="Go to image demo"
    />
    <Button
      onPress={
        () => {
          navigation.navigate('Counter')
        }
      }
      title="Go to CounterScreen"
    />

    <Button
      onPress={
        () => {
          navigation.navigate('Colors')
        }
      }
      title="Go to Colors"
    />

    <TouchableOpacity
      style={styles.btn}
      onPress={
        () => {
          navigation.navigate('List')
        }
      }>
    </TouchableOpacity>

    <Button
      onPress={
        () => {
          navigation.navigate('Text')
        }
      }
      title="Go to TextScreen"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
