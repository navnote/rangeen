import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  TypographyH1,
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
} from '@rangeen/shadcn-ui';
import { Festivities } from '../../illustrations/festivities';

export const HeroHeader = () => {
  return (
    <div className="flex flex-col justify-center gap-8 p-4 md:flex-row md:place-content-between md:p-16">
      <div className="gap flex flex-col gap-4 text-center md:text-left">
        <TypographyH1>
          Visualize the{' '}
          <span className="bg-primary text-primary-foreground inline-block skew-x-6 transform bg-opacity-20 px-4 backdrop-blur-0">
            Rangs
          </span>
        </TypographyH1>
        <TypographyMuted>
          A place to celebrate the colors of life. Craft vibrant experiences,
          igniting inspiration with every button click.
          <br />
          <i>
            <b>Rang (रंग) means color in Hindi.</b>
          </i>
        </TypographyMuted>

        <div className="bg-background flex items-center gap-4 rounded-lg  p-4">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://github.com/navjotahuja92.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          <div className="gap flex flex-col">
            <TypographyLarge>Infinite Inspiration!</TypographyLarge>
            <TypographySmall>
              Explore a boundless spectrum of colors, sparking your imagination
              to new heights
            </TypographySmall>
          </div>
        </div>

        <div className="bg-background flex items-center gap-4 rounded-lg  p-4">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://www.freepnglogos.com/uploads/anime-face-png/smug-heterosexual-face-smug-anime-face-know-your-meme-20.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback className="text-primary-foreground bg-primary">
              AB
            </AvatarFallback>
          </Avatar>
          <div className="gap flex flex-col">
            <TypographyLarge>Expressive Creativity!</TypographyLarge>
            <TypographySmall>
              Unleash your artistic vision with a diverse range of hues,
              allowing your designs to speak volumes
            </TypographySmall>
          </div>
        </div>

        <div className="bg-background flex items-center gap-4 rounded-lg  p-4">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-close-transparent-png-stickpng-3.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback className="text-primary-foreground bg-primary">
              NA
            </AvatarFallback>
          </Avatar>
          <div className="gap flex flex-col">
            <TypographyLarge>Vibrant Compositions!</TypographyLarge>
            <TypographySmall>
              Craft captivating visuals that resonate with energy and passion,
              infusing every project with dynamic flair
            </TypographySmall>
          </div>
        </div>
      </div>
      <div className="fill-primary h-[300px]">
        <Festivities className="h-full w-full" />
      </div>
    </div>
  );
};
