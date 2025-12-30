import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* PUBLIC PAGES */
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";

/* USER DASHBOARD */
import Dashboard from "./pages/Dashboard/Dashboard";
import AddListing from "./pages/Dashboard/AddListing";
import EditListing from "./pages/Dashboard/EditListing";

/* ADMIN */
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminListings from "./pages/admin/AdminListings";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminSettings from "./pages/admin/AdminSettings";
/* ROUTE GUARDS */
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

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

        {/* ================= USER DASHBOARD ================= */}
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

        {/* ================= ADMIN ROUTES (NESTED & CLEAN) ================= */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="listings" element={<AdminListings />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* ================= FALLBACK ================= */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
