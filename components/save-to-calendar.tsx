'use client';
import { google, outlook, ics } from 'calendar-link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[200px] bg-white border-light-gray text-sm rounded-lg border py-3 px-auto relative z-50">
        Save to your calendar
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
