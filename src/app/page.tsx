"use client"
import { ChangeEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [selfChangeBreak, setSelfChangeBreak] = useState(false)
  const [scheduleChangeBreak, setScheduleChangeBreak] = useState(false)
  const [gasSensorValue, setGasSensorValue] = useState(Number.NaN)
  const [fluidSensorValue, setFluidSensorValue] = useState(Number.NaN)
  const [idealFluidValue, setIdealFluidValue] = useState(Number.NaN)
  const [temperatureValue, setTemperatureValue] = useState(Number.NaN)

  const handleSelfChangeBreak = () => {
    setSelfChangeBreak(!selfChangeBreak)
  }

  const handleScheduleChangeBreak = () => {
    setScheduleChangeBreak(!scheduleChangeBreak)
  }

  const handleGasSensorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newGasSensorValue = Number(event.target.value)
    setGasSensorValue(newGasSensorValue)
  }

  const handleFluidSensorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFluidSensorValue = Number(event.target.value)
    setFluidSensorValue(newFluidSensorValue)
  }

  const handleIdealFluidChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newIdealFluidValue = Number(event.target.value)
    setIdealFluidValue(newIdealFluidValue)
  }

  const handleTemperatureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTemperatureValue = Number(event.target.value)
    setTemperatureValue(newTemperatureValue)
  }

  const handleOnClickAcceptGasSensor = () => {
    if (gasSensorValue > 0) {
      Swal.fire({
        title: '¡Emergencia!',
        text: 'Se debe apagar el equipo',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } else {
      Swal.fire({
        title: 'Éxito',
        text: 'No se detectó ninguna anomalía.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  const handleOnClickAcceptFluidSensor = () => {
    if (fluidSensorValue > idealFluidValue) {
      Swal.fire({
        title: '¡Emergencia!',
        text: 'Se debe apagar el equipo',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } else {
      Swal.fire({
        title: 'Éxito',
        text: 'No se detectó ninguna anomalía.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  const handleOnClickAcceptIdealFluidValue = () => {
    if (fluidSensorValue) {
      handleOnClickAcceptFluidSensor()
    }
  }

  const handleOnClickAcceptTemperatureSensor = () => {
    if (temperatureValue > 140) {
      Swal.fire({
        title: '¡Emergencia!',
        html: 'La bomba está a punto de incendiarse. <br /> ¡Paro de emergencia! <br /> Notificar al personal calificado.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } else {
      Swal.fire({
        title: 'Éxito',
        html: 'La temperatura de sus equipos se encuentra estable. <br /> La revision se ha realizado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
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
                <div className="flex flex-col">
                  <div className="w-4/5 m-auto my-4 flex flex-row ">
                    <label htmlFor="gasSensor" className="mr-2">Sensor de gas:</label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="number"
                        name="gasSensor"
                        id="gasSensor"
                        className="pl-2 py-3 w-full"
                        placeholder="Sensor de gas"
                        value={gasSensorValue.toString()}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleGasSensorChange(event)}
                      />
                    </div>
                    <input
                      type="button"
                      id="acceptGasSensor"
                      value="Aceptar"
                      className="rounded-full bg-green-600 w-1/5 ml-2 text-white font-bold"
                      onClick={() => handleOnClickAcceptGasSensor()}
                    />
                  </div>
                </div>

                <span className="mt-2 text-md font-light">• Se revisará si existe alguna macrofuga de fluido</span>
                <div className="flex flex-col">
                  <div className="w-4/5 m-auto my-4 flex flex-row ">
                    <label htmlFor="fluidSensor" className="mr-2">Flujo indicado:</label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="number"
                        name="fluidSensor"
                        id="fluidSensor"
                        className="pl-2 py-3 w-full"
                        placeholder="Sensor de fluidos"
                        value={fluidSensorValue.toString()}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleFluidSensorChange(event)}
                      />
                    </div>
                    <input
                      type="button"
                      id="acceptFluidSensor"
                      value="Aceptar"
                      className="rounded-full bg-green-600 w-1/5 ml-2 text-white font-bold"
                      onClick={() => handleOnClickAcceptFluidSensor()}
                    />
                  </div>
                  <div className="w-4/5 m-auto my-4 flex flex-row ">
                    <label htmlFor="idealFluid" className="mr-2">Flujo ideal:</label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="number"
                        name="idealFluid"
                        id="idealFluid"
                        className="pl-2 py-3 w-full"
                        placeholder="Flujo ideal"
                        value={idealFluidValue.toString()}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleIdealFluidChange(event)}
                      />
                    </div>
                    <input
                      type="button"
                      id="acceptIdealFluidValue"
                      value="Aceptar"
                      className="rounded-full bg-green-600 w-1/5 ml-2 text-white font-bold"
                      onClick={() => handleOnClickAcceptIdealFluidValue()}
                    />
                  </div>
                </div>

                <span className="mt-2 text-md font-light">• Se revisará si hay algún equipo que se sobrecaliente</span>
                <div className="flex flex-col">
                  <div className="w-4/5 m-auto my-4 flex flex-row ">
                    <label htmlFor="temperatureSensor" className="mr-2">Temperatura del sensor:</label>
                    <div className="border rounded-md w-3/4">
                      <input
                        type="number"
                        name="temperatureSensor"
                        id="temperatureSensor"
                        className="pl-2 py-3 w-full"
                        placeholder="Sensor de temperatura"
                        value={temperatureValue.toString()}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleTemperatureChange(event)}
                      />
                    </div>
                    <input
                      type="button"
                      id="acceptTemperatureSensor"
                      value="Aceptar"
                      className="rounded-full bg-green-600 w-1/5 ml-2 text-white font-bold"
                      onClick={() => handleOnClickAcceptTemperatureSensor()}
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
