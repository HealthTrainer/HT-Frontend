import React from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { cloneDeep } from 'lodash';

const Calendar = ({ onDayPress, selectedDate, markedDates }) => {
  let md;
  if (!markedDates) {
    md = {};
    md[selectedDate] = { selected: true };
  } else {
    md = cloneDeep(markedDates);
    md[selectedDate] = { selected: true };
  }

  return (
    <RNCalendar
      onDayPress={onDayPress}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      markedDates={md}
    />
  );
};

export default Calendar;
