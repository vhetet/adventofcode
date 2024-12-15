import { assertEquals } from "@std/assert";
import { isPossiblytrue, isPossiblytrue2 } from "./main.ts";



Deno.test('check if valid', () => {
    assertEquals(isPossiblytrue("190: 10 19"), 190);
    assertEquals(isPossiblytrue("3267: 81 40 27"), 3267);
    assertEquals(isPossiblytrue("83: 17 5"), 0);
    assertEquals(isPossiblytrue("156: 15 6"), 0);
    assertEquals(isPossiblytrue("7290: 6 8 6 15"), 0);
    assertEquals(isPossiblytrue("161011: 16 10 13"), 0);
    assertEquals(isPossiblytrue("192: 17 8 14"), 0);
    assertEquals(isPossiblytrue("21037: 9 7 18 13"), 0);
    assertEquals(isPossiblytrue("292: 11 6 16 20"), 292);
    assertEquals(isPossiblytrue("292: 11 6 16 20"), 293);
})

Deno.test('check if valid for part 2', () => {
    assertEquals(isPossiblytrue2("190: 10 19"), 190);
    assertEquals(isPossiblytrue2("3267: 81 40 27"), 3267);
    assertEquals(isPossiblytrue2("83: 17 5"), 0);
    assertEquals(isPossiblytrue2("156: 15 6"), 156);
    assertEquals(isPossiblytrue2("7290: 6 8 6 15"), 7290);
    assertEquals(isPossiblytrue2("161011: 16 10 13"), 0);
    assertEquals(isPossiblytrue2("192: 17 8 14"), 192);
    assertEquals(isPossiblytrue2("21037: 9 7 18 13"), 0);
    assertEquals(isPossiblytrue2("292: 11 6 16 20"), 292);
})