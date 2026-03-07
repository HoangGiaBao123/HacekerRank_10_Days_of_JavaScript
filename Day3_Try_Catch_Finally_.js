function reverseString(str) {
  try {
    console.log(str.split('').reverse().join(''));
  }
  catch(error) {
    console.log("str.split is not a function");
  }
  finally {
    if (typeof str != "string") {
      console.log(str);
    }
  }
}
