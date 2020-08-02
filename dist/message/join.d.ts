import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
export default class Join<MessageT extends Message<string>[]> implements Messages<MessageT>, Message<string> {
    messages: MessageT;
    delimiter: string;
    constructor(messages: MessageT, delimiter: string);
    get message(): string;
}
