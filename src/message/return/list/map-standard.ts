import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./map";
import MapCallback from "../../../list/map-callback";
import MessageGuard from "@dikac/t-message/boolean/message";
import ValueMessage from "@dikac/t-message/return/value";

export default function MapStandard<
    Instance extends MessageInterface<unknown>[]
>(list : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallback(list, MessageGuard, ValueMessage);
}
