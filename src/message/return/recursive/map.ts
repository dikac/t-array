import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
import MapCallback from "../../../list/map-callback";
import MessageGuard from "@dikac/t-message/boolean/message";
import ValueMessage from "@dikac/t-message/return/value";


export default function Map<
    Instance extends MessageInterface<unknown>[]
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallback(record, MessageGuard, ValueMessage);
}
