import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  // save names 
  const saveNames = () => {
    setNames(oldArray => [name, ...oldArray]);
    setName('');
  }
    return (
      <View style={styles.app}>
        <TextInput placeholder="Enter your name here..."
          onChangeText={(val) => setName(val)}
          value={name}
          style={styles.textInput}
        />
        <Button title="Save" onPress={saveNames}/>
        {
          names.map(each => <Text style={styles.eachName}>{each}</Text>)
        }
      </View>
    );
  }
const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  textInput: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  eachName: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: "grey",
    borderWidth: 1
  }
});

export default App;
