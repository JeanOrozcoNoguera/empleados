// router
import { BrowserRouter, Route, Routes } from "react-router-dom"
// componentes
import List from "./pages/List"
import Edit from "./pages/Edit"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="edit" element={<Edit />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
