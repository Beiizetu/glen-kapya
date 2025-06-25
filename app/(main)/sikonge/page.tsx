// app/sikonge/page.tsx

import { SikongeInfobox } from "@/components/SikongeInfobox";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

// Helper component for blue links to reduce repetition
const WikiLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-blue-600 hover:underline">
    {children}
  </Link>
);

export default function SikongePage() {
  return (
    <main className="container mx-auto p-4 md:p-8 bg-white font-sans">
      <h1 className="text-3xl font-serif border-b border-gray-300 pb-2 mb-4">
        Sikonge District
      </h1>

      <div className="text-base leading-relaxed">
        <SikongeInfobox />

        <p className="mb-4">
          <b>Sikonge District</b> is one of the seven <WikiLink href="#">districts</WikiLink> of the <WikiLink href="#">Tabora Region</WikiLink> of <WikiLink href="#">Tanzania</WikiLink>. The town of <WikiLink href="#">Sikonge</WikiLink> is the administrative seat. The district has an area of 27,873 square kilometres (10,762 sq mi), but 26,834 square kilometres (10,361 sq mi) of it is in forest and game reserves.<sup className="text-blue-600"><WikiLink href="#">[1]</WikiLink></sup> It is bordered to the northwest by <WikiLink href="#">Urambo District</WikiLink>, to the north by <WikiLink href="#">Uyui District</WikiLink>, to the east by <WikiLink href="#">Manyoni District</WikiLink> of <WikiLink href="#">Singida Region</WikiLink>, to the south by <WikiLink href="#">Chunya District</WikiLink> of <WikiLink href="#">Mbeya Region</WikiLink>, and to the southwest by <WikiLink href="#">Mlele District</WikiLink> of <WikiLink href="#">Katavi Region</WikiLink>.<sup className="text-blue-600"><WikiLink href="#">[1]</WikiLink></sup>
        </p>

        <p className="mb-4">
          As of 2002, the population of Sikonge District was 133,388.<sup className="text-blue-600"><WikiLink href="#">[2]</WikiLink></sup>
        </p>
        
        <p className="mb-4">
          According to the 2012 Tanzania National Census, the population of Sikonge District was 179,883.<sup className="text-blue-600"><WikiLink href="#">[3]</WikiLink></sup> By 2022, the population had increased to 335,686.<sup className="text-blue-600"><WikiLink href="#">[4]</WikiLink></sup>
        </p>

        <SectionHeader title="History" />
        <p className="mb-4">
          Sikonge District was gazetted in July 1996, but didn't officially start to function as a district until 1997. The area had previously been the Sikonge Division of Tabora District.<sup className="text-blue-600"><WikiLink href="#">[1]</WikiLink></sup>
        </p>

        <SectionHeader title="Transport" />
        <p className="mb-4">
          Unpaved Trunk road T8 from <WikiLink href="#">Tabora</WikiLink> to <WikiLink href="#">Mbeya</WikiLink> passes through the district. At the village of <WikiLink href="#">Ipole</WikiLink> unpaved trunk road T23 to <WikiLink href="#">Mpanda</WikiLink> branches off.<sup className="text-blue-600"><WikiLink href="#">[5]</WikiLink></sup>
        </p>
        <p className="mb-4">
          The Tanzanian <WikiLink href="#">Central Line</WikiLink> train - from <WikiLink href="#">Dar es Salaam</WikiLink> to <WikiLink href="#">Kigoma</WikiLink> - passes through a small portion of the northern part of the district.
        </p>

        <SectionHeader title="Administrative divisions" />
        <p className="mb-4">
          Sikonge District is administratively divided into two divisions, Sikonge Division and Kiwere Division. Its eleven wards encompass the town of Sikonge, fifty-two villages and 230 hamlets.<sup className="text-blue-600"><WikiLink href="#">[1]</WikiLink></sup> Sikonge District has a single electoral constituency, <b>Sikonge Constituency</b>, and thus only one <WikiLink href="#">member</WikiLink> in the <WikiLink href="#">National Assembly</WikiLink>.<sup className="text-blue-600"><WikiLink href="#">[1]</WikiLink></sup>
        </p>
        <p className="mb-4">
          As of 2012, <b>Sikonge District</b> was administratively divided into 17 <WikiLink href="#">wards</WikiLink>.<sup className="text-blue-600"><WikiLink href="#">[3]</WikiLink></sup>
        </p>

        <div className="border-b border-gray-300 pb-1 mb-4 mt-6 flex justify-between items-baseline">
          <h3 className="text-xl font-serif">Wards</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8">
          <ul className="list-disc list-inside">
            <li>Chabutwa</li>
            <li>Igigwa</li>
            <li>Ipole</li>
            <li>Kaloleli</li>
            <li>Kiloli</li>
            <li>Kipanga</li>
            <li>Kipili</li>
            <li>Kisanga</li>
            <li>Kitunda<sup className="text-blue-600"><WikiLink href="#">[6]</WikiLink></sup></li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Misheni</li>
            <li>Mole</li>
            <li>Mpombwee</li>
            <li>Ngoywa</li>
            <li>Pangale</li>
            <li><WikiLink href="#">Sikonge</WikiLink></li>
            <li>Tutuo</li>
            <li>Usunga</li>
          </ul>
        </div>
      </div>
    </main>
  );
}