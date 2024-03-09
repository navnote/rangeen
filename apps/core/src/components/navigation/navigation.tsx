// import { buttonVariants } from '@rangeen/shadcn-ui';

import { buttonVariants } from '@rangeen/shadcn-ui';
import { Github, Globe } from 'lucide-react';
import { RangeenLogo } from '../RangeenLogo';

export const Navigation = () => {
  return (
    <div className="pr-4 flex place-content-between border-b border-border">
      <a
        href="/"
        className="mr-6 flex items-center justify-center space-x-2 text-2xl text-primary hover:text-gray-700 p-4"
      >
        <RangeenLogo className="w-12 h-12 fill-primary" />
        <span className="font-bold">RANGEEN</span>
      </a>
      <nav className="flex items-center gap-6 text-sm">
        <a
          href="https://github.com/navnote/rangeen"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'default' })}
        >
          <div className="flex gap-2 items-center">
            <Github className="w-6 h-6" />
            <span className="hidden md:inline-block text-primary-foreground text-sm">
              Rangeen
            </span>
          </div>
        </a>
        <a
          href="https://navnote.com/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'default' })}
        >
          <div className="flex gap-2 items-center">
            <Globe className="w-6 h-6" />
            <span className="hidden md:inline-block text-primary-foreground text-sm">
              Navjot Ahuja
            </span>
          </div>
        </a>
      </nav>
    </div>
  );
};
