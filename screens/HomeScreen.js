import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ExtypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { Categories } from '../components';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className='bg-white pt-5'>
			{/* Header */}
			<View className='flex-row pb-3 items-center px-4 space-x-2'>
				<Image
					source={{
						uri: 'https://links.papareact.com/wru',
					}}
					className='h-7 w-7 bg-gray-300 p-4 rounded-full'
				/>
				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
					<Text className='font-bold text-xl flex-row items-center'>
						Current Location{' '}
						<ExtypoIcon name='chevron-thin-down' size={20} color='#00CCBB' />
					</Text>
				</View>
				<AntDesignIcon name='user' size={35} color='#00CCBB' />
			</View>

			{/* Search */}
			<View className='flex-row items-center space-x-2 pb-2 px-4'>
				<View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-md'>
					<AntDesignIcon name='search1' color='gray' size={20} />
					<TextInput
						placeholder='Restaurant and cuisines'
						keyboardType='default'
					/>
				</View>
				<AntDesignIcon name='filter' color='#00CCBB' size={20} />
			</View>

			{/* Body */}
			<ScrollView
				className='bg-gray-100'
				contentContainerStyle={{ paddingBottom: 100 }}>
				<Categories />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
