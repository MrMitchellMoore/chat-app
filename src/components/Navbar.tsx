import { auth } from "../firebase";
import { LogOut } from "./LogOut";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

export function Navbar() {
  //const user = auth.currentUser;
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className={style.nav}>
      <div className={style.heading}>ChatApp</div>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}
