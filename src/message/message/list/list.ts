import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/return/return";

type List<Schema extends Message<unknown>[]> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default List;
