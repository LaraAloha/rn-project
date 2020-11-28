import React, { useState } from "react";
import { FlatList, Button, View } from "react-native";

const PALLETE_NUMBER = 255;

const ColorScreen = () => {

  const [colors, setColor] = useState([])

  return (
    <View>
      <Button
        onPress={() => {
          setColor([...colors, getRandomColor()])
        }
        }
        title={'Add colours'}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {

          return (<View style={{
            height: 100,
            width: 100,
            backgroundColor: item
          }}
          />
          )
        }}
      />

    </View>
  )
};

const getRandomColor = () => {
  const red = Math.floor(Math.random() * PALLETE_NUMBER);
  const green = Math.floor(Math.random() * PALLETE_NUMBER);
  const blue = Math.floor(Math.random() * PALLETE_NUMBER);
  return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen;
