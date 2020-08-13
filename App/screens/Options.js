import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView, ScrollView } from 'react-native';
import colors from '../contants/colors';
import RowItem, { RowSeparator } from '../components/RowItem';

const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          onPress={() => alert('todo')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          text="Themes"
        />
        <RowSeparator />
        <RowItem
          onPress={() => alert('todo')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          text="React Native Basics"
        />
        <RowSeparator />
        <RowItem
          onPress={() => alert('todo')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          text="React Native Byeee Example"
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
