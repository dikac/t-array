import Function from "@dikac/t-function/function";
declare type Infer<Values extends Function[]> = {
    [Key in keyof Values]: Values[Key] extends Function ? Parameters<Values[Key]> : never;
};
export default Infer;
