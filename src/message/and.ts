import MessageInterface from "@dikac/t-message/message";
import Join from "./join";
import {List} from "ts-toolbelt";
import Messages from "../list/messages/messages";

export default function And<Message extends List.Partial<MessageInterface<string>[]>>(
    messages : Message,
) : Messages<Message> & MessageInterface <string>{

    return new Join(messages, ' and ')
}
