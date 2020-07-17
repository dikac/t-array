/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type Recursive<Value> = (Value|Recursive<Value>)[];


// type Recursive<Value extends unknown[]> = {
//     [K in keyof Value] : Value[K] extends Recursive<Value> ? Recursive<Value> : Value[K];
// };
export default Recursive;
