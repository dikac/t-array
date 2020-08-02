import Message from "@dikac/t-message/message";
import Join from "./join";
import Messages from "./messages/messages";

export default function And<MessageT extends Message<string>[]>(
    messages : MessageT,
) : Messages<MessageT> & Message <string>{

    return new Join(messages, ' and ')
}
