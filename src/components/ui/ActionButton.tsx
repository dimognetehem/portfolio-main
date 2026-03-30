import { HoverBorderGradient } from "./HoverBorderGradient";

export function ActionButton() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 text-center">
      <a href="mailto:dimognetehem@gmail.com" target="_blank" rel="noopener noreferrer">
        <HoverBorderGradient
          containerClassName="mt-4"
          style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
          className="text-inherit flex items-center space-x-2 bg-white/10 backdrop-blur-md"
        >
          <span>Get in touch</span>
        </HoverBorderGradient>
      </a>

      <a href="/CV_Emmanuel_Franck_Dimogne_Tehem_2026.pdf" target="_blank" rel="noopener noreferrer">
        <HoverBorderGradient
          containerClassName="mt-4"
          style={{
            boxShadow: "0 4px 30px rgba(37, 99, 235, 0.35)",
            ["--color-button-accent" as string]: "147, 197, 253",
          }}
          className="flex items-center space-x-2 bg-blue-600 text-white"
        >
          <span>Download CV</span>
        </HoverBorderGradient>
      </a>
    </div>
  );
}
