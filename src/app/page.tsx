"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [selfChangeBreak, setSelfChangeBreak] = useState(false)
  const [scheduleChangeBreak, setScheduleChangeBreak] = useState(false)

  const handleSelfChangeBreak = () => {
    setSelfChangeBreak(!selfChangeBreak)
  }

  const handleScheduleChangeBreak = () => {
    setScheduleChangeBreak(!scheduleChangeBreak)
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
          <div className="flex flex-col h-full w-full items-center justify-around">
            <div className="grid grid-cols-2 gap-6">
              <div className="">
                <input
                  type="checkbox"
                  name="selfChangeBreak"
                  id="selfChangeBreak"
                  checked={selfChangeBreak}
                  onChange={() => handleSelfChangeBreak()}
                />
                <label htmlFor="selfChangeBreak" className="ml-1">Cambio de break por parte de un operador</label>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  name="scheduleChangeBreak"
                  id="scheduleChangeBreak"
                  checked={scheduleChangeBreak}
                  onChange={() => handleScheduleChangeBreak()}
                />
                <label htmlFor="scheduleChangeBreak" className="ml-1">Cambio de break programado</label>
              </div>
            </div>
            <div id="options" className="hidden h-2/3 w-3/4">
              <div className="flex flex-col border-2 h-full rounded-xl border-gray-500 shadow-lg p-4">
                <span className="text-xl font-bold">Revisón de seguridad</span>
                <span className=" mt-2 text-md font-light">Se analizará si no se ha activado algún sensor</span>
                <span className="mt-2 text-md font-light">• Se revisará si existe alguna fuga de gas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
