import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Blog } from "../screens/Blog";
import { Home } from "../screens/Home";

function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Wellcome" component={Home} />
      <Screen name="Blog" component={Blog} />
    </Navigator>
  );
}

export { StackRoutes };
