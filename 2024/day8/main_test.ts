import { assertEquals } from "@std/assert/equals";
import { findAntennas, formatInput, generateAntiNode, generateAntiNodesList, generateAntiNodesListWithResonance, generateAntiNodeWithResonance, readInput } from "./main.ts";

Deno.test('read input', async () => {
    // console.log(Deno.cwd())
    // console.log(Deno.cwd() + '/day8')
    // Deno.chdir(Deno.cwd() + '/day8')
    // console.log(Deno.cwd())
    assertEquals((await readInput()).length, 2549)
})

Deno.test('format the input in an array of array of string', () => {
    const input = 
    `..........
    ...#......
    #.........
    ....a.....
    ........a.
    .....a....
    ..#.......
    ......A...
    ..........
    ..........`;
    const expectedOutcome = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '#', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', 'a', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', 'a', '.'],
        ['.', '.', '.', '.', '.', 'a', '.', '.', '.', '.'],
        ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', 'A', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ]
    assertEquals(formatInput(input), expectedOutcome);
});

Deno.test('finds the antennas', () => {
    const cityMap1 = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '#', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', 'a', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', 'a', '.'],
        ['.', '.', '.', '.', '.', 'a', '.', '.', '.', '.'],
        ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', 'A', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    const expectedOutcome1 = new Map([
        ['#', [[1,3], [2,0], [6,2]]],
        ['a', [[3,4], [4,8], [5,5]]],
        ['A', [[7,6]]],
    ]);
    const cityMap2 = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', 'A', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ];
    const expectedOutcome2 = new Map([
        ['0', [[1,8], [2,5],[3,7], [4,4]]],
        ['A', [[5,6],[8,8], [9,9]]],
    ]);
    assertEquals(findAntennas(cityMap1), expectedOutcome1);
    assertEquals(findAntennas(cityMap2), expectedOutcome2);
        
        
})

Deno.test('generate antiNode pair', () => {
    assertEquals(generateAntiNode([1,1], [2,2], 7, 8), new Set([`0,0`, `3,3`]))
    assertEquals(generateAntiNode([1,3], [2,0], 7, 8), new Set([`0,6`]))
    assertEquals(generateAntiNode([3,4], [5,6], 7, 8), new Set([`1,2`]))
    assertEquals(generateAntiNode([4,7], [5,6], 7, 8), new Set([`6,5`]))
    assertEquals(generateAntiNode([0,0], [5,6], 7, 8), new Set())
})

Deno.test('generate antiNode with resonance', () => {
    assertEquals(generateAntiNodeWithResonance([1,1], [2,2], 7, 8), new Set([`0,0`, `3,3`, `4,4`, `5,5`, `6,6`]))
    assertEquals(generateAntiNodeWithResonance([1,3], [2,0], 7, 8), new Set([`0,6`]))
    assertEquals(generateAntiNodeWithResonance([3,4], [5,6], 7, 8), new Set([`1,2`]))
    assertEquals(generateAntiNodeWithResonance([4,7], [5,6], 7, 8), new Set([`6,5`]))
    assertEquals(generateAntiNodeWithResonance([0,0], [5,6], 7, 8), new Set())
})

Deno.test('calculate antiNode count', () => {
const input = [
['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.'],
['.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.'],
['.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', 'A', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
assertEquals(generateAntiNodesList([[1,8], [2,5],[3,7], [4,4]],12,12).size, 10)
assertEquals(generateAntiNodesList([[5,6],[8,8], [9,9]],12,12).size, 5)
console.log(generateAntiNodesList([[1,8], [2,5],[3,7], [4,4]],12,12).union(generateAntiNodesList([[5,6],[8,8], [9,9]],11,11)))
});

Deno.test('calculate antiNodes count with resonance', () => {
    const input =`##....#....#
.#.#....0...
..#.#0....#.
..##...0....
....0....#..
.#...#A....#
...#..#.....
#....#.#....
..#.....A...
....#....A..
.#........#.
...#......##`;
    const formattedInput = input.replaceAll('#', '.').split('\n').map(x => x.split(''))
    const antennas = findAntennas(formattedInput);
    const antiNodes = new Set<string>();
    antennas.forEach((val) => {
        const an = generateAntiNodesListWithResonance(val, formattedInput.length, formattedInput[0].length)
        an.forEach(s => {
            antiNodes.add(s)
        })
    })
    console.log(antiNodes)
    console.log(antiNodes.size)
});