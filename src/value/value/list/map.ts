import Value from "@dikac/t-value/value";
import RecordInfer from "./infer";
import ValueValue from "@dikac/t-value/value/value";

export default function Map<
    Instance extends Value[]
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> record.map(ValueValue);
}
