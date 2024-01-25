import gsmarena from "gsmarena-api"

export default async function page(){

    const devices = await await gsmarena.catalog.getBrands();;
    const brands = devices.map((device: any) => device.name);

    return <div>
    <label
      htmlFor="countries"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Brands
    </label>
    <select
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option defaultValue={"none"}>Choose a Brand</option>
      {brands.map((brand: any) => (
        <option value={brand}>{brand}</option>
      ))}
    </select>
  </div>
}