import { auth } from "../firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

export function LogOut() {
  const signOut = () => {
    auth.signOut();
    console.log("You are signed out!");
  };
  return (
    <button onClick={() => signOut()} className={style.button}>
      Logout
    </button>
  );
}
