import Recursive from "../recursive";
declare type Value<Value> = Value extends Recursive<infer As> ? As : never;
export default Value;
