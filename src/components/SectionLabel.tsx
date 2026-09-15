import React from 'react';

interface SectionLabelProps {
  text: string;
  subtext?: string;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, subtext, light = false }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`h-[1px] w-8 ${light ? 'bg-[#ECE7DE]/40' : 'bg-[#C5A880]/60'}`} />
      <span
        className={`text-xs font-mono tracking-[0.25em] uppercase ${
          light ? 'text-[#ECE7DE]/80' : 'text-[#C5A880]'
        }`}
      >
        {text}
      </span>
      {subtext && (
        <span className="text-xs font-mono tracking-widest text-[#8A867E] uppercase">
          / {subtext}
        </span>
      )}
    </div>
  );
};
