export const decryptCorrupted = (corruptedData: string): number[][]  => {
    console.log(corruptedData)
    const muls: RegExpMatchArray | null = corruptedData.match(/mul\(\d{1,3},\d{1,3}\)/gm);
    const mulsArr = muls?.slice() || [];
    return mulsArr?.map(x => x.match(/\d{1,3}/gm)?.map(n => Number(n)) || []) || []
}

export const calculateMulSum = (arr: number[][]): number => {
    let total = 0;
    arr.forEach(a => total += a[0] * a[1]);
    console.log(total)
    return total;
}

export const readInput = async (): Promise<string[]> => {
    const text = await Deno.readTextFile("day3_input.txt");
    const arr = text.split('\n');
    console.log(arr)
    return arr;
}

export const descriptData = async () => {
    const data = await readInput();
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        console.log('loop')
        total += calculateMulSum(decryptCorrupted(data[i]))
    }
    console.log('---------')
    console.log('---------')
    console.log('---------')
    console.log('total')
    console.log(total)
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    descriptData();
  }