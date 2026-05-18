import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationLibreDetails from "@/components/billetterie/anniversaire/ReservationLibreDetails";

export const metadata = {
  title: "Détails de réservation · Formule Libre · Ludykid",
  description: "Personnalisez votre anniversaire Formule Libre : photo souvenir, kit assiette, animation et bonbons en option.",
};

export default async function ReservationLibrePage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; slot?: string; end?: string; participants?: string }>;
}) {
  const params = await searchParams;
  const date = params.date ?? new Date().toISOString().split("T")[0];
  const slot = params.slot ?? "10:00";
  const slotEnd = params.end ?? "12:30";
  const participants = Math.min(15, Math.max(8, parseInt(params.participants ?? "8", 10)));

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-28 pb-4" />
      <ReservationLibreDetails
        date={date}
        slot={slot}
        slotEnd={slotEnd}
        participants={participants}
      />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
