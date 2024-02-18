import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Help from "./components/Help/Help";
import Resources from "./components/Resources/Resources";
import ResourcesEdit from "./components/ResourcesEdit/ResourcesEdit";
import NoPage from "./components/NoPage/NoPage";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true, cardStyle: {backgroundColor: 'white'} }}>
        <Stack.Screen 
          name="Main" 
          component={MainStackScreen}
          options={{ header: (props) => <Header {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        cardStyle: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          backgroundColor: 'white'
        }
      }}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="ResourcesEdit" component={ResourcesEdit} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="NoPage" component={NoPage} />
    </Stack.Navigator>
  );
};

export default App;