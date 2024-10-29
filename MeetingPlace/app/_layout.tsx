import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      {/* Define your stack screens here if needed */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="userProfile" options={{ title: "User Profile" }} />
      <Stack.Screen name="userForm" options={{ title: "User Form" }} />
    </Stack>
  );
};

export default Layout;
