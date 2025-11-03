import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import HomeScreen from '../../screens/mainScreens/home/HomeScreen';
import OwnerHome from '../../CarOwner/Home/OwnerHome';

const Stack = createNativeStackNavigator();

const CarOwnerNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{ animation: Platform.OS === "android" ? 'default' : 'fade', animationDuration: 500 }}>
      <Stack.Screen
        name="OwnerHome"
        component={OwnerHome}
        options={{ headerShown: false }}

      />
    </Stack.Navigator>
  );
};

export default CarOwnerNavigation;