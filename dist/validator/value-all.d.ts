import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./return/list/infer";
import ValidatableValue from "../validatable/value-callback";
import Construct from "@dikac/t-validator/return/return";
export default class ValueAll<BaseT = unknown, ValueT extends BaseT = BaseT, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], ReturnT extends Validatable = Validatable, MessageT = unknown> implements Validator<BaseT, ValueT, ValidatableValue<BaseT, ValidatorsT, ListReturn<ValidatorsT>, MessageT, ReturnT>> {
    validators: ValidatorsT;
    validation: Function<[ListReturn<ValidatorsT>], ReturnT>;
    message: Function<[ListReturn<ValidatorsT>], MessageT>;
    constructor(validators: ValidatorsT, validation: Function<[ListReturn<ValidatorsT>], ReturnT>, message: Function<[ListReturn<ValidatorsT>], MessageT>);
    validate<Argument extends BaseT>(value: Argument): Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, ListReturn<ValidatorsT>, MessageT, ReturnT>>;
}
