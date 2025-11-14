import HeroSection from "@/components/ui/home/sections/HeroSection";
import LifeProcessSection from "@/components/ui/home/sections/LifeProcessSection";
import SermonSection from "@/components/ui/home/sections/SermonSection";
import UpcomingSection from "@/components/ui/home/sections/UpcomingSection";
import WeeklySection from "@/components/ui/home/sections/WeeklySection";
import WelcomeSection from "@/components/ui/home/sections/WelcomeSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <WelcomeSection/>
    <WeeklySection/>
    <SermonSection/>
    <UpcomingSection/>
    <LifeProcessSection/>
    </>
  );
}
