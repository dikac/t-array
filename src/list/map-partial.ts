/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type MapPartial<Schema extends Partial<unknown[]>, Replace> = {
    [Key in keyof Schema] ? : Replace
};

export default MapPartial;
