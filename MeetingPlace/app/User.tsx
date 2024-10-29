import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library
import { useRouter } from "expo-router"; // Use useRouter from expo-router

export default function UserScreen() {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <Icon
        name="arrow-back"
        size={30}
        color="#2196F3"
        style={styles.backIcon}
        onPress={() => router.back()} // Navigate back to the previous screen
      />

      <Text style={styles.title}>User Profile</Text>

      {/* Example User Information */}
      <Text style={styles.infoText}>Name: John Doe</Text>
      <Text style={styles.infoText}>Email: johndoe@example.com</Text>
      <Text style={styles.infoText}>Location: Bergen, Norway</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backIcon: {
    position: "absolute",
    left: 20,
    top: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
