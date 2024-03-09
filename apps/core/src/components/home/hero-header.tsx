import {
  TypographySmall,
  TypographyLarge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  TypographyH1,
  TypographyMuted,
} from '@rangeen/shadcn-ui';
import { Festivities } from '../../illustrations/festivities';

export const HeroHeader = () => {
  return (
    <div className="flex p-4 md:p-16 justify-center md:place-content-between flex-col md:flex-row gap-8">
      <div className="flex flex-col gap gap-4 text-center md:text-left">
        <TypographyH1>
          Visualize the{' '}
          <span className="inline-block backdrop-blur-0 bg-primary px-4 text-primary-foreground bg-opacity-20 transform skew-x-6">
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

        <div className="flex bg-background p-4 rounded-lg gap-4  items-center">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://github.com/navjotahuja92.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap">
            <TypographyLarge>Infinite Inspiration!</TypographyLarge>
            <TypographySmall>
              Explore a boundless spectrum of colors, sparking your imagination
              to new heights
            </TypographySmall>
          </div>
        </div>

        <div className="flex bg-background p-4 rounded-lg gap-4  items-center">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://www.freepnglogos.com/uploads/anime-face-png/smug-heterosexual-face-smug-anime-face-know-your-meme-20.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback className="text-primary-foreground bg-primary">
              AB
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap">
            <TypographyLarge>Expressive Creativity!</TypographyLarge>
            <TypographySmall>
              Unleash your artistic vision with a diverse range of hues,
              allowing your designs to speak volumes
            </TypographySmall>
          </div>
        </div>

        <div className="flex bg-background p-4 rounded-lg gap-4  items-center">
          <Avatar className="bg-secondary">
            <AvatarImage
              src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-close-transparent-png-stickpng-3.png"
              alt="@navjotahuja92"
            />
            <AvatarFallback className="text-primary-foreground bg-primary">
              NA
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap">
            <TypographyLarge>Vibrant Compositions!</TypographyLarge>
            <TypographySmall>
              Craft captivating visuals that resonate with energy and passion,
              infusing every project with dynamic flair
            </TypographySmall>
          </div>
        </div>
      </div>
      <div className="fill-primary h-[300px]">
        <Festivities className="w-full h-full" />
      </div>
    </div>
  );
};
