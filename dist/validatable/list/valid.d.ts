import Validatable from "@dikac/t-validatable/validatable";
import MapUnion from "../../map-union";
/**
 * filter all valid {@link Validatable}
 */
export default function Valid<Object extends Validatable[] = Validatable[]>(list: Object): MapUnion<Object>;
