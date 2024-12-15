import { assertEquals } from "@std/assert/equals";
import { readInput } from "./main.ts";

Deno.test('read input', async () => {
    assertEquals((await readInput()).length, 3305)
})