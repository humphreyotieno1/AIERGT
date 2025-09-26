import { Metadata } from 'next';
import OurStorySection from '@/components/sections/about/OurStorySection';
import MissionVisionSection from '@/components/sections/about/MissionVisionSection';
import OrganizationalStructureSection from '@/components/sections/about/OrganizationalStructureSection';
import ValuesSection from '@/components/sections/about/ValuesSection';

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
