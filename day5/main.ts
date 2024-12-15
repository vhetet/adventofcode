export const readInput = async (): Promise<string> => {
    return await Deno.readTextFile("input.txt");
}

export const formatInput = (input: string): {
    pageOrderingRules: Map<number, Set<number>>,
    updates: number[][]
} => {
    // the key can't be after the numbers in the value
    // so if I want to know what number can't be before 17
    // pageOrderingRules.get(17) will return a set of number that can't be before of 17
    const pageOrderingRules = new Map();
    const updates: number[][] = [];
    const s = input.split('\n');
    let isRule = true;
    s.forEach(a => {
        if(a === '') isRule = false
        else {
            if(isRule) {
                const [f, s] = a.split('|');
                const fn = Number(f), sn = Number(s);
                if(pageOrderingRules.has(fn)) {
                    pageOrderingRules.get(fn).add(sn);
                } else {
                    pageOrderingRules.set(fn, new Set([sn]));
                }
            }
            if(!isRule) {
                updates.push(a.split(',').map(n => Number(n)))
            }
        }

    })
    return { pageOrderingRules, updates };
}

export const isItInOrder  = (update: number[], pageOrderingRules: Map<number, Set<number>>): boolean => {
    // loop from the back and check if any of the numbers ahead are in the set
    const updateSet = new Set(update);
    for(let i = update.length - 1; i > 0; i --) {
        updateSet.delete(update[i]);
        if(pageOrderingRules.get(update[i])) {
            if(pageOrderingRules.get(update[i])?.intersection(updateSet)?.size ?? 1 > 0) {
                return false;
            }
        }
    }
    return true
}

export const getClosest = (intersection: Set<number>, updateSet: Map<number, number>): number => {
    
    return 0;
}

export const fixOrder = (update: number[], pageOrderingRules: Map<number, Set<number>>): number[] => {
    // start from the end, then there is an isue swap
    // this needs to be a while becuase I have to retest everytime I do a swap
    // and I need to update the updateSet
    // what do I do when there are 2 or more options?? I don't know
    // I do need to keep track of the indexes in the set. Can I use a map? yes, I can do the intersection of a map and seet
    // the map keys can be used as a Set, that's neat
    const updateSet = new Map(update.map((u, i) => [u, i])); // that should give me my Map with the indexes
    console.log(update)
    console.log(updateSet)
    let i = update.length - 1;
    while (i > 0) {
        console.log('------')
        console.log('------')
        console.log('------')
        console.log(i, update[i], pageOrderingRules.get(update[i]))
        
        
        if(pageOrderingRules.get(update[i])) {
            
            const intersection = pageOrderingRules.get(update[i])?.intersection(updateSet)
            console.log('--')
            console.log(intersection)
            console.log(updateSet)
            if(intersection?.size ?? 1 > 0) {
                console.log({intersection})
                console.log(update)
                console.log('swap')
                console.log(intersection?.keys().next().value)
                console.log(updateSet.get(intersection?.keys().next()?.value ?? 0))
                // I need to use the intersection val, and get the index for the intersection val
                // console.log(updateSet.get(update[i]))
                // console.log(update[updateSet.get(update[i])])
                const swapKey = updateSet.get(intersection?.keys().next().value ?? 0) ?? 0;
                [update[i], update[swapKey]] = [update[swapKey], update[i]]
                console.log(update)
            } else {
            }
        }
        updateSet.delete(update[i])
        i--;
    }
    console.log(update)
    return update;
}



// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const input = await readInput();
    const { pageOrderingRules, updates } = formatInput(input)
    let total = 0;
    updates.forEach(u => {
        const res = isItInOrder(u, pageOrderingRules);
        if(res) {
            console.log(res, u[Math.floor(u.length / 2)], u.join(', '))
            total += u[Math.floor(u.length / 2)];
        }
    })
    console.log(total)
  }