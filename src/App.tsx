import UserAvatar from "./components/home/Avatar";
import Me from "./components/home/Me";
import "./index.css";

const App = () => {
  return (
    <div className=" jetbrains-mono  w-full pt-10">
      <UserAvatar />
      <Me />
      <div className=""></div>
    </div>
  );
};

export default App;
