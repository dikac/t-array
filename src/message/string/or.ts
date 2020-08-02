import Message from "@dikac/t-message/message";
import OrObject from "../or";

export default function Or<MessageT extends Message<string>[]>(
    messages : MessageT,
) : string {

    return OrObject(messages).message
}
