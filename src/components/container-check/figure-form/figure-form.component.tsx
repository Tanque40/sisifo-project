"use client"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react"

import { ContainerForm, ContainerFormInterface } from "@/interface/container-check/container-check.interface"

export default function FigureForm(
  props: {
    figure: ContainerFormInterface,
    setFigure: Dispatch<SetStateAction<ContainerFormInterface>>,
    addFigure: () => void
  }
) {
  const possibleForms = Object.values(ContainerForm)
  const [figureType, setFigureType] = useState('')

  const handleOnChangeContainerName = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      name: event.target.value
    })
  }

  const handleOnChangeContainerRadius = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      radius: Number(event.target.value)
    })
  }

  const handleOnChangeContainerHeight = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      height: Number(event.target.value)
    })
  }

  const handleOnChangeContainerBase = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      base: Number(event.target.value)
    })
  }

  const handleOnChangeContainerDeep = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFigure({
      ...props.figure,
      deep: Number(event.target.value)
    })
  }

  const handleOnChangeSelectForm = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSelectedValue = event.target.value
    if (newSelectedValue == 'forma')
      setFigureType('')
    else
      setFigureType(newSelectedValue)
    props.setFigure({
      ...props.figure,
      form: figureType
    })
  }

  const handleOnClickAddContainer = (event: React.MouseEvent) => {
    event.preventDefault()
    props.addFigure()
    props.setFigure({
      name: '',
      form: ContainerForm.CIRCULAR,
      radius: Number.NaN,
      height: Number.NaN,
      base: Number.NaN,
      deep: Number.NaN,
      volume: Number.NaN,
      selected: false
    })
    setFigureType('')
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
            onChange={(event: ChangeEvent<HTMLSelectElement>) => handleOnChangeSelectForm(event)}
            value={figureType || "forma"}
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
                value={props.figure.radius?.toString()}
                placeholder="Radio del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerRadius(event)}
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
                value={props.figure.height?.toString()}
                placeholder="Altura del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerHeight(event)}
              />
            </div>
          </div>
        </>
      }
      {figureType == ContainerForm.CIRCULAR &&
        <>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerRadius" className="ml-1">Radio del tanque:</label>
              <input
                type="number"
                name="containerRadius"
                id="containerRadius"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.radius?.toString()}
                placeholder="Radio del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerRadius(event)}
              />
            </div>
          </div>
        </>
      }
      {figureType == ContainerForm.SQUARE &&
        <>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerHeight" className="ml-1">Lado del tanque:</label>
              <input
                type="number"
                name="containerHeight"
                id="containerHeight"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.height?.toString()}
                placeholder="Lado del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerHeight(event)}
              />
            </div>
          </div>
        </>
      }
      {figureType == ContainerForm.RECTANGULAR &&
        <>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerBase" className="ml-1">Base del tanque:</label>
              <input
                type="number"
                name="containerBase"
                id="containerBase"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.base?.toString()}
                placeholder="Base del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerBase(event)}
              />
            </div>
          </div>
          <div className="col-span-1 mt-2">
            <div className="w-3/4 mt-2 mx-auto">
              <label htmlFor="containerDeep" className="ml-1">Profundidad del tanque:</label>
              <input
                type="number"
                name="containerDeep"
                id="containerDeep"
                className="p-2 w-full border rounded-md mt-2"
                value={props.figure.deep?.toString()}
                placeholder="Profundidad del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerDeep(event)}
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
                value={props.figure.height?.toString()}
                placeholder="Altura del tanque"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChangeContainerHeight(event)}
              />
            </div>
          </div>
        </>
      }
      {
        figureType &&
        <div className="col-span-2 mt-2">
          <div className="flex w-1/4 mt-2 mx-auto justify-center">
            <a
              href="#"
              className="rounded-full w-full bg-green-600 h-10 text-white font-bold flex justify-center pt-2"
              onClick={(event: React.MouseEvent) => handleOnClickAddContainer(event)}
            >
              <i className="small material-icons" aria-hidden="true">add</i>
              Añadir tanque
            </a>
          </div>
        </div>
      }
    </div>
  )
}
