

export const isSafe = (arr: number[]) => {
  console.log(arr)
  let prev = 0;
  let safe = true;
  for(let j = 0; j < arr.length - 1; j++) {
      let diff = arr[j + 1] - arr[j];
      let diffAbs = Math.abs(diff);
      // console.log(diff, prev)
      // if same break
      // if more than 3 diff, break
      if((diffAbs > 0 && diffAbs <= 3) &&
          ((diff > 0 && prev >= 0) || (diff < 0 && prev <= 0))) 
      {
          // console.log('safe')
      }
      else { 
          // console.log('!!! unsafe')
          safe = false;
          break;
      }
      prev = diff
  }
  return safe
}

export const isSafe2 = (arr: number[]) => {
  console.log('--------')
  console.log('--------')
  console.log('--------')
  console.log(arr)
  let prev = 0;
  let safe = true;
  let skip = -1;
  for(let j = 0; j < arr.length - 1; j++) {
      let diff = arr[j + 1] - arr[j];
      let diffAbs = Math.abs(diff);
      console.log(diff, prev)
      // if same break
      // if more than 3 diff, break
      if((diffAbs > 0 && diffAbs <= 3) &&
          ((diff > 0 && prev >= 0) || (diff < 0 && prev <= 0))) 
      {
          // console.log('safe')
          prev = diff
      }
      else { 
        if(skip > -1) {
          safe = false;
          break;
        }
        console.log('---')
        console.log('splice')
        arr.splice(j+1, 1);
        console.log(arr)
        console.log('---')
        j--
        skip = j;
      }
  }
  return safe
}

export const readInput = async (): Promise<number[][]> => {
  const text = await Deno.readTextFile("day2_input.txt");
  const arr = text.split('\n').map(s => s.split(' ').map(n => Number(n)));
  console.log(arr)
  return arr;
}

export const processReports = async () => {
  const reports = await readInput();
  let total = 0;
  reports.forEach(r => {
    if(isSafe2(r)) total++;
  })
  console.log(total)
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  processReports();
}
