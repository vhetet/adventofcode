import { assertEquals } from "@std/assert";
import { isSafe, isSafe2, readInput } from "./main.ts";

// Deno.test(function isSafeWithZeroIssue() {
//   assertEquals(isSafe([1,2,3,4]), true);
//   assertEquals(isSafe([7, 6, 4, 2, 1]), true)
//   assertEquals(isSafe([1, 2, 7, 8, 9]), false)
//   assertEquals(isSafe([9, 7, 6, 2, 1]), false)
//   assertEquals(isSafe([1, 3, 2, 4, 5]), false)
//   assertEquals(isSafe([8, 6, 4, 4, 1]), false)
//   assertEquals(isSafe([1, 3, 6, 7, 9]), true)
// });

Deno.test(function isSafeWithOneIssue() {
  assertEquals(isSafe2([7, 6, 4, 2, 1]), true)
  assertEquals(isSafe2([1, 2, 7, 8, 9]), false)
  assertEquals(isSafe2([9, 7, 6, 2, 1]), false)
  assertEquals(isSafe2([1, 3, 2, 4, 5]), true)
  assertEquals(isSafe2([8, 6, 4, 4, 1]), true)
  assertEquals(isSafe2([1, 3, 6, 7, 9]), true)
  assertEquals(isSafe([1, 2, 3, 4, 5]), true)
  assertEquals(isSafe([1, 2, 3, 4, 9]), true)
  assertEquals(isSafe([9, 2, 3, 4, 9]), true)
});


  // Deno.test(async function getInput() {
  //   await readInput();
  //   assertEquals(true, true)
  // });

