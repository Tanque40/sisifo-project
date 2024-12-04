"use client"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

import { ContainerForm, ContainerFormInterface } from "@/interface/container-check/container-check.interface"

export default function FigureForm(props: { figure: ContainerFormInterface, setFigure: Dispatch<SetStateAction<ContainerFormInterface>> }) {
  const possibleForms = Object.values(ContainerForm)
  const [figureType, setFigureType] = useState('')

  const handleOnChangeContainerName = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      name: event.target.value
    })
  }

  const handleOnChangeSelectForm = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const newSelectedValue = event.target.value
    if (newSelectedValue == 'forma')
      setFigureType('')
    else
      setFigureType(newSelectedValue)
  }

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 pt-2">
        <div className="w-3/4 mt-2 mx-auto">
          <label htmlFor="containerName" className="ml-1">Nombre del tanque:</label>
          <input
            type="text"
            name="containerName"
            id="containerName"
            className="p-2 w-full border rounded-md mt-2"
            value={props.figure.name}
            placeholder="Nombre del tanque"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerName(event)}
          />
        </div>
      </div>
      <div className="col-span-1 pt-2">
        <div className="mx-auto w-3/4 mt-2">
          <label htmlFor="select" className="ml-1">Forma del tanque:</label>
          <select
            className="border rounded-md w-full px-2 pb-3 pt-2 mt-2"
            defaultValue="forma"
            onChange={(event: ChangeEvent<HTMLSelectElement>) => handleOnChangeSelectForm(event)}
          >
            <option value="forma">Elige una forma</option>
            {possibleForms.map((value, index) => (
              <option value={value} key={index}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      {!figureType &&
        <div className="col-span-2 mt-6 mx-auto">
          <span>Primero selecciona una forma</span>
        </div>
      }
      {figureType == ContainerForm.CYLINDER &&
        <>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerRadius" className="ml-1">Radio del tanque:</label>
              <input
                type="number"
                name="containerRadius"
                id="containerRadius"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.radio?.toString() || undefined}
                placeholder="Radio del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerName(event)}
              />
            </div>
          </div>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerHeight" className="ml-1">Altura del tanque:</label>
              <input
                type="number"
                name="containerHeight"
                id="containerHeight"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.height?.toString() || undefined}
                placeholder="Altura del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerName(event)}
              />
            </div>
          </div>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerDiferencial" className="ml-1">
                Diferencial de volumen:
              </label>
              <input
                type="number"
                name="containerDiferencial"
                id="containerDiferencia"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.diferencial?.toString()}
                placeholder="Diferencial de volumen"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerName(event)}
              />
            </div>
          </div>
        </>
      }
    </div>
  )
}
