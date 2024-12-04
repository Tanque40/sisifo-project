"use client"
import { MutableRefObject, useRef, useState } from "react";

import ContainerData from "@/components/container-check/container-data/container-data.component";
import FigureForm from "@/components/container-check/figure-form/figure-form.component";
import LateralNav from "@/components/container-check/lateral-nav/lateral-nav.component";
import { ContainerFormInterface, ContainerForm } from "@/interface/container-check/container-check.interface";

export default function ContainerCheck() {
  const [newFigure, setNewFigure] = useState<ContainerFormInterface>({
    name: '',
    form: ContainerForm.CIRCULAR,
    radius: Number.NaN,
    height: Number.NaN,
    base: Number.NaN,
    deep: Number.NaN,
    selected: false
  })
  const figures: MutableRefObject<ContainerFormInterface[]> = useRef<ContainerFormInterface[]>(new Array<ContainerFormInterface>())

  const addNewFigure = () => {
    console.log(newFigure);

    switch (newFigure.form) {
      case ContainerForm.CYLINDER:
        newFigure.volume = Math.PI * (newFigure.radius ? newFigure.radius : 1) * (newFigure.height ? newFigure.height : 1)
        break;
      case ContainerForm.CIRCULAR:
        newFigure.volume = (4 / 3) * Math.PI * Math.pow((newFigure.radius ? newFigure.radius : 1), 3)
        break;
      case ContainerForm.SQUARE:
        newFigure.volume = Math.pow((newFigure.height ? newFigure.height : 1), 3)
        console.log(newFigure.volume);

        break;
      case ContainerForm.RECTANGULAR:
        newFigure.volume = (newFigure.base ? newFigure.base : 1) * (newFigure.deep ? newFigure.deep : 1) * (newFigure.height ? newFigure.height : 1)
        break;
    }
    newFigure.volume = Math.round(newFigure.volume * 100) / 100
    figures.current.push(newFigure)
  }

  return (
    <main className="grid grid-cols-6">
      <div className="col-span-5">
        <div className="h-full container mx-auto p-10">
          <div className="border-2 h-full rounded-xl border-gray-500 shadow-lg p-8">
            <h1 className="text-xl font-semibold">
              Registro y revisión de contenedores
            </h1>
            <hr className="mt-5" />
            <div className="h-5/6 flex flex-col justify-between">
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-2">
                  Añadir tanque
                </h2>
                <span className="text-base font-medium">
                  Todas las medidas son en metros
                </span>
                <FigureForm
                  figure={newFigure}
                  setFigure={setNewFigure}
                  addFigure={addNewFigure}
                />
              </div>
              <div className="p-2">
                <h2 className="text-lg font-semibold">
                  Información del contenedor
                </h2>
                <ContainerData />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <LateralNav figures={figures.current} />
      </div>
    </main>
  )
}
