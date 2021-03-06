import Validator from "@dikac/t-validator/validator";
import Type from "@dikac/t-validator/type/infer";
declare type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]: Type<Schema[Key]>;
};
export default Infer;
