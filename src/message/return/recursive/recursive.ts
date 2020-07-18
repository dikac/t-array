import RecursiveObject from "../../../recursive/recursive";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/return/return";

type Recursive<Schema extends RecursiveObject<Message<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends RecursiveObject<Message<unknown>> ? Recursive<Schema[Key]> : InferMessage<Schema[Key]>
};


export default Recursive;
