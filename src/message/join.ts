import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
import Reset from "../reset";

export default class Join<MessageT extends Message<string>[]> implements Messages<MessageT>, Message <string> {

    constructor(
        public messages : MessageT,
        public delimiter : string
    ) {
    }

    get message() : string {

        let messages = Reset(this.messages);
        return messages.map(message=>message.message).join(this.delimiter);
    }
}
