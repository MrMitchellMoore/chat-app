import { useState, useEffect } from "react";
import { Message } from "./Message";
import {
  DocumentData,
  FieldPath,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { SendMessage } from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] h-[100%] w-full overflow-y-scroll`,
};
export function Chat() {
  const [messages, setMessages] = useState<
    QueryDocumentSnapshot<DocumentData, MessageType>[]
  >([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messageArr: QueryDocumentSnapshot<MessageType>[] = [];
      querySnapshot.docs.map((doc) => {
        return messageArr?.push({
          ...doc.data(),
          id: doc.id,
          ref: doc.ref,
          metadata: doc.metadata,
          data: function (_options?: SnapshotOptions | undefined): MessageType {
            throw new Error("Function not implemented.");
          },
          get: function (
            _fieldPath: string | FieldPath,
            _options?: SnapshotOptions | undefined
          ) {
            throw new Error("Function not implemented.");
          },
          exists: function (): QueryDocumentSnapshot<
            MessageType,
            DocumentData
          > {
            throw new Error("Function not implemented.");
          },
        });
      });
      setMessages(messageArr);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage />
    </>
  );
}
