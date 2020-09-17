export default class Callback {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
    }
    get valid() {
        return this.validation(this.validatables);
    }
    *[Symbol.iterator]() {
        yield* this.validatables;
    }
}
//# sourceMappingURL=callback.js.map