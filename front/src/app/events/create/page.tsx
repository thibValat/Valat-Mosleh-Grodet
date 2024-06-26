"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { createEvent, eventDtoSchema } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/FormInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ConsoleType, EventType } from "@/lib/apiUtils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormInputList from "@/components/FormInputList";

export default function CreateEventPage() {
  const form = useForm<z.infer<typeof eventDtoSchema>>({
    resolver: zodResolver(eventDtoSchema),
    defaultValues: {
      requirements: [],
      eventType: EventType.party,
      additionalProperties: {
        videoGames: [],
        musicType: [],
        boardGames: [],
        bringYourOwn: false,
      },
      alcoolAllowed: false,
      capacity: 5,
      price: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof eventDtoSchema>) => {
    console.log(data);
    try {
      const res = await createEvent(data);
      console.log("created", res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <Card className="mx-auto my-4 max-w-[50%]">
        <CardHeader>
          <CardTitle className="text-xl">Create an Event</CardTitle>
          <CardDescription>
            Enter information to create an event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={EventType.party}>Party</SelectItem>
                          <SelectItem value={EventType.board}>Board</SelectItem>
                          <SelectItem value={EventType.lan}>LAN</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Title"
                  name="name"
                  InputProps={{ placeholder: "Event Title" }}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Give a description of the event"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          date={field.value}
                          onChange={(date) => field.onChange(date)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Capacity"
                  name="capacity"
                  InputProps={{ placeholder: "10", type: "number" }}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Price"
                  name="price"
                  InputProps={{ placeholder: "10", type: "number" }}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="alcoolAllowed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Is Alcool Allowed ?</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="City"
                    name="address.city"
                    InputProps={{ placeholder: "Paris" }}
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="PostCode"
                    name="address.postCode"
                    InputProps={{ placeholder: "75001" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Street Name"
                    name="address.streetName"
                    InputProps={{ placeholder: "Rue de Rivoli" }}
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Street Number"
                    name="address.streetNumber"
                    InputProps={{ placeholder: "1" }}
                  />
                </div>
              </div>
              <Separator />
              {form.watch("eventType") === EventType.lan && (
                <>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.console"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value={ConsoleType.nintendo}>
                                Nintendo
                              </SelectItem>
                              <SelectItem value={ConsoleType.pc}>PC</SelectItem>
                              <SelectItem value={ConsoleType.play}>
                                PlayStation
                              </SelectItem>
                              <SelectItem value={ConsoleType.xbox}>
                                Xbox
                              </SelectItem>
                              <SelectItem value={ConsoleType.other}>
                                Other
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.videoGames"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Video Games</FormLabel>
                          <FormControl>
                            <FormInputList
                              items={field.value ?? []}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.bringYourOwn"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Bring your own console ?</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
              {form.watch("eventType") === EventType.party && (
                <>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.musicType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Music Type</FormLabel>
                          <FormControl>
                            <FormInputList
                              items={field.value ?? []}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
              {form.watch("eventType") === EventType.board && (
                <>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.boardGames"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Board Games</FormLabel>
                          <FormControl>
                            <FormInputList
                              items={field.value ?? []}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="additionalProperties.bringYourOwn"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Bring your own board games ?</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
              <Button type="submit" className="w-full">
                Create an event
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
