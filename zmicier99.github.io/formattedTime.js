// BEGIN (write your solution here)
const formattedTime = (num) => {
  let hours;
  let minutes = 60;
  let result;

  if (num % minutes === 0) {
    hours = num / minutes;
    if (String(hours).length === 2)
      return result = `${hours}:00`;
    else return result = `0${hours}:00`
  }
  else
    hours = Math.floor(num / minutes);
  minutes = num - hours * 60;
  if (String(hours).length === 2 && String(minutes).length === 2)
    return result = `${hours}:${minutes}`;
  else if (String(minutes).length === 2)
    return result = `0${hours}:${minutes}`;
  else return result = `0${hours}:0${minutes}`

}

export default formattedTime;
// END
