import Value from "@dikac/t-value/value";
import RecordInfer from "./infer";
export default function Map<Instance extends Value[]>(record: Instance): RecordInfer<Instance>;
