import Validatable from "@dikac/t-validatable/validatable";
import MapUnion from "../../map-union";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<Object extends Validatable[] = Validatable[]>(list: Object): MapUnion<Object>;
