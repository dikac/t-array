import Validatable from "@dikac/t-validatable/validatable";
import Record from "../../recursive/recursive";
import { O } from "ts-toolbelt";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<V extends Validatable = Validatable, Object extends Record<V> = Record<V>>(record: Object): O.Partial<Object, 'deep'>;
