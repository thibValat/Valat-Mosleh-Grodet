import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { eventDtoSchema, getEventById } from "@/lib/api";
import { EventType } from "@/lib/apiUtils";
import { z } from "zod";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = (await getEventById(Number(params.id))) as z.infer<
    typeof eventDtoSchema
  >;
  console.log(event);

  return (
    <main>
      <Card className="mx-auto my-4 max-w-[50%]">
        <CardHeader>
          <CardTitle className="text-xl">{event.name}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Type : {event.eventType}</p>
          <p>Date : {String(event.date)}</p>
          <p>Price : {event.price}</p>
          <p>Alcool Allowed ? : {String(event.alcoolAllowed)}</p>
          <p>Capacity : {event.capacity}</p>
          {event.eventType === EventType.board && (
            <div>
              <p>Games : {event.additionalProperties.boardGames?.join(", ")}</p>
              <p>
                Bring your own game ? :{" "}
                {String(event.additionalProperties.bringYourOwn)}
              </p>
            </div>
          )}
          {event.eventType === EventType.lan && (
            <div>
              <p>Games : {event.additionalProperties.videoGames?.join(", ")}</p>
              <p>Console : {event.additionalProperties.console}</p>
              <p>
                Bring your own game ? :{" "}
                {String(event.additionalProperties.bringYourOwn)}
              </p>
            </div>
          )}
          {event.eventType === EventType.party && (
            <div>
              <p>
                Music type : {event.additionalProperties.musicType?.join(", ")}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
