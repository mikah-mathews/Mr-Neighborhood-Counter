// business logic

function beepBoop(num) {
  
  let numNum = parseInt(num);
  

  for (let i = 0; i<=numNum; i++) {
    let strNum = i.toString();
    if (i === 1) {
      console.log("Beep");
    } else if (i === 2) {
      console.log("Boop");
    } else if (i === 3) {
      console.log("Won't you be my neighbor")
    } else if (strNum.includes("3")) {
      console.log("Won't you be my neighbor");
    } else if (strNum.includes("2")) {
      console.log("Boop");
    } else if (strNum.includes("1")) {
      console.log("Beep");
    } else {
      console.log(i)
    }
  }
}