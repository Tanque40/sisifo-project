export default function ContainerData() {
  return (
    <div>
      ContainerData
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

            placeholder="Diferencial de volumen"

          />
        </div>
      </div>
    </div>
  )
}
