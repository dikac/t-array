import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
export default function Map<Instance extends MessageInterface<unknown>[]>(record: Instance): RecordInfer<Instance>;
