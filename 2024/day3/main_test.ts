import { assertEquals } from "@std/assert";
import { decryptCorrupted, calculateMulSum, readInput } from "./main.ts";

Deno.test(function descriptData() {
  assertEquals(decryptCorrupted('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'), [[2, 4], [5, 5], [11, 8], [8, 5]])
});

Deno.test(function calculateSum() {
  assertEquals(calculateMulSum([[2, 4], [5, 5], [11, 8], [8, 5]]), 161)
});

Deno.test(async function readData() {
    readInput();
    assertEquals(true, true)
});