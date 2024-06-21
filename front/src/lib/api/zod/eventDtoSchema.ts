import { EventType } from "@/lib/apiUtils";
import { accountDtoSchema } from "./accountDtoSchema";
import { addressDtoSchema } from "./addressDtoSchema";
import { demandDtoSchema } from "./demandDtoSchema";
import { z } from "zod";

export const eventDtoSchema = z
  .object({
    id: z.coerce.number().optional(),
    description: z.string(),
    organizer: z.lazy(() => accountDtoSchema).optional(),
    eventTypeId: z.coerce.number().optional(),
    eventType: z.nativeEnum(EventType),
    name: z.string(),
    date: z.date(),
    address: addressDtoSchema,
    capacity: z.coerce.number(),
    participants: z.array(z.lazy(() => accountDtoSchema)).optional(),
    price: z.coerce.number(),
    demands: z.array(z.lazy(() => demandDtoSchema)).optional(),
    requirements: z.array(z.coerce.string()),
    alcoolAllowed: z.boolean(),
    additionalProperties: z.object({
      id: z.coerce.number().optional(),
      videoGames: z.array(z.string()).optional(),
      console: z.coerce.string().optional(),
      bringYourOwn: z.boolean().optional(),
      musicType: z.array(z.string()).optional(),
      boardGames: z.array(z.string()).optional(),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.eventType === EventType.board) {
      if (data.additionalProperties.boardGames?.length === 0) {
        ctx.addIssue({
          message: "Must provide board games",
          path: ["additionalProperties", "boardGames"],
          code: z.ZodIssueCode.custom,
        });
      }
      if (data.additionalProperties.bringYourOwn === undefined) {
        ctx.addIssue({
          message: "Must provide if bring your own board games",
          path: ["additionalProperties", "bringYourOwn"],
          code: z.ZodIssueCode.custom,
        });
      }
    }
    if (data.eventType === EventType.party) {
      if (data.additionalProperties.musicType?.length === 0) {
        ctx.addIssue({
          message: "Must provide music type",
          path: ["additionalProperties", "musicType"],
          code: z.ZodIssueCode.custom,
        });
      }
    }
    if (data.eventType === EventType.lan) {
      if (data.additionalProperties.videoGames?.length === 0) {
        ctx.addIssue({
          message: "Must provide video games",
          path: ["additionalProperties", "videoGames"],
          code: z.ZodIssueCode.custom,
        });
      }
      if (data.additionalProperties.bringYourOwn === undefined) {
        ctx.addIssue({
          message: "Must provide if bring your own video games",
          path: ["additionalProperties", "bringYourOwn"],
          code: z.ZodIssueCode.custom,
        });
      }
      if (data.additionalProperties.console === undefined) {
        ctx.addIssue({
          message: "Must provide console",
          path: ["additionalProperties", "console"],
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });
