import Callable from "@dikac/t-function/callable";
declare type Infer<Values extends Callable[]> = {
    [Key in keyof Values]: Values[Key] extends Callable ? Parameters<Values[Key]> : never;
};
export default Infer;
