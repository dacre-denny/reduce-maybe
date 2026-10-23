"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
/**
 * Folds an iterable into an accumulator by calling `callback` for each item.
 * Returning `undefined` keeps the current accumulator but does not stop iteration.
 *
 * @typeParam T - The type of each item in the input iterable.
 * @typeParam R - The accumulator type.
 * @param input - The iterable to process in iteration order.
 * @param callback - Receives the current accumulator, item, and zero-based index.
 *   Return a new accumulator, or `undefined` to leave it unchanged for this item.
 * @param initial - The accumulator value used before the first item.
 * @returns The accumulator after all input items have been processed.
 */
function Reduce(input, callback, initial) {
    let i = 0;
    for (const item of input) {
        const acc = callback(initial, item, i);
        if (acc !== undefined) {
            initial = acc;
        }
        i++;
    }
    return initial;
}
exports.Reduce = Reduce;
