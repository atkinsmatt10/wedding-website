'use client';
import debounce from 'debounce';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import { FormFields } from './rsvp';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';

type SpotifySearchT = {
  field: ControllerRenderProps<FormFields, 'recommended_song'>;
  form: UseFormReturn<FormFields, any, undefined>;
  disabled: boolean;
};

type SongResults = Array<{ label: string; value: string; image: string }>;
type APIResults = {
  tracks: {
    items: {
      data: {
        id: string;
        name: string;
        artists: { items: { profile: { name: string } }[] };
        albumOfTrack: {
          coverArt: {
            sources: { url: string }[];
          };
        };
      };
    }[];
  };
};

export default function SpotifySearch({
  field,
  form,
  disabled,
}: SpotifySearchT) {
  const [songResults, setSongResults] = useState<SongResults>([]);
  const [open, setOpen] = useState(false);

  const onSearch = debounce(async (query: string) => {
    const req = await fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=10&numberOfTopResults=5`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '0009ce0253msh32334e191d17418p11f49fjsn73c3d26a8c57',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      },
    );
    const res = (await req.json()) as APIResults;
    console.log(res);
    const results: SongResults = [];
    res.tracks.items.map(({ data: track }) => {
      results.push({
        label: `${track.name} - ${track.artists.items[0].profile.name}`,
        value: `https://open.spotify.com/track/${track.id}`,
        image: track.albumOfTrack.coverArt.sources[0].url,
      });
    });
    console.log(results);
    setSongResults(results);
  }, 500);

  return (
    <FormItem className="flex flex-col">
      <FormLabel>Recomend a song</FormLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              disabled={disabled}
              className={cn(
                'w-full justify-between border-light-gray rounded-lg',
                !field.value && 'text-gray/60',
              )}
            >
              {field.value ? (
                <div className="flex items-center gap-4 truncate whitespace-nowrap -ml-2">
                  <Image
                    src={
                      songResults.find(({ value }) => value === field.value)
                        ?.image as string
                    }
                    alt=""
                    width={30}
                    height={30}
                    className="rounded"
                  />
                  <span className="truncate whitespace-nowrap">
                    {
                      songResults.find(({ value }) => value === field.value)
                        ?.label
                    }
                  </span>
                </div>
              ) : (
                <span className="truncate whitespace-nowrap">
                  Search for a song you'd like to be played at the wedding
                </span>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 border-light-gray">
          <Command>
            <CommandInput
              placeholder="Search for a song..."
              onInput={(e) => onSearch(e.currentTarget.value)}
            />
            <CommandList>
              <CommandEmpty>No song found.</CommandEmpty>
              <CommandGroup>
                {songResults.map(({ label, value, image }) => (
                  <CommandItem
                    value={label}
                    key={value}
                    className="gap-2"
                    onSelect={() => {
                      form.setValue('recommended_song', value);
                      setOpen(false);
                    }}
                  >
                    <Image
                      src={image}
                      alt={label}
                      width={30}
                      height={30}
                      className="rounded"
                    />
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage className="text-xs text-[red]" />
    </FormItem>
  );
}
