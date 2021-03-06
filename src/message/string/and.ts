import Message from "@dikac/t-message/message";
import AndObject from "../and";

export default function And<MessageT extends Message<string>[]>(
    messages : MessageT,
) : string {

    return AndObject(messages).message
}
