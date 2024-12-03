import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim() === '') return; 
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => <HomeScreen tasks={tasks} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
