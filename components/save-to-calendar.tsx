'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type SaveToCalendarT = {
  title: string;
  description?: string;
  location?: string;
  date: string;
};
export default function SaveToCalendar({
  title,
  description,
  location,
  date,
}: SaveToCalendarT) {
  const dates = new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, '');
  const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${dates}/${dates}&timezone=GMT-4`;
  const outlookLink = `https://outlook.live.com/calendar/deeplink/compose?body=${description}&enddt=2024-06-31T18:00:00&location=${location}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-31T18:00:00&timezone=America/Pennsylvania/Philadelphia&subject=${title}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[200px] border-light-gray text-sm rounded-lg border py-3 px-auto relative z-50">
        Save to your calendar
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] border-light-gray [&_a]:cursor-pointer">
        <DropdownMenuItem asChild>
          <a href={googleLink} target="_blank" rel="noopener noreferrer">
            Google Calendar
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={outlookLink} target="_blank" rel="noopener noreferrer">
            Outlook Calendar
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
