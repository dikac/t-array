import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";
declare type List<Schema extends Validator[]> = {
    [Key in keyof Schema]: InferReturn<Schema[Key]>;
};
export default List;