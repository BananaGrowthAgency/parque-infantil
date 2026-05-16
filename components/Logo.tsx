import Image from "next/image";

const heights = { sm: 40, md: 60, lg: 88 };

export default function Logo({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const h = heights[size];
  return (
    <Image
      src="/images/logo.jpeg"
      alt="Ludykid"
      width={h * 3}
      height={h}
      priority
      className="select-none object-contain rounded-clay"
      style={{ height: h, width: "auto", display: "block" }}
    />
  );
}
