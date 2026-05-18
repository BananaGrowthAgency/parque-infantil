import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationLudynightDetails from "@/components/billetterie/anniversaire/ReservationLudynightDetails";

export const metadata = {
  title: "Réservation Ludynight · Ludykid",
  description: "Confirmez votre réservation pour la Ludynight chez Ludykid Le Mans.",
};

export default async function ReservationLudynightPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; slot?: string; end?: string; participants?: string }>;
}) {
  const params = await searchParams;
  const date = params.date ?? new Date().toISOString().split("T")[0];
  const slot = params.slot ?? "19:30";
  const participants = Math.max(15, parseInt(params.participants ?? "15", 10));

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-28 pb-4" />
      <ReservationLudynightDetails
        date={date}
        slot={slot}
        participants={participants}
      />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
