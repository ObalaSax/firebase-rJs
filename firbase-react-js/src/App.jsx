import Welcome from "./Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import Logins from "./Authentication/LoginRegister";
import EditFile from "./CRUD/EditFile";
import UploadFile from "./CRUD/UploadFile";
import Navigation from "./Static Components/Navigation";
import CreateCard from "./CRUD/CreateCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Welcome />} />
          <Route path="/create-page" element={<CreateCard />} />
          <Route path="/edit-page" element={<EditFile />} />
          <Route path="/upload-page" element={<UploadFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
