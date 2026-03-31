import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router"
import { ProductPages } from "./pages/ProductPages/ProductPages"
import { CreateProductPage } from "./pages/CreateProductPage/CreateProductPage"



function App() {

  return (
      <div>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<ProductPages/>}/>
          <Route path="/product/create" element={<CreateProductPage/>}></Route>
        </Routes>
      </div>
  )
}

export default App
