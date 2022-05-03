import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BottomSheet, {BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{flex: 1}}>
          <Header />
        </SafeAreaView>
        <BottomSheet index={0} snapPoints={['50%']}>
          <BottomSheetView style={{backgroundColor: 'red', height: '100%'}}>
            <Section title="Bottom Sheet">I'm in a bottom sheet</Section>
          </BottomSheetView>
        </BottomSheet>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
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

export default App;
