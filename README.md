# reduce-maybe

`Reduce` is a small TypeScript utility for folding an iterable into an accumulated value. Its callback can return `undefined` to keep the current accumulator, so a branch can exit early without returning the accumulator explicitly.

```ts
import { Reduce } from "reduce-maybe";

const total = Reduce(
	[3, -1, 4],
	(sum, value) => {
		if (value < 0) return;
		return sum + value;
	},
	0,
);

console.log(total); // 7
```

Returning `undefined` skips an accumulator update for that item. It does **not** stop the iteration; the callback still runs for each remaining item.

## API

```ts
Reduce<T, R>(
	input: Iterable<T>,
	callback: (accumulator: R, item: T, index: number) => R | undefined,
	initial: R,
): R
```

- Items are visited in iterable order.
- `index` starts at `0` and increments for every item, including items whose callback returns `undefined`.
- A returned value other than `undefined` becomes the accumulator for the next item. Values such as `false`, `0`, and `null` are valid accumulator results.
- An empty iterable returns `initial` without calling the callback.

`input` can be any JavaScript iterable, including arrays, sets, and generator functions.

## Development

```sh
npm install
npm test
npm run build
```
