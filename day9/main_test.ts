import { assertEquals } from "@std/assert/equals";
import { calculateCheckSum, formatDiskMap, readInput, sortBlockArray } from "./main.ts";

const input1 = '12345';
const input2 = '2333133121414131402';

const blockArray1 = [0, -1, -1, 1, 1, 1, -1, -1, -1, -1, 2, 2, 2, 2, 2];
const blockArray2 = [0, 0, -1, -1, -1, 1, 1, 1, -1, -1, -1, 2, -1, -1, -1, 3, 3, 3, -1, 4, 4, -1, 5, 5, 5, 5, -1, 6, 6, 6, 6, -1, 7, 7, 7, -1, 8, 8, 8, 8, 9, 9];

const sortedBlockArray1 = [0, 2, 2, 1, 1, 1, 2, 2, 2, -1, -1, -1, -1, -1, -1]
const sortedBlockArray2 = [0, 0, 9, 9, 8, 1, 1, 1, 8, 8, 8, 2, 7, 7, 7, 3, 3, 3, 6, 4, 4, 6, 5, 5, 5, 5, 6, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

Deno.test('convert diskmap to block string', () => {
    assertEquals(formatDiskMap(input1), blockArray1)
    assertEquals(formatDiskMap(input2), blockArray2)
});

Deno.test('sort blockArray', () => {
    assertEquals(sortBlockArray(blockArray1), sortedBlockArray1)
    assertEquals(sortBlockArray(blockArray2), sortedBlockArray2)
});

Deno.test('calculate checksum', () => {
    assertEquals(calculateCheckSum(sortedBlockArray2), 1928)
});

Deno.test('read input', async () => {
    assertEquals((await readInput()).length, 19999)
})