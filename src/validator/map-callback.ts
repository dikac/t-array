import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import ValidatableMap, {Interface as ValidatableMapInterface} from "../validatable/map-callback";
import BaseList from "./base/list/infer";
import TypeList from "./type/list/infer";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Message from "@dikac/t-message/message";
import Replace from "@dikac/t-validatable/boolean/replace";

export type Interface<
    ValidatorsT extends Validator[],
    Validatables extends Instance[],
    MessageT,
    ValidatableT extends Validatable
> =
    SimpleValidator<
        BaseList<ValidatorsT>,
        TypeList<ValidatorsT>,
        ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, BaseList<ValidatorsT>>
    > &
    Validators<ValidatorsT> &
    Message<Function<[Validatables], MessageT>> &
    Validation<Function<[Validatables], ValidatableT>> &
    {map : Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>};

export default class MapCallback<
    ValidatorsT extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable
> implements Interface<ValidatorsT,     Validatables, MessageT, ValidatableT> {

    constructor(
        public validators : ValidatorsT,
        public map : Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>,
        public validation : Function<[Validatables], ValidatableT>,
        public message : Function<[Validatables], MessageT>
    ) {
    }

    validate<Argument extends TypeList<ValidatorsT>>(
        value: Argument
    ) : Replace<ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>, true>

    validate<Argument extends BaseList<ValidatorsT>>(
        value: Argument
    ) : Construct<BaseList<ValidatorsT>, Argument, TypeList<ValidatorsT>, ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>>

    validate<Argument extends BaseList<ValidatorsT>>(
        value: Argument
    ) {

        return new ValidatableMap(value, this.validators, this.map, this.validation, this.message) as
            Replace<ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>, true> |
            Construct<BaseList<ValidatorsT>, Argument, TypeList<ValidatorsT>, ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>>;

    }
}



