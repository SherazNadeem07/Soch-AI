import AuthPattern from "../components/UI/AuthPattern";
export default function AuthLayout({ children }) {
  return (
   <>
   <div className="grid grid-flow-col h-screen ">
    <div><AuthPattern className={"relative"}/></div>
  {children}
  </div>
   </>
  );
}
