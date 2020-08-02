import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import EnsureMessage from "@dikac/t-message/ensure/message";
import ValueMessage from "@dikac/t-message/message/value";

export default function Map<
    Messages extends Message[]
>(
    list : Messages,
) : RecordInfer<Messages> {

    return <RecordInfer<Messages>> list.map((v)=>EnsureMessage(v)).map(ValueMessage);

}
