"use client"
import SecurityCheckComponent from "@/components/turn-on-off-machines/security-check/security-check.component";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [selfChangeBreak, setSelfChangeBreak] = useState(false)
  const [scheduleChangeBreak, setScheduleChangeBreak] = useState(false)
  const [breaksNumber, setBreaksNumber] = useState(1)
  // eslint-disable-next-line prefer-const
  const [securityCheckComponents, setSecurityCheckComponents] = useState([<SecurityCheckComponent key={0} breakNumberId={(0 + 1)} />])

  const handleSelfChangeBreak = () => {
    setSelfChangeBreak(!selfChangeBreak)
  }

  const handleScheduleChangeBreak = () => {
    setScheduleChangeBreak(!scheduleChangeBreak)
  }

  const handleBreaksNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newBreaksNumber = Number(event.target.value)
    setBreaksNumber(newBreaksNumber)
  }

  const udpateSecurityComponents = () => {
    const temp = []
    for (let i = 0; i < breaksNumber; i++) {
      temp.push(<SecurityCheckComponent key={i} breakNumberId={(i + 1)} />)
    }
    setSecurityCheckComponents(temp)
  }

  useEffect(() => {
    const optionsElement: HTMLElement | null = document.getElementById('options')
    if (scheduleChangeBreak || selfChangeBreak) {
      if (optionsElement)
        optionsElement.classList.remove('hidden')
    } else if (!selfChangeBreak && !scheduleChangeBreak) {
      if (optionsElement)
        optionsElement.classList.add('hidden')
    }
  })

  return (
    <main className="h-full container mx-auto p-10">
      <div className="border-2 h-full rounded-xl border-gray-500 shadow-lg">
        <div id="breakes-zone" className="block h-full">
          <div className="flex flex-col h-full w-full items-center justify-start">
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="">
                <input
                  type="checkbox"
                  name="selfChangeBreak"
                  id="selfChangeBreak"
                  checked={selfChangeBreak}
                  onChange={() => handleSelfChangeBreak()}
                />
                <label htmlFor="selfChangeBreak" className="ml-1">Encendido/Apagado parte de un operador</label>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  name="scheduleChangeBreak"
                  id="scheduleChangeBreak"
                  checked={scheduleChangeBreak}
                  onChange={() => handleScheduleChangeBreak()}
                />
                <label htmlFor="scheduleChangeBreak" className="ml-1">Encendido/Apagado programado</label>
              </div>
              <div className="">
                <label htmlFor="breaksNumber" className="mr-2">Cantidad de breaks:</label>
                <div className="border rounded-md w-3/4">
                  <input
                    type="number"
                    name="breaksNumber"
                    id="breaksNumber"
                    className="pl-2 py-3 w-full"
                    placeholder="Sensor de gas"
                    value={breaksNumber.toString()}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleBreaksNumberChange(event)}
                  />
                </div>
              </div>
              <input
                type="button"
                id="acceptNumberOfBreak"
                value="Aceptar"
                className="rounded-full bg-green-600 w-1/2 h-12 ml-2 text-white font-bold my-auto"
                onClick={() => udpateSecurityComponents()}
              />
            </div>
            <div id="options" className="hidden w-5/6 my-6">
              <div className="flex flex-col border-2 h-full rounded-xl border-gray-500 shadow-lg p-6 overflow-y-auto">
                {securityCheckComponents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
