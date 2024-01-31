import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import { Outlet, useNavigate } from 'react-router-dom'
import { authenticatedRoutes } from '../routes/authenticated.routes'

const MainLayout = () => {
  const navigate = useNavigate()

  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            {authenticatedRoutes.map((route, idx) => (
              <button
                key={`auth-route-${idx}`}
                onClick={() => navigate(route.path)}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                {route.icon}
                <span className="ms-3 uppercase font-bold">{route.title}</span>
              </button>
            ))}
          </ul>
          <div className="absolute bottom-2 w-3/4">
            <button className="flex w-full items-center text-gray-500">
              <ArrowLeftEndOnRectangleIcon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3 uppercase font-bold">Sair</span>
            </button>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
