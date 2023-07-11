import { useState, useEffect, useRef } from "react";
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

const style = {
  main: `flex flex-col p-[10px] relative`,
};
export function Chat() {
  const [messages, setMessages] = useState<
    QueryDocumentSnapshot<DocumentData, MessageType>[]
  >([]);
  const scroll = useRef();

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
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </main>
      <span ref={scroll.current}></span>
    </>
  );
}
