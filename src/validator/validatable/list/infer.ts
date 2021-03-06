import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer";

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema] : InferReturn<Schema[Key]>
};

export default Infer;
