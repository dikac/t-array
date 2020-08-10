import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import { Interface as ValidatableListCallbackInterface } from "../validatable/list-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";
import BaseInfer from "@dikac/t-validator/base/infer";
import TypeInfer from "@dikac/t-validator/type/infer";
export declare type Interface<MessageT, ValidatorT extends Validator, ResultT extends Instance[], ValidatableT extends Validatable> = SimpleValidator<BaseInfer<ValidatorT>[], TypeInfer<ValidatorT>[], ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, ResultT, MessageT, ValidatableT>> & ValidatorContainer<ValidatorT> & Message<Function<[ResultT], MessageT>> & Validation<Function<[ResultT], ValidatableT>> & {
    handler: Function<[BaseInfer<ValidatorT>[], ValidatorT], ResultT>;
};
export default class ValueCallback<MessageT = unknown, ValidatorT extends Validator = Validator, ResultT extends Instance[] = Instance[], ValidatableT extends Validatable = Validatable> implements Interface<MessageT, ValidatorT, ResultT, ValidatableT> {
    validator: ValidatorT;
    handler: Function<[BaseInfer<ValidatorT>[], ValidatorT], ResultT>;
    validation: Function<[ResultT], ValidatableT>;
    message: Function<[ResultT], MessageT>;
    constructor(validator: ValidatorT, handler: Function<[BaseInfer<ValidatorT>[], ValidatorT], ResultT>, validation: Function<[ResultT], ValidatableT>, message: Function<[ResultT], MessageT>);
    validate<Argument extends TypeInfer<ValidatorT>[]>(value: Argument): Replace<ValidatableListCallbackInterface<Argument, ValidatorT, ResultT, MessageT, ValidatableT>, true>;
    validate<Argument extends BaseInfer<ValidatorT>[]>(value: Argument): Construct<BaseInfer<ValidatorT>[], Argument, TypeInfer<ValidatorT>[], ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, ResultT, MessageT, ValidatableT>>;
}
