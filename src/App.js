import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Profile,
  SharedLayout,
  Stats,
  AllJobs,
  AddJob,
} from "./pages/dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
