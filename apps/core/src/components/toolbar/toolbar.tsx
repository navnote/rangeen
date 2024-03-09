import { Button, Separator } from '@rangeen/shadcn-ui';
import { useThemeContext } from '../../core/theme/context';
import { ColorPicker } from '../color-picker/color-picker';
import { LightbulbIcon, MoonIcon } from 'lucide-react';
import { Code } from './code';

export const Toolbar = () => {
  const { primary, setPrimary, isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <div className="fixed w-full bottom-12 z-10 ">
      <div className="container flex items-center justify-center ">
        <div className="shadow-lg backdrop-blur-sm bg-black/[0.7] dark:bg-white/[0.7] text-white dark:text-black w-full md:w-1/2 lg:1/4 p-4 rounded-3xl flex ">
          <div className="transform: -rotate-90">
            <span className="text-xs">Toolbar</span>
          </div>
          <div className="flex gap-2 items-center justify-center flex-1">
            <ColorPicker
              color={primary}
              setColor={setPrimary}
              label={'Primary Color'}
            />
            <Separator
              orientation="vertical"
              className="text-white dark:text-black h-8"
            />
            <div className="flex flex-col gap-1  justify-center items-center">
              <Button
                size={'icon'}
                variant={'ghost'}
                className={`w-[36px] h-[34px] border border-gray-400 hover:bg-gray-500 hover:text-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-gray-100`}
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode && <LightbulbIcon className="w-4 h-4" />}
                {!isDarkMode && <MoonIcon className="w-4 h-4" />}
              </Button>
            </div>
            <Code />
          </div>
        </div>
      </div>
    </div>
  );
};
