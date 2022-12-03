import { Navbar } from "./components/HomePage/Navbar";
import { HomeModalPage } from "./components/HomePage/HomeModal/HomeModalPage";
import { RightSection } from "./components/HomePage/RightSection/RightSection";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Profile } from "./components/ProfilePage/Profile";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { useState } from "react";
import {useCookies} from 'react-cookie'

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useCookies(["messages"]);
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
              <Route path="/profile" element={<Profile message={message} data={data} setData={setData} setMessage={setMessage}/>} />
              <Route path="/" element={<HomeModalPage message={message} data={data} setData={setData} setMessage={setMessage}/>}/>} />
              <Route path="*" element={<HomeModalPage message={message} data={data} setData={setData} setMessage={setMessage}/>}/>} />
            </Routes>
            <RightSection />
          </div>
        </>
      )}
    </>
  );
}

export default App;
