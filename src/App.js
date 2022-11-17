import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notification from "./components/Notification";
const App = () => {
  const [read, setRead] = useState(false);

  return (
    <section className="main">
      <Header setRead={setRead} />
      <main>
        <Notification read={read} />
      </main>
      <Footer />
    </section>
  );
};

export default App;
