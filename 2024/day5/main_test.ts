import { assertEquals } from "@std/assert";
import { fixOrder, formatInput, getClosest, isItInOrder, readInput } from "./main.ts";

const sample = 
`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const pageOrderingRules = new Map([
  [47, new Set([53, 13, 61, 29])],
  [97, new Set([13, 61, 47, 29, 53, 75])],
  [75, new Set([29, 53, 47, 61, 13])],
  [61, new Set([13, 53, 29])],
  [29, new Set([13])],
  [53, new Set([29, 13])],
])

Deno.test('it reads the text file', async () => {
  const input = await readInput();
  assertEquals(input.length, 15948)
});

Deno.test('format data', () => {
  const formattedInput = formatInput(sample);
  console.log(formattedInput.pageOrderingRules.entries())
  // assertEquals(formattedInput.pageOrderingRules, new Map());
  console.log(formattedInput.updates)
  assertEquals(formattedInput.updates, [
    [75,47,61,53,29],
    [97,61,53,29,13],
    [75,29,13],
    [75,97,47,61,53],
    [61,13,29],
    [97,13,75,29,47],
  ]);
});

Deno.test('it is in order', () => {
  assertEquals(isItInOrder([75,47,61,53,29], pageOrderingRules), true);
  assertEquals(isItInOrder([97,61,53,29,13], pageOrderingRules), true);
  assertEquals(isItInOrder([75,29,13], pageOrderingRules), true);
  assertEquals(isItInOrder([75,97,47,61,53], pageOrderingRules), false);
  assertEquals(isItInOrder([61,13,29], pageOrderingRules), false);
  assertEquals(isItInOrder([97,13,75,29,47], pageOrderingRules), false);
});

Deno.test.only('it picks the closest item in the intersection', () => {
  assertEquals(getClosest(new Set([47]), new Map([ [97, 0], [75, 2], [47, 4] ])), 4);
  assertEquals(getClosest(new Set([13, 29]), new Map([ [97, 0], [13, 1], [75, 2], [29, 3], [47, 4] ])), 3);
});

Deno.test('it fix order', () => {
  // assertEquals(fixOrder([75,97,47,61,53], pageOrderingRules), [97, 75,47,61,53]);
  // assertEquals(fixOrder([61,13,29], pageOrderingRules), [61,29,13]);
  assertEquals(fixOrder([97,13,75,29,47], pageOrderingRules), [97,75,47,29,13]);

})
