import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[date]" />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
