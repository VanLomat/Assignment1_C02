import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React from 'react';
import Styles from './styles/page-styles';
import { Link } from 'expo-router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import homeScreen from '../Assignment1_C02/screens/homeScreen'
import page2 from './screens/page2'

const Stack = createNativeStackNavigator();

export default function App() {
    const [text, onChangeText] = React.useState('');
    const [noun, onChangeNoun] = React.useState('');
    const [event, onChangeEvent] = React.useState('');

    return (
    <NavigationContainer>

    
    <Stack.Navigator initialRouteName='page2'>
    
                  <View style={Styles.container}>
                      <View style={Styles.header}>
                          <Text>Assignment 1</Text>
                          <Text>How to play Mad Libs</Text>


                          <StatusBar style="auto" />
                      </View>
                  <View style={Styles.body} >
                       <TextInput
                          style={Styles.input}
                              onChangeText={onChangeText}
                              textAlign={'center'}
                          placeholder="Name"
                          value={text}
                      />

                      <TextInput
                          style={Styles.input}
                              onChangeText={onChangeNoun}
                              textAlign={'center'}
                          placeholder="Noun"
                          value={noun}
                      />

                      <TextInput
                              style={Styles.input}
                              textAlign={'center'}
                          onChangeText={onChangeEvent}
                          placeholder="Event"
                          value={event}
                      />
                          <View style={Styles.buttons}>
                              <Button 
                     
                              title="Make my Hall Pass!"
                              color="#f194ff"
                              onPress={() => Alert.alert('Button with adjusted color pressed')}
                          />
                              <View style={Styles.space} /> 
                              <Button
                                  style={Styles.buttons}
                              title="Clear"
                                  color="#737373"
                              onPress={() => Alert.alert('Button with adjusted color pressed')}
                            />
                            <View style={Styles.space} /> 
                            <Link href="/page2">Go to Page 2</Link>
                          </View>
                      </View>
                        </View>

     <Stack.Screen name='Home'component={homeScreen}/>
    <Stack.Screen name='page2'component={page2}/>
        </Stack.Navigator >
    </NavigationContainer>
            
  );
}


