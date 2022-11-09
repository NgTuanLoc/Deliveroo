import { ScrollView, Text } from 'react-native';

import CategoryCard from './CategoryCard';

const DUMMY_IMAGE =
	'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const Categories = () => {
	return (
		<ScrollView
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
			horizontal
			showsHorizontalScrollIndicator={false}>
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
			<CategoryCard imgUrl={DUMMY_IMAGE} title='testing' />
		</ScrollView>
	);
};

export default Categories;
