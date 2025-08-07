import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import PrivateRoute from './pages/PrivateRoute.jsx';
import Logout from './components/Logout.jsx'
import ProtectedAdmin from './pages/ProtectedAdmin.jsx'
import AdminPage from './pages/AdminPage.jsx';
import PacotesPage from './pages/PacotesPage.jsx';
import UserList from './components/UserList.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import SidebarLayout from './components/SidebarLayout';
import UserScreen from './components/UserScreen.jsx'
import UserDetails from './components/UserDetails.jsx';
import HomePage from './pages/HomePage.jsx'
import PetsPage from './pages/PetsPage.jsx'
import AvisosPage from './pages/AvisosPage.jsx'
import AdminScreen from './components/AdminScreen.jsx'
import PetScreen from './components/PetScreen.jsx'
import AddPetPage from './components/AddPetScreen.jsx'
import PetDetails from './components/PetsDetail.jsx'
import AddPacote from './components/AddPacote.jsx'
import PackageDetail from './components/PackageDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "logar",
    element: <LoginPage />,
  },
  {
    path: "userPage",
    element: <PrivateRoute element={<UserPage />} />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "adminPage",
    element: <ProtectedAdmin element={<AdminPage />} />
  },
  {
    path: "pacotes",
    element: <PacotesPage />
  },
  {
    path: "admin/users", // Nova rota para exibir a lista de usuários
    element: <ProtectedAdmin element={<UserList />} /> // Protege a página de usuários
  },
  {
    path: "admin",
    element: <ProtectedAdmin element={<AdminPage />} />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />, // Página do Dashboard
      },
      {
        path: "users",
        element: <UserList />, // Página de lista de usuários
      },
      {
        path: "users",
        element: <UserList />, // Página de lista de usuários
      },

    ],
  },
  {
    path: "admin/users/:id", // Rota com parâmetro dinâmico
    element: <ProtectedAdmin element={<UserDetails />} />
  },
  
  // ROTAS GERAIS COM SIDEBAR
  {
    path: "/userPage",
    element: <PrivateRoute element={<UserScreen />} />,
    children: [
      {
        path: "", // quando acessar apenas "/"
        element: <HomePage />,
      },
      {
        path: "activity",
        element: <h1 style={{ color: "black" }}>Hello from Activity!</h1>,
      },
      {
        path: "pacotes",
        element: <PacotesPage />,
      },
      

      {
        path: "pets",
        element: <PetsPage />,
      },
      {
        path: "packages-add",
        element: <AddPacote />,
      },
      {
        path: "pacotes/:id", // Rota com parâmetro dinâmico
        element: <PackageDetail />
      },

      {
        path: "avisos",
        element: <AvisosPage />,
      },
      {
        path: "progress",
        element: <h1 style={{ color: "black" }}>Hello from Progress!</h1>,
      },
      {
        path: "payment",
        element: <h1 style={{ color: "black" }}>Hello from Payment!</h1>,
      },
      {
        path: "setting",
        element: <h1 style={{ color: "white" }}>Hello from Settings!</h1>,
      },
    ],
  }
  ,
  // ROTAS GERAIS ADMINISTRADOR
  {
    path: "/adminPage",
    element: <ProtectedAdmin element={<AdminPage />} />,
    children: [
      {
        path: "", // quando acessar apenas "/"
        element: <PetScreen />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "users/:id", // Rota com parâmetro dinâmico
        element: <ProtectedAdmin element={<UserDetails />} />
      },
      {
        path: "pets/:id", // Rota com parâmetro dinâmico
        element: <ProtectedAdmin element={<PetDetails />} />
      },
      {
        path: "pacotes",
        element: <PacotesPage />,
      },

      {
        path: "pets",
        element: <PetsPage />,
      },
      {
        path: "pets-add",
        element: <AddPetPage />,
      },

      {
        path: "avisos",
        element: <AvisosPage />,
      },
      {
        path: "progress",
        element: <h1 style={{ color: "black" }}>Hello from Progress!</h1>,
      },
      {
        path: "payment",
        element: <h1 style={{ color: "black" }}>Hello from Payment!</h1>,
      },
      {
        path: "setting",
        element: <h1 style={{ color: "white" }}>Hello from Settings!</h1>,
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
