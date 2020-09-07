import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
export default class Join<MessageType extends Message<string>[]> implements Messages<MessageType>, Message<string> {
    messages: MessageType;
    delimiter: string;
    constructor(messages: MessageType, delimiter: string);
    get message(): string;
}
