/**
 * Object helper
 * @type {import('./types.d.ts').Arr}
 */
export class Arr extends Array<any> {
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    /**
     * Sort a multiarray.
     * @param {string} key
     * @param {("asc"|"desc")=} direction
     * @returns {any[]}
     */
    multisort(key: string, direction?: ("asc" | "desc") | undefined): any[];
    /**
     * Filter a multi array.
     * @param {string}  key
     * @param {string|string[]}  find
     * @param {(boolean|string)=} operator
     * @returns {any[]}
     */
    multifilter(key: string, find: string | string[], operator?: (boolean | string) | undefined): any[];
    /**
     * Only get some keys of a multi array.
     * @param {string|string[]} key
     * @returns {any[]}
     */
    multikey(key: string | string[]): any[];
    /**
     * Get the intersection of arrays.
     * @param {any[]}  array
     * @param {boolean=} multi
     * @returns {any[]}
     */
    intersect(array: any[], multi?: boolean | undefined): any[];
    /**
     * Get the difference of arrays.
     * @param {any[]}  array
     * @param {boolean=} total
     * @returns {any[]}
     */
    diff(array: any[], total?: boolean | undefined): any[];
    /**
     * Get the unique values of an array.
     * @returns {any[]}
     */
    get unique(): any[];
    /**
     * Only add the value if the value isnt in the array.
     * @param {any} newValue
     * @returns {number}
     */
    pushIfNotExists(newValue: any): number;
    /**
     * Add multiple values to an array.
     * @param {any[]} newValues
     * @returns {number}
     */
    pushMultiple(newValues: any[]): number;
    /**
     * Add multiple values to an array.
     * Only add the value if the value isnt in the array.
     * @param {any[]} newValues
     * @returns {number}
     */
    pushMultipleIfNotExists(newValues: any[]): number;
    /**
     * The largest of the given numbers.
     * If at least one of the arguments cannot be converted to a number,
     * NaN is returned.
     * @returns {number}
     */
    get max(): number;
    /**
     * The smallest of the given numbers.
     * If at least one of the arguments cannot be converted to a number,
     * NaN is returned.
     * @returns {number}
     */
    get min(): number;
    /**
     * Get a random value of an array.
     * @returns {any}
     */
    get random(): any;
    /**
     * The summ of all values.
     * @returns {number}
     */
    get summ(): number;
    /**
     * Get the average of all values.
     * @returns {number}
     */
    get average(): number;
    /**
     * Javascript implementation of Arr::get
     * @param {string} key
     * @param {object=} defaultValue
     * @returns {any|undefined}
     */
    getByKey(key: string, defaultValue?: object | undefined): any | undefined;
    /**
     * Javascript implementation of Arr::first
     * @returns {any|undefined}
     */
    get first(): any | undefined;
    /**
     * Javascript implementation of Arr::last
     * @returns {any|undefined}
     */
    get last(): any | undefined;
    /**
     * Update multiple items in an array
     * @param {any[]} newValues
     * @param {string[]} keys
     * @returns {any[]}
     */
    update(newValues: any[], keys: string[]): any[];
}
import multisort from './modules/multisort.js';
import multifilter from './modules/multifilter.js';
import multikey from './modules/multikey.js';
import intersect from './modules/intersect.js';
import min from './modules/min.js';
import max from './modules/max.js';
import diff from './modules/diff.js';
import unique from './modules/unique.js';
import summ from './modules/summ.js';
import average from './modules/average.js';
import random from './modules/random.js';
import getByKey from './modules/getByKey.js';
import first from './modules/first.js';
import last from './modules/last.js';
import update from './modules/update.js';
export { multisort, multifilter, multikey, intersect, min, max, diff, unique, summ, average, random, getByKey, first, last, update };
