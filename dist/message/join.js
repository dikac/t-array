import Reset from "../reset";
export default class Join {
    constructor(messages, delimiter) {
        this.messages = messages;
        this.delimiter = delimiter;
    }
    get message() {
        let messages = Reset(this.messages);
        return messages.map(message => message.message).join(this.delimiter);
    }
}
//# sourceMappingURL=join.js.map