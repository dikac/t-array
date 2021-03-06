import ValidateMap from "./validatable/list/map-partial";
import MapCallback from "./map-callback";
/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function MapPartial(validators, validation, message, stop = false) {
    return new MapCallback(validators, (value, validators) => ValidateMap(value, validators, stop), validation, message);
}
//# sourceMappingURL=map-partial.js.map