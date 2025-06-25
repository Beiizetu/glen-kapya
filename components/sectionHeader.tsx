// components/SectionHeader.tsx

interface SectionHeaderProps {
    title: string;
  }
  
  export const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
      <div className="border-b border-gray-300 pb-1 mb-4 mt-6 flex justify-between items-baseline">
        <h2 className="text-2xl font-serif">{title}</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">[edit]</a>
      </div>
    );
  };