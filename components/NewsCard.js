import { View, StyleSheet } from 'react-native';
import NewsTitle from './NewsTitle';
import NewsMeta from './NewsMeta';
import NewsContent from './NewsContent';

export default function NewsCard({ item }) {
  return (
    <View style={styles.card}>
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
});