import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import ListCallback from "./list-callback";
import BaseInfer from "@dikac/t-validator/base/infer";
import List from "./list";

/**
 * function factory for {@link ListCallback}
 *
 * type return has better handling by typescript
 */
export default function  ListCallbackFunction<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    Result extends Instance[] = Instance[],
    ValidatableT extends Validatable  = Validatable
>  (
     validator : ValidatorT,
     map : (value:BaseInfer<ValidatorT>[], validator:ValidatorT)=>Result,
     validation : (results:Result)=>ValidatableT,
     message : (results:Result)=>MessageT
) : List<MessageT, ValidatorT, Result, ValidatableT> {

    return new ListCallback(validator, map, validation, message);
}




