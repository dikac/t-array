import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./map";
export default function MapStandard<Instance extends MessageInterface<unknown>[]>(list: Instance): RecordInfer<Instance>;
