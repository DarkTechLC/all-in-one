import { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900 text-gray-200 h-full">
      <div className="mx-auto max-w-3xl px-4">{children}</div>
    </div>
  );
}
