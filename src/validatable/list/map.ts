import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";

type Map<Tuple extends Validator[]> = {
    [Key in keyof Tuple] : InferReturn<Tuple[Key]>
};

export default Map;