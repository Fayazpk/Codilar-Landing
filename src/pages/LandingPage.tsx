import Introsection from "../components/Introsection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import MethodologySection from "../components/MethodologySection";
import ExpertiseSection from "../components/ExpertiseSection";
import PerformanceSection from "../components/PerformanceSection";
import SuccessSection from "../components/SuccessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NexPwaSection from "../components/NexPwaSection";
import ContactSection from "../components/ContactSection";

const LandingPage = () => {
  return (
    <div>
      <Introsection />
      <AboutSection />
      <ProjectsSection />
      <MethodologySection />
      <ExpertiseSection />
      <PerformanceSection />
      <SuccessSection />
      <TestimonialsSection />
      <NexPwaSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;