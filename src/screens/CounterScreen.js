import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, currentCounterState: state.currentCounterState + action.payload };
    case 'decrease':
      return { ...state, currentCounterState: state.currentCounterState - action.payload };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, runReducer] = useReducer(reducer,
    {
      currentCounterState: 0
    }
  );

  return <View>
    <Button
      onPress={
        () => {
          runReducer({
            type: 'increase',
            payload: 1
          })
        }
      }
      title="Increase"
    />

    <Button
      onPress={() => {
        runReducer({
          type: 'decrease',
          payload: 1
        })
      }
      }
      title="Decrease"
    />

    <Text style={styles.text}>
      Current count:
      {state.currentCounterState}
    </Text>
  </View>
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default CounterScreen;
