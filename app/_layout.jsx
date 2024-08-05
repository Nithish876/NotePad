import { Provider } from "react-redux";
import { store } from "../appRedux/store";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "../components/UI/CustomDrawer";
import { Octicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{
          drawerLabelStyle: {
            marginLeft: -25,
            fontWeight: 900,
            color: 'black',
          },
          drawerActiveBackgroundColor: '#F5E7B2'
        }} drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="index" options={{
            drawerLabel: 'Home', title: "Home", drawerIcon: () => {
              return <Octicons name="home" size={24} />
            }
          }} />
          <Drawer.Screen name="help" options={{
            drawerLabel: 'Help', title: "Help", drawerIcon: () => {
              return <Octicons name="info" size={24} />
            }
          }} />
          <Drawer.Screen name="addPost" options={{ drawerItemStyle: { display: 'none' } }} />
        </Drawer>
      </GestureHandlerRootView>
    </Provider>
  );
}
