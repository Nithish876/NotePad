import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../appRedux/store";


export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}
