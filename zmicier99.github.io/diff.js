// BEGIN (write your solution here) (write your solution here)
const diff = (integer1, integer2) => {
  const circle = 360;
  let result;

  if (integer1 <= integer2 && integer2 < 180 && integer1 < 180)
    return result = integer2 - integer1;

  if (integer1 < integer2 && integer2 >= 180 && integer1 < 180)
    return result = circle - integer2 + integer1;

  if (integer1 < integer2 && integer2 >= 180 && integer1 > 180)
    return result = integer2 - integer1;


  if (integer1 > integer2 && integer1 >= 180)
    return result = circle - integer1 + integer2;

  if (integer1 > integer2 && integer1 < 180)
    return result = integer1 - integer2;

}
// END
export default diff;

