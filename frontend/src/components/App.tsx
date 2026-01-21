import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section>
       <Routes>
        <Route 
         path='/'
         element={
          <>
              <Header/>
              <Main/>
              <Footer />
          </>
         }
        />

        <Route 
          path='/signin'
          element={
            <>
             <Login/>
            </>
          }
        />

       <Route 
          path='/signup'
          element={
            <>
             <Register/>
            </>
          }
        />

          <Route
            path="*"
            element={
              isLoggedIn ? (
              <Navigate to="/" replace />
              ) : (
              <Navigate to="/signin" replace />
              )
            }
          />
       </Routes>
    </section>
  )
}

export default App;
