import React, { useReducer } from "react";
import { FlatList, Button, View } from "react-native";
import ColorCounter from "../components/ColorCounter"


const COLOR_INCREMENT = 15
const RGB_TOTAL = 255

const reducer = (state, action) => {

  switch (action.color) {
    case 'red':
      return fitsConditions(state.red + action.amount)
        ? { ...state, red: state.red + action.amount }
        : { ...state }
    case 'green':
      return fitsConditions(state.green + action.amount)
        ? { ...state, green: state.green + action.amount }
        : { ...state }
    case 'blue':
      return fitsConditions(state.blue + action.amount)
        ? { ...state, blue: state.blue + action.amount }
        : { ...state }
    default:
  }
}

const fitsConditions = (amount) => {
  return amount <= RGB_TOTAL && amount > 0
}

const SquareScreen = () => {
  const [state, runReducer] = useReducer(reducer,
    {
      red: 0,
      blue: 0,
      green: 0
    }
  );


  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runReducer({
            color: 'red',
            amount: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            color: 'red',
            amount: -1 * COLOR_INCREMENT
          })
        }
        color="red" />
      <ColorCounter
        onIncrease={() =>
          runReducer({
            color: 'blue',
            amount: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            color: 'blue',
            amount: -1 * COLOR_INCREMENT
          })
        } color="blue" />

      <ColorCounter
        onIncrease={() =>
          runReducer({
            color: 'green',
            amount: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            color: 'green',
            amount: -1 * COLOR_INCREMENT
          })
        }
        color="green" />


      <View style={{
        height: 200,
        width: 150,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }} />
    </View>
  )
};

export default SquareScreen;
