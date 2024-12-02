"use client"
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";
interface SecurityCheckComponentProps {
  key: number;
  breakNumberId: number;
}

export default function SecurityCheckComponent(props: SecurityCheckComponentProps) {
  const [gasSensorValue, setGasSensorValue] = useState(Number.NaN)
  const [microFluidSensorValue, setMicroFluidSensorValue] = useState(Number.NaN)
  const [fluidSensorValue, setFluidSensorValue] = useState(Number.NaN)
  const [idealFluidValue, setIdealFluidValue] = useState(Number.NaN)
  const [temperatureValue, setTemperatureValue] = useState(Number.NaN)

  const handleGasSensorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newGasSensorValue = Number(event.target.value)
    setGasSensorValue(newGasSensorValue)
  }

  const handleMicroFluidSensorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMicroFluidSensorValue = Number(event.target.value)
    setMicroFluidSensorValue(newMicroFluidSensorValue)
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

  const handleOnClickAcceptMicroFluidSensor = () => {
    if (microFluidSensorValue > 0) {
      Swal.fire({
        title: '¡Emergencia!',
        html: `Se debe apagar el equipo <br /> Notificación urgente <br /> Tienes microfugas dentro de la tubería <br /> Se debe reparar la tubería ${props.breakNumberId}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } else {
      Swal.fire({
        title: 'Éxito',
        text: 'Su equipo se encuentra en excelente condiciones.',
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
        html: `La bomba ${props.breakNumberId} está a punto de incendiarse. <br /> ¡Paro de emergencia! <br /> Notificar al personal calificado.`,
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

  return (
    <div className="mb-4">
      <span className="text-xl font-bold">Revisón de seguridad del break {props.breakNumberId}</span>
      <br />
      <span className=" mt-2 text-md font-light">Se analizará si no se ha activado algún sensor</span>
      <br />
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

      <span className="mt-2 text-md font-light">• Se revisará si existe alguna microfuga de fluido</span>
      <div className="flex flex-col">
        <div className="w-4/5 m-auto my-4 flex flex-row ">
          <label htmlFor="microFluidSensor" className="mr-2">Valor de microfugas:</label>
          <div className="border rounded-md w-3/4">
            <input
              type="number"
              name="microFluidSensor"
              id="microFluidSensor"
              className="pl-2 py-3 w-full"
              placeholder="Sensor de microfugas"
              value={microFluidSensorValue.toString()}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleMicroFluidSensorChange(event)}
            />
          </div>
          <input
            type="button"
            id="acceptMicroFluidSensor"
            value="Aceptar"
            className="rounded-full bg-green-600 w-1/5 ml-2 text-white font-bold"
            onClick={() => handleOnClickAcceptMicroFluidSensor()}
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
      <hr />
    </div>
  )
}
