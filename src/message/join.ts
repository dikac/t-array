import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
import Reset from "../reset";

export default class Join<MessageType extends Message<string>[]> implements Messages<MessageType>, Message <string> {

    constructor(
        public messages : MessageType,
        public delimiter : string
    ) {
    }

    get message() : string {

        let messages = Reset(this.messages);
        return messages.map(message=>message.message).join(this.delimiter);
    }
}
