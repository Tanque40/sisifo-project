import LateralNav from "@/components/container-check/lateral-nav/lateral-nav.component";
import { ContainerFormInterface, ContainerForm } from "@/interface/container-check/container-check.interface";

export default function ContainerCheck() {
  const figures: ContainerFormInterface[] = [
    {
      name: "Figura de prueba",
      form: ContainerForm.CYLINDER,
      selected: false,
    },
    {
      name: "Figura de prueba 2",
      form: ContainerForm.CYLINDER,
      selected: false,
    }
  ]

  return (
    <main className="grid grid-cols-6">
      <div className="col-span-5">
        <div className="h-full container mx-auto p-10">
          <div className="border-2 h-full rounded-xl border-gray-500 shadow-lg p-8">
            Form de figura
            <br />
            Cálculos a hacer
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <LateralNav figures={figures} />
      </div>
    </main>
  )
}
