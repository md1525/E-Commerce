import React from "react";
import Login from './Components/Login';
import Mainpage from "./Components/mainpage";
import {Routes , Route } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import Signup from './Components/Signup';
import {UserAuthContextProvider} from "./context/UserAuthContext"
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import ApiCalling from "./API/Category_section/Category";
import MensClothing from "./API/Category_section/mensClothing";
import WomensClothing from "./API/Category_section/womensClothing";
import Jewelery from "./API/Category_section/jewelery";
import Electronics from "./API/Category_section/electronics";
import Contact from './pages/Pages';


function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
          <Route
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>

          } />
          <Route 
          path="/products" element={
            <ProtectedRoute>
              <ApiCalling />
            </ProtectedRoute>
          }
          />
          <Route 
          path="/products/jewelery" element={
            <ProtectedRoute>
              <Jewelery />
            </ProtectedRoute>
          }
          />
          <Route 
          path="/products/electronics" element={
            <ProtectedRoute>
              <Electronics />
            </ProtectedRoute>
          }
          />
          <Route 
          path="/products/mensClothing" element={
            <ProtectedRoute>
              <MensClothing />
            </ProtectedRoute>
          }
          />
          <Route 
          path="/products/womensClothing" element={
            <ProtectedRoute>
              <WomensClothing />
            </ProtectedRoute>
          }
          />

      <Route 
          path="/contactUs" element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
          />

          
          <Route path="/" element={<Mainpage />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
