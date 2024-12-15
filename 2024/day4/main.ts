export const readInput = async (): Promise<string[][]> => {
    const text = await Deno.readTextFile("input.txt");
    const arr = text.split('\n').map(s => s.split(''));
    return arr;
}

export const findString = (input: string[][]): number => {
    let total = 0
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            http://localhost:8002/sign-in/register/individualhttp://localhost:8002/sign-in/register/individual
        }
    }
    return total;
}



// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const matrix = await readInput();
    const res = findString(matrix)
    console.log(res)
  }