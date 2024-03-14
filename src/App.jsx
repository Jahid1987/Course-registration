import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Nav from "./Components/Nav/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleSetCartItems(course) {
    const isExist = cartItems.find((item) => item.id === course.id);
    if (!isExist) {
      setCartItems([...cartItems, course]);
    } else {
      toast("Already exist.");
    }
  }

  return (
    <>
      <div>
        <header>
          <Nav></Nav>
        </header>
        <main className=" pr-2 pl-2 mt-5 flex flex-col lg:flex-row gap-3 justify-between items-start ">
          <Courses handleSetCartItems={handleSetCartItems}></Courses>
          <Cart cartItems={cartItems}></Cart>
        </main>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
