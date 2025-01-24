'use client'

interface NavElementOptions {
  name: string;
  link: string;
}

type Props = {
  isLogin: boolean
}

export default function Navbar(props: Props) {
  const menuOptions: NavElementOptions[] = [
    { name: 'Encender / Apagar equipos', link: '/lines' },
    { name: 'Revisión de seguridad', link: '/security-check' },
    { name: 'Revisión de tanques', link: '/container-check' }
  ]

  if (props.isLogin)
    return null
  else
    return (
      <nav className="col-span-2 border-2 border-r-black h-screen">
        <div className="flex h-screen items-center justify-center">
          <div className="h-1/4 w-3/4 flex flex-col justify-between ">
            {menuOptions.map((option: NavElementOptions) => (
              <a
                href={option.link}
                key={option.name}
                className="h-auto border-2 border-gray-500 py-2 px-4 rounded-md text-center mb-2"
              >
                <div className="mt-1.5">
                  {option.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
}
