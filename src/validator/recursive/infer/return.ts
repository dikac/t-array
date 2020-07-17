import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/infer/return";
import Recursive from "../../../recursive/recursive";

type Return<Tuple extends Recursive<Validator<unknown>>> = {
    [Key in keyof Tuple] : Tuple[Key] extends Validator<unknown>[] ? Return<Tuple[Key]> : InferReturn<Tuple[Key]>
};

export default Return;
