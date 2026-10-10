'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MorphIcon } from 'morphicons/react';
import { Sun, Moon } from 'lucide';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [changeIcon, setChangeIcon] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const dark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(dark ? 'light' : 'dark');
    setChangeIcon((d) => !d);
  };

  return (
    <>
      {!mounted ? (
        <span></span>
      ) : (
        <Tooltip>
          <TooltipTrigger>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-md dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
            >
              <MorphIcon
                icon={dark ? Sun : Moon}
                // size={34}
                strokeWidth={2}
                spring="snappy"
                color={theme === 'dark' ? '#7dacd6' : '#1a1a1a'}
                className="text-[#1a1a1a] dark:text-[#7dacd6] size-5"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={12}
            className="py-2 px-4 text-sm"
          >
            Change&ensp;{dark ? 'Light mode' : 'Dark mode'}
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );
}
