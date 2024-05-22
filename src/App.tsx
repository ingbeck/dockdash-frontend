
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/DashboardPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/register"} element={<RegisterPage/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </Layout>
  )
}
