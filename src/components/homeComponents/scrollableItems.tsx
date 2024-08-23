import { slideData } from "@/data/data";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ScrollableItems = () => {
  return (
    <View style={styles.slideableCards}>
      {slideData.map((slide) => (
        <View
          key={`homeslide___${slide.id}`}
          style={{
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "relative",
              width: 60,
              height: 60,
              overflow: "hidden",
              borderRadius: 100,
            }}
          >
            <Image
              source={slide.image}
              style={{ width: 60, height: 60, objectFit: "cover" }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            {slide.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ScrollableItems;

const styles = StyleSheet.create({
  slideableCards: {
    flexDirection: "row",
    gap: 10,
    overflow: "scroll",
    height: 80,
    marginTop: 15,
  },
});
