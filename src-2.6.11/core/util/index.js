/* @flow */

export * from 'shared/util'
export * from './lang'
export * from './env'
export * from './options'
export * from './debug'
export * from './props'
export * from './error'
export * from './next-tick'
export { defineReactive } from '../observer/index'

// export { def } from './lang'
/**
 * alias for Object.defineProperty
 * @param  {object}  obj
 * @param  {string}  key
 * @param  {any}     val
 * @param  {boolean} enumerable
 */
