// router
import { BrowserRouter, Route, Routes } from "react-router-dom"
// componentes
import List from "./pages/List"
import Edit from "./pages/Edit"
import Layout from "./layouts/Layout"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
