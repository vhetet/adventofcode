export const readInput = async (): Promise<string> =>   await Deno.readTextFile("input.txt");

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    console.log('day 10')
}