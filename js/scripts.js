// business logic

function beepBoop(num, name) {
  
  let numNum = parseInt(num);
  let returnArray = [];

  for (let i = 0; i<=numNum; i++) {
    let strNum = i.toString();
    if (i === 1) {
      returnArray.push("Beep");
    } else if (i === 2) {
      returnArray.push("Boop");
    } else if (i === 3) {
      returnArray.push("Won't you be my neighbor, " + name);
    } else if (strNum.includes("3")) {
      returnArray.push("Won't you be my neighbor, " + name);
    } else if (strNum.includes("2")) {
      returnArray.push("Boop");
    } else if (strNum.includes("1")) {
      returnArray.push("Beep");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

function reversed(array) {
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

$("#input-number-form").submit(function(event) {
  event.preventDefault();
  const inputNumber = $("#num-grab").val();
  const inputName = $("#name-grab").val();


});

// Going to need to show output                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           