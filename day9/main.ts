export const readInput = async (): Promise<string> => {
    return await Deno.readTextFile("input.txt");
}

// steps
// 1. convert string to proper format
// 2. rearrange the string
// 3. calculate checksum
export const formatDiskMap = (diskMap: string): number[] => {
    const blockArray: number[] = []
    diskMap.split('').forEach((s, i) => {
        if(i % 2 === 0) {
            const arr: number[] = Array(Number(s)).fill(i / 2)
            blockArray.push(...arr)
        } else {
            const arr: number[] = Array(Number(s)).fill(-1)
            blockArray.push(...arr)
        }
    })
    return blockArray;
}

export const sortBlockArray = (blockArray: number[]): number[] => {
    let start = 0, end = blockArray.length - 1;
    while(start < end) {
        if(blockArray[start] !== -1) {
            start ++;
        } else {
            while(end > start && blockArray[end] === -1) {
                end --;
            }
            [blockArray[start], blockArray[end]] = [blockArray[end], blockArray[start]]
            start ++;
            end --;
        }
    }
    return blockArray;
}

export const sortFileArray = (blockArray: number[]): number[] => {
    // I could store the empty spaces in a map, I could just search for the size I need and it would return the first index I can use
    // the issue with that is I need to find the first index that has the space I need or more, and then I need to move past that index
    // maybe instead of a map it's just an array of the indexes fwith free space and the amount of free space it has
    // formatDiskMap would return 2 things, the unsortedBockArray and array of indexes for the free spot
    // I could probably build that array of indexes as I go
    // could I work with the input instead. And then create the block array??
    // this sounds promising
    return []
}

export const calculateCheckSum = (blockArray: number[]): number => {
    let total = 0;
    blockArray.forEach((n, i) => {
        if(n > -1) {
            total += i * n;
        }
    })
    return total;
}


// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    console.log('day9')
    const input = await readInput();
    const diskMap = formatDiskMap(input);
    const blockArray = sortBlockArray(diskMap);
    const checksum = calculateCheckSum(blockArray);
    console.log({checksum});
  }