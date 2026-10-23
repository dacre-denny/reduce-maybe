import { Reduce } from "../src";

describe("Reduce", () => {
  it("folds values in order using the latest accumulator", () => {
    const result = Reduce([1, 2, 3], (acc, item) => acc + item, 0);

    expect(result).toBe(6);
  });

  it("passes each item and its zero-based index to the callback", () => {
    const visits: Array<[string, number]> = [];
    const result = Reduce(
      ["a", "b", "c"],
      (acc, item, index) => {
        visits.push([item, index]);
        return acc + `${index}:${item}`;
      },
      "",
    );

    expect(visits).toEqual([
      ["a", 0],
      ["b", 1],
      ["c", 2],
    ]);
    expect(result).toBe("0:a1:b2:c");
  });

  it("keeps the current accumulator when the callback returns undefined", () => {
    const accumulators: number[] = [];
    const result = Reduce(
      [1, 2, 3],
      (acc, item) => {
        accumulators.push(acc);
        return item === 2 ? undefined : acc + item;
      },
      0,
    );

    expect(accumulators).toEqual([0, 1, 1]);
    expect(result).toBe(4);
  });

  it("accepts any iterable", () => {
    function* values() {
      yield 2;
      yield 3;
      yield 5;
    }

    const result = Reduce(values(), (acc, item) => acc * item, 1);

    expect(result).toBe(30);
  });

  it("returns the initial accumulator without calling back for empty input", () => {
    const initial = { total: 0 };
    let calls = 0;

    const result = Reduce<number, typeof initial>(
      [],
      (acc) => {
        calls++;
        return acc;
      },
      initial,
    );

    expect(result).toBe(initial);
    expect(calls).toBe(0);
  });
});
