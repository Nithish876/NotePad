import { Provider } from "react-redux";
import { store } from "../appRedux/store"; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "../components/UI/CustomDrawer";

export default function RootLayout() {
  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={<CustomDrawer />}>
        <Drawer.Screen name="index" options={{drawerLabel:'Home',title:"Home"}}  />
        
      </Drawer>
    </GestureHandlerRootView>
    </Provider>
  );
}
