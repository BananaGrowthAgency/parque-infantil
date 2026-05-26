type WaveProps = {
  fill: string;
  bg?: string;
  flip?: boolean;
  flipY?: boolean;
};

export default function Wave({ fill, bg = "transparent", flip = false, flipY = false }: WaveProps) {
  const transforms = [flip ? "scaleX(-1)" : "", flipY ? "scaleY(-1)" : ""].filter(Boolean).join(" ");
  return (
    <div style={{ backgroundColor: bg, lineHeight: 0, transform: transforms || undefined }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 72 }}
        fill={fill}
      >
        <path d="M0,40 C180,80 360,0 540,50 C720,80 900,0 1080,45 C1260,80 1380,10 1440,35 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}
