import React from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';

const Calendar = ({ onDayPress }) => {
  return (
    <RNCalendar
      onDayPress={onDayPress}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export default Calendar;
