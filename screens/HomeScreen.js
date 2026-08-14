import { SafeAreaView, FlatList, View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }

        const data = await response.json();
        setPosts(data.slice(0, 10));
        setError('');
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setPosts([]);
        setError('Unable to load news. Please check your internet connection');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DCIT324 News</Text>
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>

      {loading ? (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color="#1d4ed8" />
          <Text style={styles.stateText}>Loading news...</Text>
        </View>
      ) : error ? (
        <View style={styles.stateContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const article = {
              id: item.id,
              title: item.title,
              body: item.body,
              author: `User ${item.userId}`,
              date: `Post #${item.id}`,
              source: 'JSONPlaceholder',
              content: item.body,
            };

            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NewsDetails', {
                    id: article.id,
                    title: article.title,
                    body: article.body,
                  })
                }
              >
                <NewsCard item={article} />
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  list: {
    padding: 12,
    paddingBottom: 20,
  },
  stateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  stateText: {
    marginTop: 12,
    fontSize: 16,
    color: '#374151',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#b91c1c',
    lineHeight: 24,
  },
});