import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const UserForm = () => {
  const [birthYear, setBirthYear] = useState<number | string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [startYear, setStartYear] = useState<number | string>("");
  const [endYear, setEndYear] = useState<number | string>("");

  const handleSubmit = () => {
    // Validate inputs
    if (!birthYear || !schoolName || !startYear || !endYear) {
      Alert.alert("Please fill in all fields.");
      return;
    }

    // Instead of saving to JSON, we'll just show an alert with the data
    Alert.alert(
      "User Information",
      `Birth Year: ${birthYear}\nSchool Name: ${schoolName}\nStart Year: ${startYear}\nEnd Year: ${endYear}`
    );

    // Clear inputs after submission
    setBirthYear("");
    setSchoolName("");
    setStartYear("");
    setEndYear("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Legg inn informasjon</Text>

      <TextInput
        style={styles.input}
        placeholder="Fødselsår"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={String(birthYear)}
        onChangeText={setBirthYear}
      />

      <TextInput
        style={styles.input}
        placeholder="Skolenavn"
        placeholderTextColor="#aaa"
        value={schoolName}
        onChangeText={setSchoolName}
      />

      <TextInput
        style={styles.input}
        placeholder="Skolestart"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={String(startYear)}
        onChangeText={setStartYear}
      />

      <TextInput
        style={styles.input}
        placeholder="Skoleslutt"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={String(endYear)}
        onChangeText={setEndYear}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Legg til informasjon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F0F4F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UserForm;
