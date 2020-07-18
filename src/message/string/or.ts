import MessageInterface from "@dikac/t-message/message";
import OrObject from "../or";

export default function Or<Message extends MessageInterface<string>[]>(
    messages : Message,
) : string {

    return OrObject(messages).message
}
