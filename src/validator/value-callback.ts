import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/return/return";
import Value from "@dikac/t-value/value";

export default class ValueCallback<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    Result extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[],
    ValidatableT extends Validatable  = Validatable
> implements Validator<
    BaseT,
    ValueT,
    ValidatableValue<BaseT, ValidatorsT, Result, MessageT, ValidatableT>
> {

    constructor(
        public validators : ValidatorsT,
        public handler : Function<[BaseT, ValidatorsT], Result>,
        public validation : Function<[Result], ValidatableT>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(value: Argument) : Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, Result, MessageT, ValidatableT>> {

        return <Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, Result, MessageT, ValidatableT>>>
            new ValidatableValue(value, this.validators, this.handler, this.validation, this.message);
    }
}



