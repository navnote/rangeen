// import { buttonVariants } from '@rangeen/shadcn-ui';

import { buttonVariants } from '@rangeen/shadcn-ui';
import { Github, Globe } from 'lucide-react';
import { RangeenLogo } from '../RangeenLogo';

export const Navigation = () => {
  return (
    <div className="border-border flex place-content-between border-b pr-4">
      <a
        href="/"
        className="text-primary mr-6 flex items-center justify-center space-x-2 p-4 text-2xl hover:text-gray-700"
      >
        <RangeenLogo className="fill-primary h-12 w-12" />
        <span className="font-bold">RANGEEN</span>
      </a>
      <nav className="flex items-center gap-6 text-sm">
        <a
          href="https://github.com/navnote/rangeen"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'default' })}
        >
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span className="text-primary-foreground hidden text-sm md:inline-block">
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
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="text-primary-foreground hidden text-sm md:inline-block">
              Navjot Ahuja
            </span>
          </div>
        </a>
      </nav>
    </div>
  );
};
