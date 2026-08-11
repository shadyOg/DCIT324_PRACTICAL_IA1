import { ScrollView, View, Image, StyleSheet } from 'react-native';
import NewsTitle from '../components/NewsTitle';
import NewsMeta from '../components/NewsMeta';
import NewsContent from '../components/NewsContent';

export default function NewsDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
      <NewsTitle title={item.title} />
      <NewsMeta author={item.author} date={item.date} source={item.source} />
      <NewsContent content={item.content} />
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