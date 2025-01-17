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
    volume: Number.NaN,
    selected: false
  })
  const figures: MutableRefObject<ContainerFormInterface[]> = useRef<ContainerFormInterface[]>(new Array<ContainerFormInterface>())

  const addNewFigure = (figure: ContainerFormInterface) => {
    console.log(figure);

    let volume = -1;
    switch (figure.form) {
      case ContainerForm.CYLINDER:
        volume = Math.PI * (figure.radius ? figure.radius : 1) * (figure.height ? figure.height : 1)
        break;
      case ContainerForm.CIRCULAR:
        volume = (4 / 3) * Math.PI * Math.pow((figure.radius ? figure.radius : 1), 3)
        break;
      case ContainerForm.SQUARE:
        volume = Math.pow((figure.height ? figure.height : 1), 3)
        console.log(figure.volume);

        break;
      case ContainerForm.RECTANGULAR:
        volume = (figure.base ? figure.base : 1) * (figure.deep ? figure.deep : 1) * (figure.height ? figure.height : 1)
        break;
    }

    if (volume)
      volume = Math.round(volume * 100) / 100

    setNewFigure({
      ...figure,
      volume
    })

    console.log(volume);

    figures.current.push(figure)
    console.log(figure);
  }

  return (
    <main className="grid grid-cols-12">
      <div className="col-span-9">
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
      <div className="col-span-3">
        <LateralNav figures={figures.current} />
      </div>
    </main>
  )
}
