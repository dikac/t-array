import Validator from "@dikac/t-validator/validator";
import Base from "@dikac/t-validator/base/infer";
declare type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]: Base<Schema[Key]>;
};
export default Infer;
