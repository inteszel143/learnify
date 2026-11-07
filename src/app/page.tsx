import { HomeSection } from "@/components/home/home-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { CoursesSection } from "@/components/courses/courses-section";
import { TrustSection } from "@/components/home/trust-section";
import { StoriesSection } from "@/components/stories/stories-section";
import { FaqSection } from "@/components/faq/faq-section";
import { LearningCtaSection } from "@/components/home/learning-cta-section";
import { InstructorsSection, BlogSection, ContactSection } from "@/components/home/discover-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HomeSection />
      <CategoriesSection />
      <TrustSection />
      <CoursesSection />
      <InstructorsSection />
      <StoriesSection />
      <BlogSection />
      <FaqSection />
      <ContactSection />
      <LearningCtaSection />
      <Footer />
    </>
  );
}
