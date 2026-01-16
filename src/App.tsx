import { Toaster } from "sonner";
import UserAvatar from "./components/home/Avatar";
import Me from "./components/home/Me";
import "./index.css";
import { Separator } from "./components/ui/separator";

const App = () => {
  return (
    <>
      <div className=" jetbrains-mono  w-full pt-10 dark max-w-sm mx-auto p-4">
        <UserAvatar />
        <Me />
        <Separator orientation="horizontal" className=" mt-3 text-white" />
      </div>
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            fontFamily: "'JetBrains Mono', monospace",
          },
        }}
      />
    </>
  );
};

export default App;
