import { Navbar } from "./components/HomePage/Navbar";
import { HomeModalPage } from "./components/HomePage/HomeModal/HomeModalPage";
import { RightSection } from "./components/HomePage/RightSection/RightSection";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Profile } from "./components/ProfilePage/Profile";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open && localStorage.length < 3 ? (
        <AuthPage setOpen={setOpen}/>
      ) : (
        <>
          <div className={styles.container}>
            <Navbar />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<HomeModalPage />} />
              <Route path="*" element={<HomeModalPage />} />
            </Routes>
            <RightSection />
          </div>
        </>
      )}
    </>
  );
}

export default App;
