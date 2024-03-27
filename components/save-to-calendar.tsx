'use client';
import { google, outlook, ics } from 'calendar-link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type SaveToCalendarT = {
  title: string;
  description?: string;
  location?: string;
  start: string;
};
export default function SaveToCalendar({
  title,
  description = '',
  location,
  start,
}: SaveToCalendarT) {
  const event = { title, description, start, end: start, location };
  const [isOpened, setIsOpened] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpened}>
      <DropdownMenuTrigger className="bg-white border-light-gray text-sm rounded-lg border px-3 py-3 px-auto relative z-50 inline-flex items-center gap-4">
        Save to your calendar
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-150 ease-out',
            isOpened ? '-rotate-180' : 'rotate-0',
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] border-light-gray [&_a]:cursor-pointer [&_a]:py-2">
        <DropdownMenuItem asChild>
          <a href={google(event)} target="_blank" rel="noopener noreferrer">
            Google Calendar
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={ics(event)} target="_blank" rel="noopener noreferrer">
            Apple Calendar
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={outlook(event)} target="_blank" rel="noopener noreferrer">
            Outlook Calendar
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
