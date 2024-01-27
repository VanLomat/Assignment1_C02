import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React from 'react';


export default function App() {
    const [text, onChangeText] = React.useState('');
    const [noun, onChangeNoun] = React.useState('');
    const [event, onChangeEvent] = React.useState('');

  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text>Assignment 1</Text>
              <Text>How to play Mad Libs</Text>


              <StatusBar style="auto" />
          </View>
      <View style={styles.body} >
           <TextInput
              style={styles.input}
                  onChangeText={onChangeText}
                  textAlign={'center'}
              placeholder="Name"
              value={text}
          />

          <TextInput
              style={styles.input}
                  onChangeText={onChangeNoun}
                  textAlign={'center'}
              placeholder="Noun"
              value={noun}
          />

          <TextInput
                  style={styles.input}
                  textAlign={'center'}
              onChangeText={onChangeEvent}
              placeholder="Event"
              value={event}
          />
              <View style={styles.buttons}>
                  <Button 
                     
                  title="Make my Hall Pass!"
                  color="#f194ff"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
                  <View style={styles.space} /> 
                  <Button
                      style={styles.buttons}
                  title="Clear"
                      color="#737373"

                  onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
              </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    header: {
        flex: 0.3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        height: 40,
        width: '100%',
        margin: 12,
        //borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        //height: 10,
        //margin: 10,
        //borderWidth: 1,
        //padding: '10%',
        //width:'100%',


        margin: 12,
        width: '100%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttons: {
        marginBottom: 20,
      
        padding: 10,
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});
