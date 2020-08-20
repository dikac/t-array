import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Interface as ListCallbackInterface } from "./list-callback";
import BaseInfer from "@dikac/t-validator/base/infer";
/**
 * function factory for {@link ListCallback}
 *
 * type return has better handling by typescript
 */
export default function ListCallbackFunction<MessageT = unknown, ValidatorT extends Validator = Validator, Result extends Instance[] = Instance[], ValidatableT extends Validatable = Validatable>(validator: ValidatorT, map: Function<[BaseInfer<ValidatorT>[], ValidatorT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>): ListCallbackInterface<MessageT, ValidatorT, Result, ValidatableT>;
