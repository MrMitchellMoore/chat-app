import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs font-bold`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

type MessageProps = {
  message: MessageType;
};

export function Message({ message }: MessageProps) {
  const messageClass =
    message.id === auth.currentUser?.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div className="relative">
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{auth.currentUser?.displayName}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
