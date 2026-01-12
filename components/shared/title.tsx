import { cn } from '@/lib/utils';
import React from 'react';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type TitleColor = 'red' | 'blue' | 'orange' | 'black';

interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
  color?: TitleColor;
}

const mapTagBySize = {
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1',
  '2xl': 'h1',
} as const;

const mapClassNameBySize = {
  xs: 'text-[16px]',
  sm: 'text-[22px]',
  md: 'text-[26px]',
  lg: 'text-[32px]',
  xl: 'text-[40px]',
  '2xl': 'text-[48px]',
} as const;

const mapColor = {
  blue: 'text-blue-500',
  red: 'text-red-500',
  orange: 'text-orange-500',
  black: 'text-black',
} as const;

export const Title = ({ text, size = 'sm', color = 'black', className }: Props) => {

  const Tag = mapTagBySize[size];

  return (
    <Tag className={cn(mapClassNameBySize[size], mapColor[color], className)}>
      {text}
    </Tag>
  );
};
