import Validatables from "../validatables";
declare type Infer<Instance> = Instance extends Validatables<infer Validatable> ? Validatable : never;
export default Infer;
