import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllEvents } from "@/lib/api";
import Link from "next/link";

const revalidate = 0;

export default async function ListEventsPage() {
  const events = await getAllEvents({ size: 999 });

  return (
    <main>
      {events.map((event) => (
        <Card className="mx-auto my-4 max-w-[50%]" key={event.id}>
          <Link href={`/events/${event.id}`}>
            <CardHeader>
              <CardTitle className="text-xl">{event.name}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Type : {event.eventType}</p>
              <p>Date : {String(event.date)}</p>
              <p>Price : {event.price}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </main>
  );
}
