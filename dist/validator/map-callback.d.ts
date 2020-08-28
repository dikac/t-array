import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Validators from "./validators/validators";
import { Interface as ValidatableMapInterface } from "../validatable/map-callback";
import BaseList from "./base/list/infer";
import TypeList from "./type/list/infer";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Message from "@dikac/t-message/message";
import Replace from "@dikac/t-validatable/boolean/replace";
/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
export declare type Interface<ValidatorsT extends Validator[], Validatables extends Instance[], MessageT, ValidatableT extends Validatable> = SimpleValidator<BaseList<ValidatorsT>, TypeList<ValidatorsT>, ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, BaseList<ValidatorsT>>> & Validators<ValidatorsT> & Message<(results: Validatables) => MessageT> & Validation<(results: Validatables) => ValidatableT> & {
    map: (value: BaseList<ValidatorsT>, validators: ValidatorsT) => Validatables;
};
/**
 * implementation of {@link Interface}
 */
export default class MapCallback<ValidatorsT extends Validator[] = Validator[], Validatables extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements Interface<ValidatorsT, Validatables, MessageT, ValidatableT> {
    validators: ValidatorsT;
    map: (value: BaseList<ValidatorsT>, validators: ValidatorsT) => Validatables;
    validation: (result: Validatables) => ValidatableT;
    message: (result: Validatables) => MessageT;
    /**
     * @param validators
     * list of {@link Validator}
     *
     * @param map
     * process list of value and {@param validators} to list of {@link Instance}
     *
     * @param validation
     * process result of {@param map} to single {@link Validatable}
     *
     * @param message
     * process result of {@param map} to single {@link Message}
     */
    constructor(validators: ValidatorsT, map: (value: BaseList<ValidatorsT>, validators: ValidatorsT) => Validatables, validation: (result: Validatables) => ValidatableT, message: (result: Validatables) => MessageT);
    validate<Argument extends TypeList<ValidatorsT>>(value: Argument): Replace<ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>, true>;
    validate<Argument extends BaseList<ValidatorsT>>(value: Argument): Construct<BaseList<ValidatorsT>, Argument, TypeList<ValidatorsT>, ValidatableMapInterface<ValidatorsT, Validatables, MessageT, ValidatableT, Argument>>;
}
