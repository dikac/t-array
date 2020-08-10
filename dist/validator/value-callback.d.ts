import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import { Interface as ValidatableValueInterface } from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validators from "./validators/validators";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";
export interface Interface<BaseT, ValueT extends BaseT, MessageT, ValidatorsT extends Validator<BaseT, ValueT>[], Result extends Instance[], ValidatableT extends Validatable> extends SimpleValidator<BaseT, ValueT, ValidatableValueInterface<BaseT, ValidatorsT, Result, MessageT, ValidatableT>>, Message<Function<[Result], MessageT>>, Validators<ValidatorsT>, Validation<Function<[Result], ValidatableT>> {
    map: Function<[BaseT, ValidatorsT], Result>;
}
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], Result extends Instance[] = Instance[], ValidatableT extends Validatable = Validatable> implements Interface<BaseT, ValueT, MessageT, ValidatorsT, Result, ValidatableT> {
    validators: ValidatorsT;
    map: Function<[BaseT, ValidatorsT], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validators: ValidatorsT, map: Function<[BaseT, ValidatorsT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends ValueT>(value: Argument): Replace<ValidatableValueInterface<Argument, ValidatorsT, Result, MessageT, ValidatableT>, true>;
    validate<Argument extends BaseT>(value: Argument): Construct<BaseT, Argument, ValueT, ValidatableValueInterface<Argument, ValidatorsT, Result, MessageT, ValidatableT>>;
}
