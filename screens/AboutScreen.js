import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
  const currentDate = new Date().toLocaleDateString();
  const appName = "Michael's To Do List";
  const name = "Michael";

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.heading}>{appName}</Text>
        <Text style={styles.subheading}>Your Name: {name}</Text>
        <Text style={styles.subheading}>Current Date: {currentDate}</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    marginVertical: 5,
  },
});
