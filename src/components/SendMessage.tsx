import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[1396px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

export function SendMessage() {
  const [input, setInput] = useState("");

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        className={style.input}
        type="text"
        name="sendMessage"
        placeholder="Message"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
}
