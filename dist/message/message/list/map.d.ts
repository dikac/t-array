import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./list";
export default function Map<Instance extends MessageInterface<unknown>[]>(list: Instance): RecordInfer<Instance>;
