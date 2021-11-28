import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
