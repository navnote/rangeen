import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
  buttonVariants,
} from '@rangeen/shadcn-ui';
import { cn } from '@rangeen/shadcn-utils';
import { CheckIcon, CodeIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { useThemeContext } from '../../core/theme/context';
import { RangeenThemeSchema } from '../../core/theme/types';
import { getCssVarName } from '../../core/theme/utils';

export const Code = () => {
  const { rangeenTheme } = useThemeContext();

  const lightValues = Object.keys(rangeenTheme.light).map((key) => {
    const value = rangeenTheme.light[key as keyof RangeenThemeSchema];
    return [getCssVarName(key), value];
  });

  const darkValues = Object.keys(rangeenTheme.light).map((key) => {
    const value = rangeenTheme.light[key as keyof RangeenThemeSchema];
    return [`${getCssVarName(key)}-dark`, value];
  });

  const code = `
  :root {
  ${lightValues
    .map(([key, value]) => {
      return `\t\t${key}: ${value};`;
    })
    .join('\n')}
  }
  
  .dark {
  ${darkValues
    .map(([key, value]) => {
      return `\t\t${key}: ${value};`;
    })
    .join('\n')}
  }
    `;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col items-center  justify-center gap-1">
          <div
            className={cn(
              buttonVariants({
                size: 'icon',
                variant: 'ghost',
              }),
              `h-[34px] w-[36px] border border-gray-400 hover:bg-gray-500 hover:text-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-gray-100`,
            )}
          >
            <CodeIcon className="h-4 w-4" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Shadcn Theme</span>
            <Button
              type="submit"
              size="icon"
              onClick={handleCopy}
              className="h-6 w-6"
            >
              <span className="sr-only">Copy</span>
              {copied ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </Button>
          </DialogTitle>
          <DialogDescription>
            <ScrollArea className="h-[60vh] ">
              <div className="whitespace-pre-wrap text-left">{code}</div>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
