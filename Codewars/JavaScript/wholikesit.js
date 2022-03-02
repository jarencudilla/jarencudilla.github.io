//6kyu
//Who likes it?

function likes(names) {
  // TODO
  // check the number of elements in the names array
  // if empty, display "no one likes this"
  // if array is == 1 display name
  // if array is == 2 display name0 and name1
  // if array is == 3 display name0 and name1 and name2
  // if array is == 4 or more display name0 and name1 and names.length - 2

switch (names.length) {
  case 0:
    return "no one likes this";
    break;
  case 1:
    return `${names[0]} likes this`;
    break;
  case 2:
    return `${names[0]} and ${names[1]} like this`;
    break;
  case 3:
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    break;
  default:
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    break;
}
}

// Initially this was my solution:

function likes(names) {
  // TODO
  // check the number of elements in the names array
  // if empty, display "no one likes this"
  // if array is == 1 display name
  // if array is == 2 display name0 and name1
  // if array is == 3 display name0 and name1 and name2
  // if array is == 4 or more display name0 and name1 and names.length - 2

  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}