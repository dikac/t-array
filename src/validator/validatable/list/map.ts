import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";

type Map<Schema extends Validator[]> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Map;




