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
    <div className="bg-primary text-primary-foreground mb-44 flex flex-col items-center gap-4 rounded-2xl py-12  shadow-lg">
      <div className="text-primary-foreground text-2xl">
        Made with ❤ by{' '}
        <a
          href="https://navnote.com/"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'text-primary-foreground p-0 text-2xl ',
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
            <LinkedinIcon className="h-6 w-6" />
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
            <GithubIcon className="h-6 w-6" />
          </Button>
        </a>
        <a href="https://twitter.com/navnote" target="_blank" rel="noreferrer">
          <Button
            size="icon"
            className="text-primary-foreground"
            variant={'ghost'}
          >
            <TwitterIcon className="h-6 w-6" />
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
            <YoutubeIcon className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </div>
  );
};
