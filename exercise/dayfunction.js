export function isWeekend(date) {
  const dateString = date.format('dddd');
  if(dateString === 'Saturday'){
    return 'Saturday';
  } else if(dateString === 'Sunday') {
    return 'Sunday';
  }
  return dateString;
}