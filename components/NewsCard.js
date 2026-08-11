import { View, StyleSheet, Image } from 'react-native';
import NewsTitle from './NewsTitle';
import NewsMeta from './NewsMeta';
import NewsContent from './NewsContent';

export default function NewsCard({ item }) {
  return (
    <View style={styles.card}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : null}
      <NewsTitle title={item.title} />
      <NewsMeta author={item.author} date={item.date} source={item.source} />
      <NewsContent content={item.content} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
});