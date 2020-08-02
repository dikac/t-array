import Message from "@dikac/t-message/message";
import Messages from "./messages/messages";
export default function Or<MessageT extends Message<string>[]>(messages: MessageT): Messages<MessageT> & Message<string>;
