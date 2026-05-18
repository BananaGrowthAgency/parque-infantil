import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationLudykidDetails from "@/components/billetterie/anniversaire/ReservationLudykidDetails";

export const metadata = {
  title: "Détails de réservation · Formule Ludykid · Ludykid",
  description: "Personnalisez votre anniversaire Ludykid : gâteau, animation, bonbons, photo souvenir et kit assiette.",
};

export default async function ReservationLudykidPage({
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
      <ReservationLudykidDetails
        date={date}
        slot={slot}
        slotEnd={slotEnd}
        participants={participants}
      />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
