import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const ImageDetail = ({ imageName, title, score }) => {

  return <View>
    <Text
      style={styles.text}
    >
      {title}
    </Text>

    <Text
      style={styles.score}
    >
      The score is:  {score}
    </Text>

    <Image source={imageName} />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  score: {
    fontSize: 20
  }

});

export default ImageDetail;
