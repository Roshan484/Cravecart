import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "react-native-heroicons/outline";

const PopularCard = () => {
  return (
    <View>
      <View
        style={{
          height: 250,
          minWidth: 340,
          borderRadius: 30,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <View style={{ width: "100%", height: "100%", position: "relative" }}>
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              top: 10,
              left: 10,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.3,
            }}
          />
          <Image
            source={require("../../../assets/images/burger.jpg")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            top: 10,
            left: 15,
            width: 150,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
            Cheese Hot Ham Burger
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            top: 10,
            right: 10,
            backgroundColor: "#fff",
            borderRadius: 100,
            paddingHorizontal: 10,
            paddingVertical: 5,
            opacity: 0.8,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
            Rs. 500
          </Text>
        </View>
        <Pressable
          style={{
            position: "absolute",
            zIndex: 2,
            left: 10,
            bottom: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: 190,
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Add to cart
            </Text>
          </View>
        </Pressable>
        <View
          style={{
            position: "absolute",
            zIndex: 2,
            right: 10,
            bottom: 10,
            backgroundColor: "white",
            opacity: 0.6,
            borderRadius: 100,
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}
        >
          <HeartIcon color="black" size={25} />
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 2,
            right: 65,
            bottom: 10,
            backgroundColor: "white",
            opacity: 0.6,
            borderRadius: 100,
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}
        >
          <ChatBubbleLeftEllipsisIcon color="black" size={25} />
        </View>
      </View>
    </View>
  );
};

export default PopularCard;
