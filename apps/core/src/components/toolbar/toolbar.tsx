import { Button, Separator } from '@rangeen/shadcn-ui';
import { LightbulbIcon, MoonIcon } from 'lucide-react';
import { useThemeContext } from '../../core/theme/context';
import { ColorPicker } from '../color-picker/color-picker';
import { Code } from './code';

export const Toolbar = () => {
  const { primary, setPrimary, isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <div className="fixed bottom-12 z-10 w-full ">
      <div className="container flex items-center justify-center ">
        <div className="lg:1/4 flex w-full rounded-3xl bg-black/[0.7] p-4 text-white shadow-lg backdrop-blur-sm md:w-1/2 dark:bg-white/[0.7] dark:text-black ">
          <div className="transform: -rotate-90">
            <span className="text-xs">Toolbar</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <ColorPicker
              color={primary}
              setColor={setPrimary}
              label={'Primary Color'}
            />
            <Separator
              orientation="vertical"
              className="h-8 text-white dark:text-black"
            />
            <div className="flex flex-col items-center  justify-center gap-1">
              <Button
                size={'icon'}
                variant={'ghost'}
                className={`h-[34px] w-[36px] border border-gray-400 hover:bg-gray-500 hover:text-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-gray-100`}
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode && <LightbulbIcon className="h-4 w-4" />}
                {!isDarkMode && <MoonIcon className="h-4 w-4" />}
              </Button>
            </div>
            <Code />
          </div>
        </div>
      </div>
    </div>
  );
};
