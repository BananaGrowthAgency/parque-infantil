import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationDetails from "@/components/billetterie/anniversaire/ReservationDetails";

export const metadata = {
  title: "Détails de réservation · Formule MaxiLudy · Ludykid",
  description: "Personnalisez votre anniversaire MaxiLudy : gâteau, animation, kit assiette et options.",
};

export default async function ReservationPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; slot?: string; end?: string; participants?: string }>;
}) {
  const params = await searchParams;
  const date = params.date ?? new Date().toISOString().split("T")[0];
  const slot = params.slot ?? "10:00";
  const slotEnd = params.end ?? "12:30";
  const participants = Math.min(15, Math.max(4, parseInt(params.participants ?? "4", 10)));

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-28 pb-4" />
      <ReservationDetails
        date={date}
        slot={slot}
        slotEnd={slotEnd}
        participants={participants}
      />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
