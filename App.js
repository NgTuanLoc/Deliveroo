import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ChevronUpDownIcon } from 'react-native-heroicons/outline';
import { HomeScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='home' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
