const COLOR = "#0EA5E9";

const RULES_GENERAL = [
  "Merci de ne pas ramener votre restauration / boisson de l'extérieur",
  "Merci de ne pas déplacer le mobilier (nous consulter avant obligatoirement)",
  "Les chaussettes sont obligatoires pour tous : enfants ET adultes. En cas d'oubli, chaussettes en vente à l'accueil à 1 €",
];

const RULES_KIDS = [
  "remonter le toboggan et la piste de bouées à l'envers",
  "sortir les balles ou tout autre jeu des structures",
  "interdit aux enfants de plus de 4 ans de se rendre dans l'espace 1–3 ans (même pour « accompagner » les plus petits)",
  "manger ou boire dans les jeux",
  "se rendre sur la piste de bumper sans jeton",
  "utiliser les petites motos à l'intérieur des structures et qu'elles ne sont pas autorisées aux plus de 4 ans",
  "d'avoir une agressivité verbale ou physique envers quiconque",
];

export default function InfosUtilesContent() {
  return (
    <div className="font-nunito text-gray-700 space-y-5 leading-relaxed">
      <p>
        <span className="font-semibold text-gray-900">Wifi gratuite</span>, le QR-code d&apos;accès est disponible à l&apos;accueil.
      </p>
      <p>
        <span className="font-semibold text-gray-900">Jeux de société</span> disponibles à l&apos;accueil (en échange d&apos;une pièce d&apos;identité).
      </p>
      <p>
        <span className="font-semibold text-gray-900">
          Magazines à disposition et bibliothèque participative
        </span>{" "}
        (donnez un livre, emmenez un livre).
      </p>

      <div className="pt-3">
        <h3 className="font-fredoka text-xl md:text-2xl font-extrabold" style={{ color: COLOR }}>
          Les règles importantes :
        </h3>
        <p className="italic text-gray-500 text-sm mt-1">
          (le règlement intérieur est consultable à l&apos;entrée du parc)
        </p>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        {RULES_GENERAL.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <p className="pt-2">
        Les enfants sont sous la responsabilité des adultes accompagnants, merci de leur rappeler qu&apos;il est interdit de :
      </p>

      <ul className="list-disc pl-5 space-y-2">
        {RULES_KIDS.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <p
        className="font-fredoka text-xl md:text-2xl font-extrabold text-center pt-4"
        style={{ color: COLOR }}
      >
        Merci à tous ! 💙
      </p>
    </div>
  );
}
