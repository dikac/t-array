/**
 * similar to {@link globalThis.Record} but with recursive support
 */
declare type Recursive<Value> = (Value | Recursive<Value>)[];
export default Recursive;
