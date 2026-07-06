import type { ComponentProps } from "react";

export default function AfricaMap({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full text-[#D4AF37]/20 stroke-[#D4AF37]/40 stroke-[1.2] ${className}`}
      {...props}
    >
      {/* North / West Africa Regions */}
      <path id="MA" name="Morocco" d="M80 65l10-2 2 4-5 3-7-5z" />
      <path id="DZ" name="Algeria" d="M87 67l15-5 12 10-2 15-20-4-5-16z" />
      <path id="LY" name="Libya" d="M114 72l18 2 2 16-16 4-6-22z" />
      <path id="EG" name="Egypt" d="M132 74l18 1v20l-17 1-1-22z" />
      <path id="ML" name="Mali" d="M72 85l15-7 6 12-11 11-10-16z" />
      <path id="NE" name="Niger" d="M93 90l16-4 3 13-13 3-6-12z" />
      <path id="CH" name="Chad" d="M114 93l14 1 2 17-14 1-2-19z" />
      <path id="SD" name="Sudan" d="M130 95l16-1 5 18-17 2-4-19z" />

      {/* East & Central Africa */}
      <path id="ET" name="Ethiopia" d="M149 111l13 4-2 13-10-1-1-16z" />
      <path id="SO" name="Somalia" d="M162 115l6 10-10 11-1-13 5-8z" />
      <path id="CD" name="DR Congo" d="M115 132l16-3 4 18-18 2-2-17z" />
      <path id="KE" name="Kenya" d="M136 131l10 2-2 10-7-1-1-11z" />
      <path id="TZ" name="Tanzania" d="M134 142l11 2-4 13-9-2 2-13z" />
      <path id="AO" name="Angola" d="M106 150l15 1-1 16-11-2-3-15z" />

      {/* South Africa Region & Madagascar */}
      <path id="ZA" name="South Africa" d="M115 190l16-2 3 16-17-1-2-13z" />
      {/* Madagascar Island (Beautifully isolated on the bottom right) */}
      <path 
        id="MG" 
        name="Madagascar" 
        d="M152 168l4-8 5 11-5 10-4-13z" 
        className="hover:fill-[#D4AF37]/20 transition-colors"
      />

      {/* --- NIGERIA TARGET LOCATION --- */}
      {/* Perfectly scoped with high visibility borders & target layout classes */}
      <path
        id="NG"
        name="Nigeria"
        d="M97 114l14-2 3 10-12 4-5-12z"
        className="v-nigeria-country-shape fill-[#D4AF37]/15 stroke-[#D4AF37] stroke-[2.5]"
      />
    </svg>
  );
}