import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  ClipboardIcon,
  QueueListIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

import BrandList from '../modules/brands/List'
import CategoryList from '../modules/categories/List'
import ProductList from '../modules/products/List'
import CustomerList from '../modules/customers/List'
import OrderList from '../modules/orders/List'
import UserList from '../modules/users/List'

export const authenticatedRoutes = [
  {
    path: '/brands',
    icon: (
      <BriefcaseIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <BrandList />,
    title: 'Marcas',
    menu: true,
  },
  {
    path: '/categories',
    icon: (
      <QueueListIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <CategoryList />,
    title: 'Categorias',
    menu: true,
  },
  {
    path: '/products',
    icon: (
      <ShoppingBagIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <ProductList />,
    title: 'Produtos',
    menu: true,
  },
  {
    path: '/customers',
    icon: (
      <BuildingStorefrontIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <CustomerList />,
    title: 'Clientes',
    menu: true,
  },
  {
    path: '/orders',
    icon: (
      <ClipboardIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <OrderList />,
    title: 'Pedidos',
    menu: true,
  },
  {
    path: '/users',
    icon: (
      <UserCircleIcon className="w-5 h-5 text-gray-200 transition duration-75 group-hover:text-gray-900" />
    ),
    component: <UserList />,
    title: 'Usuários',
    menu: true,
  },
]
