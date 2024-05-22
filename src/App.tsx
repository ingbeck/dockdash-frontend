
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Login from './pages/Login'

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Login/>}/>
      </Routes>
    </Layout>
  )
}
