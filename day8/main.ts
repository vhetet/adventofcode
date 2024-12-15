export const readInput = async (): Promise<string> => {
    // console.log(Deno.cwd())
    return await Deno.readTextFile('input.txt');
}

export const formatInput = (input: string): string[][] => {
    const arr = input.split('\n').map(s => s.trim().split(''));
    return arr;
}

export const findAntennas = (cityMap: string[][]): Map<string, number[][]> => {
    const antennas = new Map<string, number[][]>();
    for(let i = 0; i < cityMap.length; i++) {
        for(let j = 0; j < cityMap[i].length; j++) {
            const c = cityMap[i][j];
            if (c !== '.') {
                if (antennas.has(c)) {
                    antennas.get(c)?.push([i, j]);
                } else {
                    antennas.set(c, [[i, j]])
                }
            }
        }
    }
    return antennas;
}

export const generateAntiNode = (antenna1: number[], antenna2: number[], maxX: number, maxY: number): Set<string> =>  {
    const antiNodeList = new Set<string>();
    const [x1, y1] = antenna1;
    const [x2, y2] = antenna2;
    const newX1 = x2 + (x2 - x1), newY1 = y2 + (y2 - y1); 
    const newX2 = x1 - (x2 - x1), newY2 = y1 - (y2 - y1); 
    if(newX1 >= 0 && newX1 < maxX && newY1 >= 0 && newY1 < maxY) {
        antiNodeList.add([newX1, newY1].join(','));
    }
    if(newX2 >= 0 && newX2 < maxX && newY2 >= 0 && newY2 < maxY) {
        antiNodeList.add([newX2, newY2].join(','));
    }
    return antiNodeList;
}

export const generateAntiNodeWithResonance = (antenna1: number[], antenna2: number[], maxX: number, maxY: number): Set<string> =>  {
    const antiNodeList = new Set<string>();
    const [x1, y1] = antenna1;
    const [x2, y2] = antenna2;
    const xDist = (x2 - x1)
    const yDist = (y2 - y1)
    let newX1 = x2 + xDist, newY1 = y2 + yDist; 
    let newX2 = x1 - xDist, newY2 = y1 - yDist; 
    console.log('----')
    while (newX1 >= 0 && newX1 < maxX && newY1 >= 0 && newY1 < maxY) {
        console.log('a: ', [newX1, newY1])
        antiNodeList.add([newX1, newY1].join(','));
        newX1 += xDist;
        newY1 += yDist;
    }
    while (newX2 >= 0 && newX2 < maxX && newY2 >= 0 && newY2 < maxY) {
        console.log('b: ', [newX2, newY2])
        antiNodeList.add([newX2, newY2].join(','));
        newX2 -= xDist;
        newY2 -= yDist;
    }
    if(antiNodeList.size > 1) {
        antiNodeList.add(antenna1.join(','))
        antiNodeList.add(antenna2.join(','))
    }
    console.log(antiNodeList)
    return antiNodeList;
}

export const generateAntiNodesList = (antennas: number[][], maxX: number, maxY: number): Set<string> => {
    const antiNodeList = new Set<string>();
    for(let i = 0; i < antennas.length; i++) {
        for(let j = i + 1; j < antennas.length; j++) {
            // antiNodeList.add()
            const list = generateAntiNode(antennas[i], antennas[j], maxX, maxY);
            list.forEach(l => {
                antiNodeList.add(l)
            })
        }
    }
    return antiNodeList;
}

export const generateAntiNodesListWithResonance = (antennas: number[][], maxX: number, maxY: number): Set<string> => {
    const antiNodeList = new Set<string>();
    for(let i = 0; i < antennas.length; i++) {
        for(let j = i + 1; j < antennas.length; j++) {
            // antiNodeList.add()
            const list = generateAntiNodeWithResonance(antennas[i], antennas[j], maxX, maxY);
            list.forEach(l => {
                // console.log({l})
                antiNodeList.add(l)
            })
        }
    }
    console.log(antiNodeList)
    return antiNodeList;
}




// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const input = await readInput();
    const formattedInput = formatInput(input);
    // console.log(formattedInput)
    const antennas = findAntennas(formattedInput);
    // console.log(antennas)
    const antiNodes = new Set<string>();
    antennas.forEach((val, key) => {
        // if(key === 'U') {
            console.log({key})
            console.log(val)
            const an = generateAntiNodesListWithResonance(val, formattedInput.length, formattedInput[0].length)
            console.log(an)
            an.forEach(s => {
                antiNodes.add(s)
            })
        // }
    })
    // console.log(antiNodes)
    console.log(antiNodes.size)
    console.log('day 8')
}