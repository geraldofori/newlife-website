import HeroSection from "@/components/ui/sections/HeroSection";
import LifeProcessSection from "@/components/ui/sections/LifeProcessSection";
import SermonSection from "@/components/ui/sections/SermonSection";
import UpcomingSection from "@/components/ui/sections/UpcomingSection";
import WeeklySection from "@/components/ui/sections/WeeklySection";
import WelcomeSection from "@/components/ui/sections/WelcomeSection";

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
