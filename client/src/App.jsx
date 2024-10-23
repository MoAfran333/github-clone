import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import LikesPage from "./pages/LikesPage.jsx";

import Sidebar from "./components/Sidebar.jsx";

import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser, loading } = useAuthContext();
  console.log("Authenticated user : ", authUser);

  if (loading) return null;

  return (
    <>
      <Toaster />
      <div className="flex">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
            />
            <Route
              path="/signup"
              element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
            />
            <Route
              path="/explore"
              element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/likes"
              element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
