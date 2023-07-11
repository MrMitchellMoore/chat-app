import { Navbar } from "./components/Navbar";

const style = {
  appContainer: `max-w-[1396px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
      </section>
      {/* Chat Component */}
    </div>
  );
}

export default App;
