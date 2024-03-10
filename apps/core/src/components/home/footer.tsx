import { Button, buttonVariants } from '@rangeen/shadcn-ui';
import { cn } from '@rangeen/shadcn-utils';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 items-center mb-44 bg-primary py-12 text-white rounded-2xl shadow-lg text-center">
      <div className="text-white text-2xl">
        Made with ❤ by{' '}
        <a
          href="https://navnote.com/"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'p-0 text-white hover:text-primary-foreground focus:text-primary-foreground variant={"ghost"} text-2xl'
          )}
        >
          Navjot Ahuja
        </a>
      </div>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/navjotahuja92/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="icon"
            className="text-primary-foreground"
            variant={'ghost'}
          >
            <LinkedinIcon className="w-6 h-6" />
          </Button>
        </a>
        <a
          href="https://www.github.com/navjotahuja92/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="icon"
            className="text-primary-foreground"
            variant={'ghost'}
          >
            <GithubIcon className="w-6 h-6" />
          </Button>
        </a>
        <a href="https://twitter.com/navnote" target="_blank" rel="noreferrer">
          <Button
            size="icon"
            className="text-primary-foreground"
            variant={'ghost'}
          >
            <TwitterIcon className="w-6 h-6" />
          </Button>
        </a>
        <a
          href="https://www.youtube.com/channel/UCd6mVF9TcwayERamiIx_5SQ"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="icon"
            className="text-primary-foreground"
            variant={'ghost'}
          >
            <YoutubeIcon className="w-6 h-6" />
          </Button>
        </a>
      </div>
    </div>
  );
};
