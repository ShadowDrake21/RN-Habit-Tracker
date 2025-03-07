import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Page = () => {
  const { date } = useLocalSearchParams<{ date: string }>();
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
