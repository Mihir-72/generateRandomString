

function generateString() {
  const data = document.getElementById("data");
  const result = document.getElementById('output');

  const length = parseInt(data.value);

  if(isNaN(length) || length <= 0) {
    result.textContent = "please enter a valid positive number";
    return;
  }

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let res = "";

  for(let i = 0; i < length;i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    res += charset.charAt(randomIndex);
  }

  result.textContent = 'Generated random string:' + res;
  
}













// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


// function generateString(length) {
//   const d = document.getElementById("data").value;
//   let result = ' ';
//   const charactersLength = characters.length;

//   for ( let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength))
//   }
//   return result;

//   // console.log(typeof length)
// }

// // console.log("d.value");
// // console.log(document.getElementById("d").value);

// console.log(generateString(5));



// console.log(generateString(
//   document.getElementById("data").value
//   ));







    // const data = document.getElementById("data");

    // const length = data.value;

    // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    // const number = "0123456789";

    // const allChars = upperCase + lowerCase + number;


    // function res() {

    //   let d = "";

    //   d += upperCase [Math.floor(Math.random() * upperCase.length)];

    //   d += lowerCase [Math.floor(Math.random() * lowerCase.length)];

    //   d += number [Math.floor(Math.random() * number.length)];

    //   while (length > d.length){
    //     d += allChars[Math.floor(Math.random() * allChars.length)];
    //   }

    //   // data.value = d;


    // }

      // const a = document.getElementById("data").value;

      // const big = "ABCDEFGHJKLMNOPQRSTUVWXYZ"

      // const number = "1234567890" 


      // if(a === 0) {
      //   console.log("nothing");
      // }
      // else if(a > 0){
      //   console.log("something")
      // }
      // else{
      //   console.log("haha");
      // }

      // if(a === 0) {
      //   document.getElementById("output").innerHTML = `please enter some value`;
      // }
      // else if(a > 0){
      //   document.getElementById("output").innerHTML = 's';
      // }
      // else{
      //   console.log("haha");
      // }
    
    



