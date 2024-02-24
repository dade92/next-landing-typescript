import type { FC, ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton: FC<IHeroOneButtonProps> = ({
  title,
  description,
  button,
}) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{description}</div>

    {button}
  </header>
);

export { HeroOneButton };
