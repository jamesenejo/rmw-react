const dateToWords = (dateToConvert) => {
  const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dateArray = dateToConvert.split('T')[0].split('-');
  const [year, month, day] = dateArray;

  const dateInWords = `${monthsArray[month - 1]} ${day}, ${year}`;

  return dateInWords;
};

export default dateToWords;
