import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your task"
        />
        <Button title="Save" color="#fc005d" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  textInput: {
    borderColor: '#ededed',
    borderWidth: 1,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    width: '70%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
