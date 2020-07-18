import MessageInterface from "@dikac/t-message/message";
import AndObject from "../and";

export default function And<Message extends MessageInterface<string>[]>(
    messages : Message,
) : string {

    return AndObject(messages).message
}
