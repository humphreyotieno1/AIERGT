import { Metadata } from 'next';
import OurStorySection from '@/components/sections/about/our-story-section';
import MissionVisionSection from '@/components/sections/about/mission-vision-section';
import OrganizationalStructureSection from '@/components/sections/about/organizational-structure-section';
import ValuesSection from '@/components/sections/about/values-section';

export const metadata: Metadata = {
  title: 'About Us - AIERGT | Preparing Africa For Tomorrow',
  description: 'Learn about AIERGT\'s mission to transform Africa through environmental research, geospatial technology, and sustainable solutions. Discover our story, values, and organizational structure.',
  keywords: 'about AIERGT, environmental research Africa, geospatial technology, sustainable development, Africa transformation',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <OurStorySection />
      <MissionVisionSection />
      <OrganizationalStructureSection />
      <ValuesSection />
    </div>
  );
}
