import Function from "@dikac/t-function/function";

type Infer<Values extends Function[]> = {
    [Key in keyof Values]:  Values[Key] extends Function ? ReturnType<Values[Key]> : never
}
export default Infer;
