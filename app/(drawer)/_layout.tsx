import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DefaultTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

import { colors } from '~/constants/colors.contants';
const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: DefaultTheme.colors.background },
        headerShadowVisible: false,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => <Entypo name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(habits)"
        options={{
          headerTitle: 'Habits',
          drawerLabel: 'Habits',
          drawerIcon: ({ size, color }) => <FontAwesome5 name="tasks" size={size} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="statistics"
        options={{
          headerTitle: 'Statistics',
          drawerLabel: 'Statistics',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ size, color }) => <FontAwesome name="gear" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="sync"
        options={{
          headerTitle: 'Sync Center',
          drawerLabel: 'Sync Center',
          drawerIcon: ({ size, color }) => <FontAwesome5 name="sync" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          headerTitle: 'Help',
          drawerLabel: 'Help',
          drawerIcon: ({ size, color }) => <Entypo name="help" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
