import { ScrollView, Image, StyleSheet } from 'react-native';
import NewsTitle from '../components/NewsTitle';
import NewsMeta from '../components/NewsMeta';
import NewsContent from '../components/NewsContent';

export default function NewsDetailsScreen({ route }) {
  const { id, title, body } = route.params || {};

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <NewsTitle title={title || 'News details'} />
      <NewsMeta
        author={`Post ID: ${id ?? 'N/A'}`}
        date="News Post"
        source="JSONPlaceholder"
      />
      <NewsContent content={body || 'No article details are available.'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 16,
  },
});