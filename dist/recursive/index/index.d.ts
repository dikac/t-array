import Recursive from "../recursive";
declare type Index<Value> = keyof Recursive<Value>;
export default Index;
