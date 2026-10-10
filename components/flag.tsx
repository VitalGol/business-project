'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const flagUKR = (
  <Image src="/ua.svg" width={22} height={16} alt="Picture of the author" />
);
const flagGB = (
  <Image src="/gb.svg" width={22} height={16} alt="Picture of the author" />
);

export default function Flag() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Читаем текущее значение флага из URL (по умолчанию пусть будет true, если не задано)
  const currentFlag = searchParams.get('flag') !== 'false';

  const toggleFlag = () => {
    // Создаем новый объект URLSearchParams на основе текущих
    const params = new URLSearchParams(searchParams.toString());

    // Меняем значение флага на противоположное
    params.set('flag', (!currentFlag).toString());

    // Обновляем URL (параметр добавится в строку запроса, например: ?flag=false)
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          // type="button"
          variant="ghost"
          size="icon"
          onClick={toggleFlag}
          className=" dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
        >
          {currentFlag ? flagGB : flagUKR}
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={12}
        className="py-2 px-4 text-sm"
      >
        {currentFlag ? (
          <span>Switch &ensp;{currentFlag ? 'UKR' : 'GB'}</span>
        ) : (
          <span>Перемикнути &ensp;{currentFlag ? 'UKR' : 'ENG'}</span>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
