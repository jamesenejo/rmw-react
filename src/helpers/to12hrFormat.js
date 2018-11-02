const to12hrFormat = (timeToConvert) => {
  let amOrpm;
  let hour;
  const timeArray = timeToConvert.split(':');
  const [splittedHour, minute] = timeArray;

  if (parseInt(splittedHour, 10) === 0) {
    hour = '12';
    amOrpm = 'AM';
  } else if (parseInt(splittedHour, 10) === 12) {
    hour = parseInt(splittedHour, 10);
    amOrpm = 'PM';
  } else if (parseInt(splittedHour, 10) > 12) {
    hour = parseInt(splittedHour, 10) - 12;
    amOrpm = 'PM';
  } else {
    hour = parseInt(splittedHour, 10);
    amOrpm = 'AM';
  }

  const timeIn12hrFormat = `${hour}:${minute} ${amOrpm}`;

  return timeIn12hrFormat;
};

export default to12hrFormat;
