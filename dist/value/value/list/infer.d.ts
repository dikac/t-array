import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
declare type Infer<Schema extends Value[]> = {
    [Key in keyof Schema]: InferValue<Schema[Key]>;
};
export default Infer;
