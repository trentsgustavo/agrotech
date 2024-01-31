import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/auth.store'
import { authenticatedRoutes } from './authenticated.routes'
import { publicRoutes } from './public.routes'
import MainLayout from '../layouts/MainLayout'
import LoginForm from '../modules/auth/LoginForm'

const Router = () => {
  const { isAuthenticated } = useAuth()
  const routes = isAuthenticated ? authenticatedRoutes : publicRoutes

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <MainLayout /> : <LoginForm />}
      >
        {routes.map((route, idx) => (
          <Route
            key={`route-${idx}`}
            path={route.path}
            element={route.component}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default Router
