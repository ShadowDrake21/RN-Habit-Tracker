import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TabBarIcon } from '~/components/TabBarIcon';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color, size }) => <Entypo name="list" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plussquareo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color, size }) => <Feather name="archive" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
