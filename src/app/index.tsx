import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/homeComponents/homeHeader";
import ScrollableItems from "../components/homeComponents/scrollableItems";
import PopularCard from "../components/cardComponents/popularCard";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: 8,
            zIndex: 100,
          }}
        >
          <HomeHeader />
        </View>
        <ScrollView
          bounces={false}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ marginTop: 45 }}>
            <ScrollView
              horizontal
              style={{ paddingHorizontal: 2 }}
              bounces={false}
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
            >
              <ScrollableItems />
            </ScrollView>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 15 }}
              >
                Popular Items
              </Text>
              <ScrollView
                horizontal
                style={{ paddingHorizontal: 2 }}
                bounces={false}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    minWidth: 320,
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <PopularCard />
                  <PopularCard />
                  <PopularCard />
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 15 }}
              >
                Popular Items
              </Text>
              <ScrollView
                horizontal
                style={{ paddingHorizontal: 2 }}
                bounces={false}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    minWidth: 320,
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <PopularCard />
                  <PopularCard />
                  <PopularCard />
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    position: "relative",
  },
});
