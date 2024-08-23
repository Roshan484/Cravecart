import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            width: "50%",
          }}
        >
          <MagnifyingGlassIcon color="black" size={20} />
          <TextInput style={styles.search} placeholder="Search" />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 11,
            color: "#666",
            borderLeftColor: "#ccc",
            borderLeftWidth: 1,
            paddingLeft: 5,
            marginLeft: 1,
          }}
        >
          Ratnachwok, Pokhara
        </Text>
      </View>
      <View
        style={{
          borderRadius: 100,
          padding: 8,
          backgroundColor: "#EA8000",
        }}
      >
        <AdjustmentsHorizontalIcon color="white" size={25} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    width: "85%",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  search: {
    padding: 5,
  },
});
