/**
 * Typed array helper class.
 */
export class Arr<T = any> extends Array<T> {
    /**
     * Sorts array of objects by key and direction.
     * @param {keyof T & string} key
     * @param {'asc' | 'desc'} [direction]
     * @returns {T[]}
     */
    multisort(key: keyof T & string, direction?: 'asc' | 'desc'): T[];

    /**
     * Filters array of objects by key, value(s), and optional operator.
     * @param {keyof T & string} key
     * @param {string | string[]} find
     * @param {boolean | string} [operator]
     * @returns {T[]}
     */
    multifilter(key: keyof T & string, find: string | string[], operator?: boolean | string): T[];

    /**
     * Maps array of objects to array of values or objects by key(s).
     * @param {keyof T & string | Array<keyof T & string>} key
     * @returns {any[]}
     */
    multikey(key: keyof T & string | Array<keyof T & string>): any[];

    /**
     * Returns intersection with another array.
     * @param {any[]} array
     * @param {boolean} [multi]
     * @returns {T[]}
     */
    intersect(array: any[], multi?: boolean): T[];

    /**
     * Returns difference with another array.
     * @param {any[]} array
     * @param {boolean} [total]
     * @returns {T[]}
     */
    diff(array: any[], total?: boolean): T[];

    /**
     * Returns unique values.
     */
    get unique(): T[];

    /**
     * Pushes value if not already present.
     * @param {T} newValue
     * @returns {number}
     */
    pushIfNotExists(newValue: T): number;

    /**
     * Pushes multiple values.
     * @param {T[]} newValues
     * @returns {number}
     */
    pushMultiple(newValues: T[]): number;

    /**
     * Pushes multiple values if not already present.
     * @param {T[]} newValues
     * @returns {number}
     */
    pushMultipleIfNotExists(newValues: T[]): number;

    /**
     * Returns max value (number) or null.
     */
    get max(): number | null;

    /**
     * Returns min value (number) or null.
     */
    get min(): number | null;

    /**
     * Returns a random value or null.
     */
    get random(): T | null;

    /**
     * Returns sum of values (number) or null.
     */
    get summ(): number | null;

    /**
     * Returns average of values (number) or null.
     */
    get average(): number | null;

    /**
     * Gets value by key (dot notation supported).
     * @param {string} key
     * @param {any} [defaultValue]
     * @returns {any}
     */
    getByKey(key: string, defaultValue?: any): any;

    /**
     * Returns first value or null.
     */
    get first(): T | null;

    /**
     * Returns last value or null.
     */
    get last(): T | null;

    /**
     * Updates items in array by keys.
     * @param {T[]} newValues
     * @param {Array<keyof T & string>} keys
     * @returns {T[]}
     */
    update(newValues: T[], keys: Array<keyof T & string>): T[];
  }

  export {
    Arr,
    default as default,
    multisort,
    multifilter,
    multikey,
    intersect,
    min,
    max,
    diff,
    unique,
    summ,
    average,
    random,
    getByKey,
    first,
    last,
    update,
  } from './helpers.js';
