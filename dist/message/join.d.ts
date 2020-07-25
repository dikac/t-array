import MessageInterface from "@dikac/t-message/message";
import { List } from "ts-toolbelt";
import Messages from "../list/messages/messages";
export default class Join<Message extends List.Partial<MessageInterface<string>[]>> implements Messages<Message>, MessageInterface<string> {
    messages: Message;
    delimiter: string;
    constructor(messages: Message, delimiter: string);
    get message(): string;
}
