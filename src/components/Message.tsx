const style = {
  text: `flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

type MessageProps = {
  message: MessageType;
};

export function Message({ message }: MessageProps) {
  return (
    <div>
      <div className={style.text}>
        <p className={style.name}>Dave</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
