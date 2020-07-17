import Recursive from "../recursive";

type Property<Value> = keyof Recursive<Value>;

export default Property;
