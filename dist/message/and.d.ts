import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
export default function And<MessageType extends Message<string>[]>(messages: MessageType): Messages<MessageType> & Message<string>;
