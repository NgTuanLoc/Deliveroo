import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { RestaurantCard } from './';

const FeaturedRow = ({ title, description }) => {
	return (
		<View>
			<View className='mt-4 flex-row items-center justify-between px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<Icon name='arrowright' size={20} color='#00CCBB' />
			</View>
			<Text className='text-xs text-gray-500 px-4'>{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className='pt-4'>
				{/* RestaurantCard */}
				<RestaurantCard
					id={123}
					imgUrl='https://links.papareact.com/gn7'
					title='Sushi'
					rating={4.5}
					genre='Japanese'
					address='123 Main St'
					short_description='This is a description'
					dishes={[]}
					long={20}
					lat={0}
				/>
				<RestaurantCard
					id={123}
					imgUrl='https://links.papareact.com/gn7'
					title='Sushi'
					rating={4.5}
					genre='Japanese'
					address='123 Main St'
					short_description='This is a description'
					dishes={[]}
					long={20}
					lat={0}
				/>
				<RestaurantCard
					id={123}
					imgUrl='https://links.papareact.com/gn7'
					title='Sushi'
					rating={4.5}
					genre='Japanese'
					address='123 Main St'
					short_description='This is a description'
					dishes={[]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
