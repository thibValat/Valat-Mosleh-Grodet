import {
  getEventByIdQueryResponseSchema,
  getEventByIdPathParamsSchema,
} from "./getEventByIdSchema";
import {
  updateEventMutationRequestSchema,
  updateEventMutationResponseSchema,
  updateEventPathParamsSchema,
} from "./updateEventSchema";
import {
  deleteEventMutationResponseSchema,
  deleteEventPathParamsSchema,
} from "./deleteEventSchema";
import {
  getAllEventsQueryResponseSchema,
  getAllEventsQueryParamsSchema,
} from "./getAllEventsSchema";
import {
  createEventMutationRequestSchema,
  createEventMutationResponseSchema,
} from "./createEventSchema";
import {
  removeRequirementMutationResponseSchema,
  removeRequirementPathParamsSchema,
  removeRequirementQueryParamsSchema,
} from "./removeRequirementSchema";
import {
  leaveEventMutationResponseSchema,
  leaveEventPathParamsSchema,
  leaveEventQueryParamsSchema,
} from "./leaveEventSchema";
import {
  joinEventMutationResponseSchema,
  joinEventPathParamsSchema,
  joinEventQueryParamsSchema,
} from "./joinEventSchema";
import {
  declineParticipantMutationResponseSchema,
  declineParticipantPathParamsSchema,
  declineParticipantQueryParamsSchema,
} from "./declineParticipantSchema";
import {
  addRequirementMutationResponseSchema,
  addRequirementPathParamsSchema,
  addRequirementQueryParamsSchema,
} from "./addRequirementSchema";
import {
  acceptParticipantMutationResponseSchema,
  acceptParticipantPathParamsSchema,
  acceptParticipantQueryParamsSchema,
} from "./acceptParticipantSchema";
import {
  saveMutationRequestSchema,
  saveMutationResponseSchema,
} from "./saveSchema";
import { getAllCachesQueryResponseSchema } from "./getAllCachesSchema";
import {
  searchEventsQueryResponseSchema,
  searchEventsQueryParamsSchema,
} from "./searchEventsSchema";
import { findAllQueryResponseSchema } from "./findAllSchema";
import {
  findByIdQueryResponseSchema,
  findByIdPathParamsSchema,
} from "./findByIdSchema";

export const operations = {
  getEventById: {
    request: undefined,
    parameters: {
      path: getEventByIdPathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: getEventByIdQueryResponseSchema,
      default: getEventByIdQueryResponseSchema,
    },
    errors: {},
  },
  updateEvent: {
    request: updateEventMutationRequestSchema,
    parameters: {
      path: updateEventPathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: updateEventMutationResponseSchema,
      default: updateEventMutationResponseSchema,
    },
    errors: {},
  },
  deleteEvent: {
    request: undefined,
    parameters: {
      path: deleteEventPathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: deleteEventMutationResponseSchema,
      default: deleteEventMutationResponseSchema,
    },
    errors: {},
  },
  getAllEvents: {
    request: undefined,
    parameters: {
      path: undefined,
      query: getAllEventsQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: getAllEventsQueryResponseSchema,
      default: getAllEventsQueryResponseSchema,
    },
    errors: {},
  },
  createEvent: {
    request: createEventMutationRequestSchema,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: createEventMutationResponseSchema,
      default: createEventMutationResponseSchema,
    },
    errors: {},
  },
  removeRequirement: {
    request: undefined,
    parameters: {
      path: removeRequirementPathParamsSchema,
      query: removeRequirementQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: removeRequirementMutationResponseSchema,
      default: removeRequirementMutationResponseSchema,
    },
    errors: {},
  },
  leaveEvent: {
    request: undefined,
    parameters: {
      path: leaveEventPathParamsSchema,
      query: leaveEventQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: leaveEventMutationResponseSchema,
      default: leaveEventMutationResponseSchema,
    },
    errors: {},
  },
  joinEvent: {
    request: undefined,
    parameters: {
      path: joinEventPathParamsSchema,
      query: joinEventQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: joinEventMutationResponseSchema,
      default: joinEventMutationResponseSchema,
    },
    errors: {},
  },
  declineParticipant: {
    request: undefined,
    parameters: {
      path: declineParticipantPathParamsSchema,
      query: declineParticipantQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: declineParticipantMutationResponseSchema,
      default: declineParticipantMutationResponseSchema,
    },
    errors: {},
  },
  addRequirement: {
    request: undefined,
    parameters: {
      path: addRequirementPathParamsSchema,
      query: addRequirementQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: addRequirementMutationResponseSchema,
      default: addRequirementMutationResponseSchema,
    },
    errors: {},
  },
  acceptParticipant: {
    request: undefined,
    parameters: {
      path: acceptParticipantPathParamsSchema,
      query: acceptParticipantQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: acceptParticipantMutationResponseSchema,
      default: acceptParticipantMutationResponseSchema,
    },
    errors: {},
  },
  save: {
    request: saveMutationRequestSchema,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: saveMutationResponseSchema,
      default: saveMutationResponseSchema,
    },
    errors: {},
  },
  getAllCaches: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: getAllCachesQueryResponseSchema,
      default: getAllCachesQueryResponseSchema,
    },
    errors: {},
  },
  searchEvents: {
    request: undefined,
    parameters: {
      path: undefined,
      query: searchEventsQueryParamsSchema,
      header: undefined,
    },
    responses: {
      200: searchEventsQueryResponseSchema,
      default: searchEventsQueryResponseSchema,
    },
    errors: {},
  },
  findAll: {
    request: undefined,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: findAllQueryResponseSchema,
      default: findAllQueryResponseSchema,
    },
    errors: {},
  },
  findById: {
    request: undefined,
    parameters: {
      path: findByIdPathParamsSchema,
      query: undefined,
      header: undefined,
    },
    responses: {
      200: findByIdQueryResponseSchema,
      default: findByIdQueryResponseSchema,
    },
    errors: {},
  },
} as const;
export const paths = {
  "/api/events/{id}": {
    get: operations["getEventById"],
    put: operations["updateEvent"],
    delete: operations["deleteEvent"],
  },
  "/api/events": {
    get: operations["getAllEvents"],
    post: operations["createEvent"],
  },
  "/api/events/{id}/remove-requirement": {
    post: operations["removeRequirement"],
  },
  "/api/events/{id}/leave": {
    post: operations["leaveEvent"],
  },
  "/api/events/{id}/join": {
    post: operations["joinEvent"],
  },
  "/api/events/{id}/decline-participant": {
    post: operations["declineParticipant"],
  },
  "/api/events/{id}/add-requirement": {
    post: operations["addRequirement"],
  },
  "/api/events/{id}/accept-participant": {
    post: operations["acceptParticipant"],
  },
  "/account/inscription": {
    post: operations["save"],
  },
  "/cache": {
    get: operations["getAllCaches"],
  },
  "/api/events/search": {
    get: operations["searchEvents"],
  },
  "/account": {
    get: operations["findAll"],
  },
  "/account/{id}": {
    get: operations["findById"],
  },
} as const;
