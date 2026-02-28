import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import LabsSection from '@/components/home/LabsSection';
import TimelineSection from '@/components/home/TimelineSection';
import CtaSection from '@/components/home/CtaSection';
import ScrollSequenceBackground from '@/components/home/ScrollSequenceBackground';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-0">
      <ScrollSequenceBackground />
      <HeroSection />
      <MissionSection />
      <LabsSection />
      <TimelineSection />
      <CtaSection />
    </div>
  );
}
