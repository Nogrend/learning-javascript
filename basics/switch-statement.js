const printText = (text) => {
  console.log("-> " + text);
};

// const productId = 2;

// switch (productId) {
//   case 1:
//     printText("super duper product ID 1");
//     break;
//   case 2:
//   case 3:
//     printText("it's product ID 2 or 3");
//     printText("its prodct ID " + productId + " btw");
//     break;
//   default:
//     printText("oh no!");
//     break;
// }

const numberArray = [1, 2, 3, 4, "monday"];

const answerLooker = (value) => {
  let message;
  switch (value) {
    case 1:
      message = "number 1";
      break;
    case 2:
      message = "value 2";
      break;
    case 3:
      break;
    case "monday":
      message = "it's a day, NaN";
      break;
    default:
      message = "cannot find it";
      break;
  }
  console.log(message);
  return "\n" + message;
};

const answerArray = numberArray.map((value) => answerLooker(value));
printText(answerArray);
