import { cn } from '@/lib/utils';
import { HTMLProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren & HTMLProps<HTMLAnchorElement>;

export default function Anchor({ children, ...props }: Props) {
  return (
    <a
      className={cn(
        'text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200 hover:decoration-gray-700 dark:hover:decoration-stone-200',
        props.className
      )}
      {...props}>
      {children}
    </a>
  );
} 