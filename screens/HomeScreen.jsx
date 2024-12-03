import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList />
        <ToDoForm />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}
