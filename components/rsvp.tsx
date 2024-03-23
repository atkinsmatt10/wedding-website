'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const FormSchema = z.object({
  fullname: z.string().min(3, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email('Please enter a valid email address'),
  will_attend_wedding: z.enum(['yes', 'no'], {
    required_error: 'Please confirm your assistance to the wedding',
  }),
  will_attend_fnight: z.enum(['yes', 'no'], {
    required_error: 'Please confirm your assistance to the friday night',
  }),
  recommended_song: z.string().optional(),
  comments: z.string().optional(),
});

type FormFields = {
  fullname: string;
  email: string;
  will_attend_wedding: 'yes' | 'no';
  will_attend_fnight: 'yes' | 'no';
  recommended_song?: string;
  comments?: string;
};

export function RSVPForm() {
  const { toast } = useToast();
  async function submit(params: FormFields) {
    ('use server');
    const data = new FormData();
    Object.keys(params).forEach((key) => {
      data.append(key, params[key as keyof FormFields] as string);
    });
    const APP_URL = `https://script.google.com/macros/s/AKfycbxw07nrSL8AmTbgU-u-AWtrardWTUqq4g2hrw8lIgiQW1lDG7lHOzNBeTAiKPhXTmzJ/exec`;
    const request = await fetch(APP_URL, {
      method: 'POST',
      body: data,
    });
    const resp = await request.json();
    console.log({ resp });
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      will_attend_wedding: 'yes',
      will_attend_fnight: 'yes',
      recommended_song: '',
      comments: '',
    },
  });

  const handleSubmit = async (data: FormFields) => {
    await submit(data);
    form.reset();
    toast({ description: 'Thank you for confirming your attendance!' });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-lg mx-auto space-y-4"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className="border-light-gray"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  className="border-light-gray"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="will_attend_wedding"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between w-full max-w-xs">
              <FormLabel>Will we see you there?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal border border-light-gray py-2 px-3">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal border border-light-gray py-2 px-3">
                      No
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="will_attend_fnight"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between w-full max-w-xs">
              <FormLabel>Will you attend Friday Night?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal border border-light-gray py-2 px-3">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal border border-light-gray py-2 px-3">
                      No
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recommended_song"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recomend a song</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a song you'd like to be played at the wedding"
                  className="border-light-gray"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Anything else you want to share?"
                  className="border-light-gray"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-[red]" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit your RSVP</Button>
      </form>
    </Form>
  );
}
