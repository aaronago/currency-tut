import React from "react";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import colors from "../constants/colors";
import RowItem, { RowSeparator } from "../components/RowItem";

const openLink = (url) => {
  return Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong", "Please Try Again")
  );
};
const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          onPress={() => openLink("https://learn.handlebarlabs.com/courses/")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          text="Themes"
        />
        <RowSeparator />
        <RowItem
          onPress={() => openLink("https://learn.handlebarlabs.com/courses/")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          text="React Native Basics"
        />
        <RowSeparator />
        <RowItem
          onPress={() => openLink("https://learn.handlebarlabs.com/courses/")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          text="React Native By Example"
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
