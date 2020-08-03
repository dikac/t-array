import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
export default function Map<Messages extends Message[]>(list: Messages): ListInfer<Messages>;
