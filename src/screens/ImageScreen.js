import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail"


const ImageScreen = () => {
  const imagesData = [
    {
      title: 'Forest',
      score: 1,
      imageName: require("../../assets/forest.jpg")
    },
    {
      title: 'Sky',
      score: 3,
      imageName: require("../../assets/mountain.jpg")
    },
    {
      title: 'Water',
      score: 2,
      imageName: require("../../assets/beach.jpg")
    }
  ]

  return <View>

    <ImageDetail
      title={imagesData[0].title} score={imagesData[0].score} imageName={imagesData[0].imageName} />
    <ImageDetail
      title={imagesData[1].title} score={imagesData[0].score} imageName={imagesData[1].imageName} />
    <ImageDetail
      title={imagesData[2].title} score={imagesData[0].score} imageName={imagesData[2].imageName} />

  </View>
};


export default ImageScreen;
