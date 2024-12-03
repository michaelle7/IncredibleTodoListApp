import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => (
  <View>
    <Text>Header</Text>
  </View>
);

const Footer = () => (
  <View>
    <Text>Footer</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
