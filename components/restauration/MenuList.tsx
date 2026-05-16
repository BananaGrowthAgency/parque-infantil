import type { Item } from "./data";

export default function MenuList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-gray-100">
      {items.map((item, idx) => (
        <li key={idx} className="py-3">
          <div className="flex justify-between items-baseline gap-6">
            <div className="font-nunito text-gray-800 flex-1 min-w-0">
              <span className="font-semibold">{item.name}</span>
              {item.note && <span className="italic text-gray-500"> {item.note}</span>}
            </div>
            {item.price && (
              <span className="font-fredoka font-bold text-gray-700 whitespace-nowrap">
                {item.price}
              </span>
            )}
            {item.prices && (
              <div className="flex flex-col items-end gap-0.5 shrink-0">
                {item.prices.map((p, pIdx) => (
                  <span key={pIdx} className="whitespace-nowrap text-sm">
                    <span className="font-nunito text-gray-500">{p.size} : </span>
                    <span className="font-fredoka font-bold text-gray-700">{p.price}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
          {item.subnote && (
            <div className="font-nunito italic text-gray-400 text-sm mt-1">
              {item.subnote}
            </div>
          )}
          {item.variants && (
            <ul className="mt-2 pl-4 space-y-1 border-l-2 border-gray-100">
              {item.variants.map((v, vIdx) => (
                <li key={vIdx} className="font-nunito text-gray-700 text-sm">
                  <span className="font-semibold">{v.name}</span>
                  {v.description && (
                    <span className="italic text-gray-500"> : {v.description}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          {item.supplements?.map((sup, sIdx) => (
            <div
              key={sIdx}
              className="flex justify-between items-baseline gap-4 mt-1.5 pl-4 border-l-2 border-gray-100"
            >
              <span className="font-nunito text-gray-600 text-sm italic">{sup.name}</span>
              <span className="font-fredoka font-semibold text-gray-600 text-sm whitespace-nowrap">
                {sup.price}
              </span>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}
