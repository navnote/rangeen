import { TypographyH3 } from '@rangeen/shadcn-ui';
import { Newspaper } from '../../illustrations/newspaper';

export const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16 lg:px-80">
      <Newspaper className="" />
      <TypographyH3>
        <span className="text-primary">Connect with world using colors</span>
      </TypographyH3>
    </div>
  );
};
