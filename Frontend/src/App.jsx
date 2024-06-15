import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Fantasy from "./components/Categories/Fantasy";
import Adventure from "./components/Categories/Adventure";
import ChildrenLiterature from "./components/Categories/ChildrenLiterature";
import Classic from "./components/Categories/Classic";
import Fiction from "./components/Categories/Fiction";
import HistoricalFiction from "./components/Categories/HistoricalFiction";
import History from "./components/Categories/History";
import Memoir from "./components/Categories/Memoir";
import Mystery from "./components/Categories/Mystery";
import SelfHelp from "./components/Categories/SelfHelp";
import Rentmodal from "./components/Rentmodal";

function App() {
  const [authUser, setAuthUser] = useAuth();
  // const [openModal, setOpenModal] = useState(false)
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path = "/about" element = {<About/>}></Route>
          {/* Categories */}
          <Route path="/fantasy" element = {<Fantasy/>}></Route>
          <Route path="/adventure" element={<Adventure/>}></Route>
          <Route path="/childrenLiterature" element = {<ChildrenLiterature/>}></Route>
          <Route path="/classic" element = {<Classic/>}></Route>
          <Route path="/fiction" element={<Fiction/>}></Route>
          <Route path="/historicalFiction" element = {<HistoricalFiction/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/Memoir" element = {<Memoir/>}></Route>
          <Route path="/Mystery" element = {<Mystery/>}></Route>
          <Route path="/selfhelp" element = {<SelfHelp/>}></Route>
          <Route path="/rentModal" element = {<Rentmodal/>}></Route>

        </Routes>
        <Toaster />
        </div>
      {/* <Rentmodal openModal={openModal} setOpenModal={setOpenModal} /> */}

    </>
  );
}

export default App;
