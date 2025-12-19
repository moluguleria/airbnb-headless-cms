import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* PUBLIC PAGES */
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

/* DASHBOARD */
import Dashboard from "./pages/Dashboard/Dashboard";
import AddListing from "./pages/Dashboard/AddListing";
import EditListing from "./pages/Dashboard/EditListing";

/* PROTECTION */
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />

        <Route path="/listings/:type" element={<Listings />} />

        <Route path="/listing/:slug" element={<ListingDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= DASHBOARD ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/add"
          element={
            <ProtectedRoute>
              <AddListing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/edit/:id"
          element={
            <ProtectedRoute>
              <EditListing />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK (OPTIONAL) ================= */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
