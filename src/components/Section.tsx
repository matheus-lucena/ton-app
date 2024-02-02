import {PropsWithChildren} from 'react';
import React, {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({children, title}: SectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.BLACK,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.BLACK,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Section;
