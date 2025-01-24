"use client"
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dummyUser: { user: string, password: string } = {
    user: 'sisifo@gmail.com',
    password: '1234'
  }

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = event.target.value
    setEmail(newEmailValue)
  }

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newPasswordValue = event.target.value
    setPassword(newPasswordValue)
  }

  const handleOnClickLogIn = () => {
    if (email === dummyUser.user && password === dummyUser.password)
      redirect('/lines')
    else
      alert('Usuario o contraseña inválido.')
  }

  return (
    <main className="h-full container mx-auto p-10">
      <div
        className="flex flex-col h-full w-full items-center justify-center"
      >
        <div className="border-2 rounded-xl border-gray-500 shadow-lg w-full">
          <div id="breakes-zone" className="block">
            <div
              className="flex flex-col h-full w-full items-center justify-start"
            >
              <div id="options" className="w-5/6 my-6">
                <div
                  className="flex flex-col border-2 rounded-xl border-gray-500 shadow-lg p-6 overflow-y-auto items-center justify-center"
                >
                  <div className="mt-3 mb-5">
                    <span className="text-2xl font-bold">Inicio de sesión</span>
                  </div>
                  <div className="flex flex-row w-4/5 justify-center">
                    <label
                      htmlFor="email-input"
                      className="ml-auto mr-3 my-auto w-1/5 text-right"
                    >
                      Correo:
                    </label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="email"
                        name="email-input"
                        id="email-input"
                        className="pl-2 py-3 w-full"
                        placeholder="Correo"
                        value={email}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeEmail(event)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-4/5 justify-center mt-6">
                    <label
                      htmlFor="password-input"
                      className="ml-auto mr-3 my-auto w-1/5 text-right"
                    >
                      Contrseña:
                    </label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="password"
                        name="password-input"
                        id="password-input"
                        className="pl-2 py-3 w-full"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangePassword(event)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-20 w-2/3">
                    <input
                      type="button"
                      id="acceptLogIn"
                      value={`Iniciar Sesión`}
                      className="rounded-full bg-green-600 w-2/5 h-16 mx-auto my-4 text-white font-bold px-3"
                      onClick={() => handleOnClickLogIn()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
