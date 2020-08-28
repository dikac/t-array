import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import BaseList from "./base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Interface as MapCallbackInterface } from "./map-callback";
/**
 * function factory for {@link MapCallback}
 *
 * type return has better handling by typescript
 */
export default function MapCallbackFunction<ValidatorsT extends Validator[] = Validator[], Validatables extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable>(validators: ValidatorsT, map: (value: BaseList<ValidatorsT>, validators: ValidatorsT) => Validatables, validation: (result: Validatables) => ValidatableT, message: (result: Validatables) => MessageT): MapCallbackInterface<ValidatorsT, Validatables, MessageT, ValidatableT>;
