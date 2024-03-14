import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Nav from "./Components/Nav/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCredit] = useState(20);

  function handleSetCartItems(course) {
    const isExist = cartItems.find((item) => item.id === course.id);
    const totalCreditAdded = cartItems.reduce((a, b) => a + b.credit, 0);

    if (!isExist) {
      if (totalCreditAdded + course.credit > totalCredit) {
        toast.error("Only 20 credit is allowed!");
        return;
      } else {
        setCartItems([...cartItems, course]);
        toast.success("Course Added!");
        return;
      }
    } else {
      toast.warn("Already exist!");
      return;
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
          <Cart totalCredit={totalCredit} cartItems={cartItems}></Cart>
        </main>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
