export const readInput = async (): Promise<string> => {
    return await Deno.readTextFile("input.txt");
}

export const isPossiblytrue = (equation: string): number => {
    console.log(equation)
    const [r, n] = equation.trim().split(': ');
    console.log(r, n)
    const res = Number(r);
    const nums = n.trim().split(' ').map(n => Number(n));
    console.log(res, nums)
    const subTotal = [new Set<number>([nums[0]])];
    for(let i = 1; i < nums.length; i++) {
        subTotal.push(new Set<number>())
        for(const sub of subTotal[i - 1]) {
            subTotal[i].add(sub + nums[i])
            subTotal[i].add(sub * nums[i])
        }
    }
    const t = subTotal.pop();
    return t?.has(res) ? res : 0;
}

export const isPossiblytrue2 = (equation: string): number => {
    console.log(equation)
    const [r, n] = equation.trim().split(': ');
    console.log(r, n)
    const res = Number(r);
    const nums = n.trim().split(' ').map(n => Number(n));
    console.log(res, nums)
    const subTotal = [new Set<number>([nums[0]])];
    for(let i = 1; i < nums.length; i++) {
        subTotal.push(new Set<number>())
        for(const sub of subTotal[i - 1]) {
            subTotal[i].add(sub + nums[i])
            subTotal[i].add(sub * nums[i])
            subTotal[i].add(Number(`${sub}${nums[i]}`))
        }
    }
    const t = subTotal.pop();
    return t?.has(res) ? res : 0;
}


// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const input = await readInput();
    // console.log(input);
    const equations = input.split('\n');
    // console.log(equations)
    let total = 0;
    equations.forEach(e => {
        // console.log(e)
        total += isPossiblytrue2(e);
    })
    console.log(total)
  }