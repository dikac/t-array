import MessageInterface from "@dikac/t-message/message";
import {List} from "ts-toolbelt";
import Messages from "../list/messages/messages";
import Reset from "../reset";

export default class Join<Message extends List.Partial<MessageInterface<string>[]>> implements Messages<Message>, MessageInterface <string> {

    constructor(
        public messages : Message,
        public delimiter : string
    ) {
    }

    get message() : string {

        let messages = Reset(this.messages);
        return messages.map(message=>message.message).join(this.delimiter);
    }
}
