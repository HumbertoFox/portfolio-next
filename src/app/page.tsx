import AboutComponent from '@/components/about';
import HeaderComponent from '@/components/header';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center font-[family-name:var(--font-geist-sans)] p-2 mx-auto">
      <HeaderComponent />
      <StartComponent />
      <AboutComponent />
    </div>
  );
}
