import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient"; // Make sure to install this library
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter(); // Initialize the router

  const buttons = [
    { title: "Endre informasjon", route: "/UserData" },
    { title: "User Profile", route: "/another screen" },
    { title: "Button 3", route: "/someOtherScreen" }, // Add the actual route
    { title: "Button 4", route: "/anotherScreen" }, // Add the actual route
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Møt</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push("/User")}
        >
          <Icon name="person" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => router.push(button.route as any)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  header: {
    position: "absolute",
    top: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(33, 150, 243, 0.8)",
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  iconButton: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
    padding: 5,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80, // added margin to avoid overlapping with header
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4CAF50", // Changed to a green color
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
