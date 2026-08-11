import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import NewsCard from '../components/NewsCard';

const newsItems = [
  {
    id: '1',
    title: 'Top news story',
    author: 'Jane Doe',
    date: 'Aug 10, 2026',
    source: 'News Agency',
    content: 'This is the news summary or excerpt shown on the list.',
    image: 'https://example.com/image.jpg',
  },
  // add more items...
];

export default function NewsListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { item })}>
      <NewsCard item={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newsItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingBottom: 16,
  },
});