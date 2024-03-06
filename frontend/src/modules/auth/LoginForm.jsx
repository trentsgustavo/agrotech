import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth.store'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  // const { login } = useAuth()

  const { mutate } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await api.post('/login', {
        ...payload,
      })

      console.log('data ->', data)

      // login(data)
    },
  })

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(mutate)}>
          <div>
            <label className="block text-sm font-medium leading-6 text-green-700">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register('username')}
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-2 border-green-600 border-solid py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-green-700">
              Password
            </label>
            <div className="mt-2">
              <input
                {...register('password')}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-2 border-green-600 border-solid py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
