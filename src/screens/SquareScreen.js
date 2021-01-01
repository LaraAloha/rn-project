import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 15
const RGB_TOTAL = 255

const reducer = (state, action) => {

  switch (action.type) {
    case 'change_red':
      return fitsConditions(state.red + action.payload)
        ? { ...state, red: state.red + action.payload }
        : { ...state }
    case 'change_green':
      return fitsConditions(state.green + action.payload)
        ? { ...state, green: state.green + action.payload }
        : { ...state }
    case 'change_blue':
      return fitsConditions(state.blue + action.payload)
        ? { ...state, blue: state.blue + action.payload }
        : { ...state }
    default:
      return state;
  }
}

const fitsConditions = (payload) => {
  return payload <= RGB_TOTAL && payload > 0
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
            type: 'change_red',
            payload: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            type: 'change_red',
            payload: -1 * COLOR_INCREMENT
          })
        }
        color="red" />
      <ColorCounter
        onIncrease={() =>
          runReducer({
            type: 'change_blue',
            payload: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            type: 'change_blue',
            payload: -1 * COLOR_INCREMENT
          })
        } color="blue" />

      <ColorCounter
        onIncrease={() =>
          runReducer({
            type: 'change_green',
            payload: COLOR_INCREMENT
          })
        }
        onDecrease={() =>
          runReducer({
            type: 'change_green',
            payload: -1 * COLOR_INCREMENT
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
