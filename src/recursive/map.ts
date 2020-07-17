/**
 * Convert recursive {@template Container} Value type to {@template Replace} type
 *
 * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
 */
type Map<Replace, Value, Container extends unknown[]> = {
    [K in keyof Container]: Container[K] extends Container ? Map<Replace, Value, Container[K]>  : Replace
}

export default Map;
