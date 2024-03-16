import { Toolbar } from '../toolbar/toolbar';
import CardsDemo from './cards';
import { Connect } from './connect';
import { Footer } from './footer';
import { HeroHeader } from './hero-header';

export const HomePage = () => {
  return (
    <>
      <Toolbar />
      <div className="container flex flex-col gap-12 ">
        <HeroHeader />
        <CardsDemo />
        <Connect />
        <Footer />
      </div>
    </>
  );
};
