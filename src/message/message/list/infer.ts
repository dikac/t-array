import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";

type Infer<Schema extends Message[]> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Infer;
