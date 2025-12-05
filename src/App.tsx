import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import QuickLinksBar from "./components/QuickLinksBar";
import { SocialSidebar } from "./components/SocialSidebar";
import { LeadershipMessages } from "./components/LeadershipMessages";
import { NewsAndEventsSection } from "./components/NewsAndEventsSection";
import { SchoolsSection } from "./components/SchoolsSection";
import { ResearchSection } from "./components/ResearchSection";
import { MediaGallery } from "./components/MediaGallery";
import QuickFacts from "./components/QuickFacts";
import { CampusActivities } from "./components/CampusActivities";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <SocialSidebar />
      <Navbar />
      <HeroSlider />
      <QuickLinksBar />
      <LeadershipMessages />
      <NewsAndEventsSection />
      <SchoolsSection />
      <ResearchSection />
      <MediaGallery />
      <QuickFacts />
      <CampusActivities />
      <Footer />
    </div>
  );
}
