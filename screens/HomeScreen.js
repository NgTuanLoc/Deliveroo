import { View, Text, SafeAreaView, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView>
			<Text className='text-red-500'>
				<View className='flex-row pb-3 items-center mx-4 space-x-4'>
					<Image
						source={{
							uri: 'https://links.papareact.com/wru',
						}}
						className='h-7 w-7 bg-gray-300 p-4 rounded-full'
					/>
					<View>
						<Text className='font-bold text-gray-400 text-xs'>
							Deliver Now!
						</Text>
						<Text className='font-bold text-xl flex-row items-center'>
							Current Location{' '}
							<Icon name='chevron-thin-down' size={20} color='#00CCBB' />
						</Text>
					</View>
				</View>
			</Text>
		</SafeAreaView>
	);
};

export default HomeScreen;

// #00CCBB
