import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailsScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="NewsList" component={NewsListScreen} options={{ title: 'News' }} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'Article' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}