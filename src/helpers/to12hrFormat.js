const to12hrFormat = (timeToConvert) => {
  let amOrpm;
  let hour;
  const timeArray = timeToConvert.split(':');
  const [splittedHour, minute] = timeArray;

  if (splittedHour === '00') {
    hour = '12';
    amOrpm = 'AM';
  } else if (splittedHour === '12') {
    hour = splittedHour;
    amOrpm = 'PM';
  } else if (splittedHour > '12') {
    hour = splittedHour - 12;
    amOrpm = 'PM';
  } else {
    hour = splittedHour;
    amOrpm = 'AM';
  }

  const timeIn12hrFormat = `${hour}: ${minute} ${amOrpm}`;

  return timeIn12hrFormat;
};

export default to12hrFormat;
