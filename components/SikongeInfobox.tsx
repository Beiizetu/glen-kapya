// components/SikongeInfobox.tsx

import Image from 'next/image';

export const SikongeInfobox = () => {
  return (
    <aside className="float-right w-64 ml-6 mb-4 border border-gray-300 bg-gray-50 text-sm">
      <div className="text-center bg-gray-200 p-2">
        <h2 className="font-bold text-lg">Sikonge District</h2>
        <p>District</p>
      </div>
      <div className="p-2">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Tabora-Sikonge.svg" // Path to your image in the public folder
          alt="Map of Sikonge District in Tabora Region"
          width={250}
          height={200}
          className="w-full object-contain"
        />
      </div>
      <table className="w-full">
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-2 font-semibold">Country</td>
            <td className="p-2">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/4/48/Tabora-Sikonge.svg" alt="Tanzania Flag" width={23} height={15} className="inline-block mr-2" />
              Tanzania
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-2 font-semibold">Region</td>
            <td className="p-2">Tabora Region</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-2 font-semibold" colSpan={2}>Area</td>
          </tr>
          <tr>
            <td className="p-2 pl-4">• Total</td>
            <td className="p-2">26,278 km<sup>2</sup> (10,146 sq mi)</td>
          </tr>
           <tr className="border-t border-gray-300">
            <td className="p-2 font-semibold" colSpan={2}>Population <span className="font-normal">(2022 census)</span></td>
          </tr>
          <tr>
            <td className="p-2 pl-4">• Total</td>
            <td className="p-2">335,686</td>
          </tr>
          <tr>
            <td className="p-2 pl-4">• Density</td>
            <td className="p-2">13/km<sup>2</sup> (33/sq mi)</td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};