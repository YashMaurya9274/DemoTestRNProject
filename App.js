// import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// export default function App() {
//   const [mydate, setDate] = useState(new Date());
//   const [isDisplayDate, setShow] = useState(false);
//   const changeSelectedDate = (event, selectedDate) => {
//     const currentDate = selectedDate || mydate;
//     setDate(currentDate);
//   };
//   const displayDatepicker = () => {
//     setShow(true);
//   };
//   console.log(mydate);
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Button onPress={displayDatepicker} title="Show date picker!" />
//       </View>
//       {isDisplayDate && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={mydate}
//           mode="datetime"
//           is24Hour={true}
//           display="default"
//           onChange={changeSelectedDate}
//         />
//       )}
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import ScrollableFlatlist from './src/components/ScrollableFlatlist';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollableFlatlist />
    </View>
  );
};

export default App;
