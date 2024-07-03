import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages/auth";
import { Chat, Home } from "./pages/admin"
import Error404 from "./pages/Error404";
import { LayoutAuth, LayoutAdmin } from "./layouts";
import { ForgetPassword } from "./pages/auth/ForgetPassword";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />} >
          <Route index element={<Login />}/>
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App

