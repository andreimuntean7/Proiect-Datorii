import { BsArrowLeftShort } from "react-icons/bs";

function App() {
  return (
    <div className="flex">
      <div className="bg-dark-purple h-screen p-5 pt-8 w-72 relative">
        <BsArrowLeftShort className="bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer" />
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default App;
