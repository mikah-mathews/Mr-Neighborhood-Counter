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

function isNumber(input) {
  let convertNum = parseInt(input);
  if (isNaN(convertNum)) {
    return false;
  }
}

// UI Logic
$(document).ready(function() {
  $("#input-number-form").submit(function(event) {
    event.preventDefault();
    const inputNumber = $("#num-grab").val();
    const inputName = $("#name-grab").val();
    console.log(inputName);
    let resultsNormal = beepBoop(inputNumber, inputName);
    let resultsReverse = reversed(beepBoop(inputNumber, inputName));

    if (isNumber(inputNumber) === false) {
      alert("Please put in a number");
    } else {
      if($("#reverse").is(":checked")) {
        resultsReverse.forEach(function(num) {
          $(".num-output-list").append("<li>" + num + "</li>");
          $(".num-output").show();
          $(".num-input").hide();
        })
      } else if($("#reverse").is(":not(:checked")) {
        resultsNormal.forEach(function(num) {
          $(".num-output-list").append("<li>" + num + "</li>");
          $(".num-output").show();
          $(".num-input").hide();
        });
      } else {
        console.log("something went wrong in checkbox");
      }
    }
  });

  $("#again").click(function() {
    $(".num-output").hide();
    $(".num-input").show();
    location.reload(true); 
  });
});
