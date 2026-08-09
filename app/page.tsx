import SiteHeader from "@/components/SiteHeader";
import Garage from "@/components/Garage";
import CompareTray from "@/components/CompareTray";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1180px] px-6 pb-40 2xl:max-w-[1480px]">
        <Garage />
      </main>
      <SiteFooter />
      <CompareTray />
    </>
  );
}
