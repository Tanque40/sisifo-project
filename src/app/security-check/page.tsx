"use client";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

interface SecurityCheckComponentProps {
  key: number;
  breakNumberId: number;
  selfChange: boolean;
  scheduleChange: boolean;
}

export default function SecurityCheckComponent(props: SecurityCheckComponentProps) {
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);
  const [gasSensorValue, setGasSensorValue] = useState<number | null>(null);
  const [microFluidSensorValue, setMicroFluidSensorValue] = useState<number | null>(null);
  const [fluidSensorValue, setFluidSensorValue] = useState<number | null>(null);
  const [idealFluidValue, setIdealFluidValue] = useState<number | null>(null);
  const [temperatureValue, setTemperatureValue] = useState<number | null>(null);

  const handleSensorChange = (
    setSensor: React.Dispatch<React.SetStateAction<number | null>>,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSensor(Number(event.target.value));
  };

  const handleSensorSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSensor(event.target.value);
  };

  const handleAcceptGasSensor = () => {
    if (gasSensorValue && gasSensorValue > 0) {
      Swal.fire({
        title: "¡Emergencia!",
        text: "Se debe apagar el equipo. Fuga de gas detectada.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Éxito",
        text: "No se detectaron anomalías en el sensor de gas.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleAcceptMicroFluidSensor = () => {
    if (microFluidSensorValue && microFluidSensorValue > 0) {
      Swal.fire({
        title: "¡Emergencia!",
        html: `Microfuga detectada en la tubería asociada al equipo ${props.breakNumberId}. Se requiere reparación inmediata.`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Éxito",
        text: "No se detectaron microfugas.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleAcceptFluidSensor = () => {
    if (fluidSensorValue && idealFluidValue && fluidSensorValue < idealFluidValue) {
      Swal.fire({
        title: "¡Emergencia!",
        text: "Se debe apagar el equipo. Flujo menor al esperado.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Éxito",
        text: "No se detectaron anomalías en el flujo.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleAcceptTemperatureSensor = () => {
    if (temperatureValue && temperatureValue >= 140) {
      Swal.fire({
        title: "¡Emergencia!",
        html: `La bomba ${props.breakNumberId} está a punto de incendiarse. <br /> ¡Paro de emergencia! <br /> Notificar al personal calificado.`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Éxito",
        text: "La temperatura de sus equipos se encuentra estable. Revisión exitosa.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="h-full container mx-auto p-10">
      <div className="border-2 h-full rounded-xl border-gray-500 shadow-lg p-8">


        <div className="mb-4">
          <h2 className="text-lg font-bold">Revisión de Seguridad - Equipo {props.breakNumberId}</h2>
          <div className="mt-4">
            <label htmlFor="sensorType" className="block text-sm font-medium">
              Selecciona el tipo de sensor:
            </label>
            <select
              id="sensorType"
              className="border rounded-md p-2 w-full mt-2"
              value={selectedSensor || ""}
              onChange={handleSensorSelection}
            >
              <option value="" disabled>
                Seleccionar tipo de sensor
              </option>
              <option value="gas">Sensor de Gas</option>
              <option value="micro">Sensor de Microfugas</option>
              <option value="fluid">Sensor de Macrofugas</option>
              <option value="temperature">Sensor de Temperatura</option>
            </select>
          </div>

          {/* Sensor de Gas */}
          {selectedSensor === "gas" && (
            <div className="mt-4">
              <label htmlFor="gasSensor" className="block text-sm font-medium">
                Sensor de Gas:
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="number"
                  id="gasSensor"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Valor del sensor"
                  value={gasSensorValue || ""}
                  onChange={(e) => handleSensorChange(setGasSensorValue, e)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-bold"
                  onClick={handleAcceptGasSensor}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}

          {/* Sensor de Microfugas */}
          {selectedSensor === "micro" && (
            <div className="mt-4">
              <label htmlFor="microFluidSensor" className="block text-sm font-medium">
                Sensor de Microfugas:
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="number"
                  id="microFluidSensor"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Valor del sensor"
                  value={microFluidSensorValue || ""}
                  onChange={(e) => handleSensorChange(setMicroFluidSensorValue, e)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-bold"
                  onClick={handleAcceptMicroFluidSensor}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}

          {/* Sensor de Macrofugas */}
          {selectedSensor === "fluid" && (
            <div className="mt-4">
              <label htmlFor="fluidSensor" className="block text-sm font-medium">
                Sensor de Macrofugas - Flujo Actual:
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="number"
                  id="fluidSensor"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Flujo medido"
                  value={fluidSensorValue || ""}
                  onChange={(e) => handleSensorChange(setFluidSensorValue, e)}
                />
              </div>
              <label htmlFor="idealFluidValue" className="block text-sm font-medium mt-4">
                Flujo Ideal:
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="number"
                  id="idealFluidValue"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Flujo ideal"
                  value={idealFluidValue || ""}
                  onChange={(e) => handleSensorChange(setIdealFluidValue, e)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-bold"
                  onClick={handleAcceptFluidSensor}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}

          {/* Sensor de Temperatura */}
          {selectedSensor === "temperature" && (
            <div className="mt-4">
              <label htmlFor="temperatureSensor" className="block text-sm font-medium">
                Sensor de Temperatura:
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="number"
                  id="temperatureSensor"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Temperatura"
                  value={temperatureValue || ""}
                  onChange={(e) => handleSensorChange(setTemperatureValue, e)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-bold"
                  onClick={handleAcceptTemperatureSensor}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
