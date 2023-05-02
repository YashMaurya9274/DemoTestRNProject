import {View} from 'react-native';
import React from 'react';
import ScrollableFlatlist from './src/components/ScrollableFlatlist';
import AnimatedTabsIndicator from './src/components/AnimatedTabsIndicator';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <ScrollableFlatlist /> */}
      <AnimatedTabsIndicator />
    </View>
  );
};

export default App;
