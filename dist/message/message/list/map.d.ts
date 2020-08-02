import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
export default function Map<Messages extends Message[]>(list: Messages): RecordInfer<Messages>;
