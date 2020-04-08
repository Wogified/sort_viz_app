import { swapArr } from './startingDataFunctions';
import { AnimationStep } from './animations';

function bubbleSort(arr) {
  const temp = [...arr];
  const output = [];
  // variable for determining whether or not any array values have been swapped per iteration
  let swapped = false;

  // for loop to interate through the length of the array
  for (let i = 0; i < arr.length; i += 1) {
    //  nested for loop to check each element in the array against the rest of the array

    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      // if the array elem at the current position is greater
      // than the value at the next elem, then swap
      const tempStore = [];
      const animateStep = new AnimationStep(j, j + 1);

      if (temp[j].value > temp[j + 1].value) {
        animateStep.compare = true;
        tempStore.push({ ...animateStep });

        swapArr(temp, j, j + 1);

        swapped = true;
        animateStep.swap = true;
        tempStore.push({ ...animateStep });
      } else {
        animateStep.compare = false;
        animateStep.delayMult = 2;
        tempStore.push({ ...animateStep });
      }

      output.push(tempStore);
    }
    if (!swapped) {
      break;
    } else swapped = false;
  }

  return output;
}

export default bubbleSort;
