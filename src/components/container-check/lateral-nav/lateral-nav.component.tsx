import { ContainerFormInterface } from "@/interface/container-check/container-check.interface"

interface LateralNavProps {
  figures: ContainerFormInterface[]
}

export default function LateralNav(props: LateralNavProps) {
  return (
    <div className="flex flex-col border-2 border-l-black h-screen justify-center">
      {props.figures.map((figure: ContainerFormInterface, index) => (
        <a
          key={index}
          type="button"
          className="border-2 border-t-black border-b-black w-full  pb-6 pt-5 mb-2 text-center overflow-hidden"
        >
          <span className="font-semibold">
            {figure.name}
          </span>
          <br />
          {`volumen: ${figure.volume}`}
        </a>
      ))}
    </div>
  )
}
