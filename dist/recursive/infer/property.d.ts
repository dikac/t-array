import Recursive from "../recursive";
declare type Property<Value> = keyof Recursive<Value>;
export default Property;
