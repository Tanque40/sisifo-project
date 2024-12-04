"use client"
import { useState } from "react";

import ContainerData from "@/components/container-check/container-data/container-data.component";
import FigureForm from "@/components/container-check/figure-form/figure-form.component";
import LateralNav from "@/components/container-check/lateral-nav/lateral-nav.component";
import { ContainerFormInterface, ContainerForm } from "@/interface/container-check/container-check.interface";

export default function ContainerCheck() {
  const [newFigure, setNewFigure] = useState<ContainerFormInterface>({
    name: '',
    form: ContainerForm.CIRCULAR,
    selected: false
  })
  const figures: ContainerFormInterface[] = []

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
                <h2 className="text-lg font-semibold">
                  Añadir tanque
                </h2>
                <FigureForm figure={newFigure} setFigure={setNewFigure} />
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
        <LateralNav figures={figures} />
      </div>
    </main>
  )
}
