
import { useState } from "react";
import {
  BrowserRouter,//wraps your react application and enables routing  using the browser url 
  Routes,//Routes hold all route definitions.Route connects a URL path with the component to render 
  Route,//it connects the url with the component 
  Link,//used to navigate between pages without reloading the entire website
  NavLink,//similar to Link but also provides an active state to identify the current page.useful gfor navigation bars 

  useNavigate,//a hook that allow us to navigate programmitally  through  javascript

  useParams, //Dynamic routes allow URL paths o contain variable values .useParams extracts those  values
  useLocation,//a hook that provides information about the current url 
  useSearchParams,//restrict access to certain pages based on authentication or authorization . we commonly create a custom wrapper and use Navigate to Redirect
  //used to read  and update query paramete in the url such as search ,filters and sorting
  Navigate,
  Outlet//nested routes are routes inside  parent routes outlet is the placeholder where the  matched child component renders

} from "react-router";



// React Router
// Used to navigate between different pages in a React application
// without reloading the entire page.

// BrowserRouter
// Enables routing in our application by using the browser URL.

// Routes
// Container that holds all our route definitions.

// Route
// Maps a URL path to a particular component.

// Link
// Used to navigate between pages without refreshing the browser.

// NavLink
// Similar to Link, but provides an active state for the current route.

// useNavigate
// Used to navigate programmatically, such as after login or form submission.

// Dynamic Routes (:id)
// Used to create routes with dynamic values, such as /products/101.

// useParams
// Used to access dynamic values from the URL.

// Nested Routes
// Used to place child routes inside a parent route.

// Outlet
// Placeholder where nested child routes are rendered.

// Index Route
// Default child route displayed when the parent route is visited.

// Wildcard Route (*)
// Used to handle unknown URLs, usually for a 404 Not Found page.

// useLocation
// Provides information about the current URL and location.

// Protected Routes
// Restrict access to certain pages based on authentication or permissions.

// Navigate
// Used to redirect users to another route.

// useSearchParams
// Used to read and update query parameters in the URL,
// such as ?category=shoes&sort=price.    

// ---------------- HOME ----------------
function Home() {
  return (
    <div>
      <h1>Welcome to RouteVerse</h1>
      <p>Learn how navigation works in React.</p>
      <Link to="/products">Explore Products</Link>
    </div>
  );
}

// ---------------- ABOUT ----------------
function About() {
  return <h1>About Us</h1>;
}

// ---------------- NAVBAR ----------------
function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

// ---------------- PRODUCTS ----------------
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read search value from the URL
  const search = searchParams.get("search") || "";

  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Headphones" },
    { id: 103, name: "Keyboard" }
  ];

  // Filter based on the URL search parameter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearch(e) {
    const value = e.target.value;

    // Update the URL when the user types
    setSearchParams(value ? { search: value } : {});
  }

  return (
    <div>
      <h1>Products</h1>

      <input
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          {/* Dynamic URL */}
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

// ---------------- PRODUCT DETAILS ----------------
function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

// ---------------- LOGIN ----------------
function Login({ onLogin }) {
  const navigate = useNavigate();

  function handleLogin() {
    onLogin();

    // Navigate after login
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// ---------------- PROTECTED ROUTE ----------------
function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) {
    // Redirect if not logged in
    return <Navigate to="/login" replace />;
  }

  // Render the matching child route
  return <Outlet />;
}

// ---------------- DASHBOARD LAYOUT ----------------
function DashboardLayout({ onLogout }) {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/dashboard">Overview</Link>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Child dashboard page appears here */}
      <Outlet />

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

// ---------------- DASHBOARD CHILD PAGES ----------------
function DashboardHome() {
  return <h2>Dashboard Overview</h2>;
}

function Profile() {
  return <h2>My Profile</h2>;
}

function Settings() {
  return <h2>My Settings</h2>;
}

// ---------------- CURRENT LOCATION ----------------
function LocationInfo() {
  const location = useLocation();

  return (
    <footer>
      <p>Current URL: {location.pathname}</p>
    </footer>
  );
}

// ---------------- 404 PAGE ----------------
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// ---------------- MAIN APP ----------------
function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Product routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Login */}
        <Route
          path="/login"
          element={
            <Login
              onLogin={() => setIsLoggedIn(true)}
            />
          }
        />

        {/* Protected parent route */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<DashboardLayout onLogout={handleLogout} />}>
            {/* Default dashboard page */}
            <Route index element={<DashboardHome />} />

            {/* Nested routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <LocationInfo />
      </BrowserRouter>
    </>
  );
}

// ---------------- BROWSER ROUTER ----------------

