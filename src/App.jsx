import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/DashBoard"
import Upload from "./pages/Upload";
import Subscription from "./pages/Subscription";
import Transaction from "./pages/Transaction";
import MyFiles from "./pages/MyFiles";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/Transactions" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
