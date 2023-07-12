import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Navbar } from "./components/Navbar";
import { Chat } from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName + " " + user.uid + " is signed in");
    }
    console.log("User not signed in");
  });
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat Component */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
