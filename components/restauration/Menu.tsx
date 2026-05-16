import type { Section } from "./data";
import MenuList from "./MenuList";

export default function Menu({ sections, color }: { sections: Section[]; color: string }) {
  return (
    <div className="space-y-7">
      {sections.map((section, i) => {
        if (section.kind === "items") {
          return <MenuList key={i} items={section.items} />;
        }
        if (section.kind === "group") {
          return (
            <div key={i}>
              <h3
                className="font-fredoka text-lg md:text-xl font-extrabold mb-1"
                style={{ color }}
              >
                {section.title} :
              </h3>
              <MenuList items={section.items} />
            </div>
          );
        }
        // formule
        return (
          <div
            key={i}
            className="rounded-clay p-5 border-2 border-dashed"
            style={{ borderColor: color, backgroundColor: "#FAFAFA" }}
          >
            <div className="flex justify-between items-baseline gap-4 mb-2">
              <h3
                className="font-fredoka text-lg md:text-xl font-extrabold uppercase tracking-wide"
                style={{ color }}
              >
                {section.name}
              </h3>
              {section.price && (
                <span className="font-fredoka font-bold text-gray-700 whitespace-nowrap">
                  {section.price}
                </span>
              )}
            </div>
            {section.formula && (
              <p className="font-nunito text-gray-700 text-sm md:text-base">{section.formula}</p>
            )}
            {section.contents && (
              <ul className="mt-1 space-y-1 list-disc pl-5">
                {section.contents.map((c, idx) => (
                  <li key={idx} className="font-nunito text-gray-700 text-sm md:text-base">
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
