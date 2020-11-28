import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {

  const dataList = [
    { name: 'Her name is Lisa too 1', age: 12 },
    { name: 'Her name is Lisa too 2', age: 92 },
    { name: 'Her name is Lisa too 3', age: 42 },
    { name: 'Her name is Lisa too 4', age: 22 },
    { name: 'Her name is Lisa too 5', age: 22 },
    { name: 'Her name is Lisa too 6', age: 52 },
    { name: 'Her name is Lisa too 7', age: 12 },
    { name: 'Her name is Lisa too 8', age: 22 },
    { name: 'Her name is Lisa too 9', age: 112 },
    { name: 'Her name is Lisa too 10', age: 11 },
  ]


  return <FlatList
    data={dataList}
    keyExtractor={(nameItem) => nameItem.name}
 
    renderItem={
      ({ item }) => {
        return <Text
          style={styles.text}
        >
          {item.name + ' – ' + item.age}
        </Text >
      }
    } />
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 50
  }
});

export default ListScreen;
