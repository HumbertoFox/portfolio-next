import AboutComponent from '@/components/about';
import HeaderComponent from '@/components/header';
import ProjectComponent from '@/components/projects';
import SkillsComponent from '@/components/skills';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center gap-5 font-[family-name:var(--font-geist-sans)] p-2 mx-auto">
      <HeaderComponent />
      <StartComponent />
      <AboutComponent />
      <SkillsComponent />
      <ProjectComponent />
    </div>
  );
}
