export const operations = {
  getEventById: {
    path: "/api/events/:id",
    method: "get",
  },
  updateEvent: {
    path: "/api/events/:id",
    method: "put",
  },
  deleteEvent: {
    path: "/api/events/:id",
    method: "delete",
  },
  getAllEvents: {
    path: "/api/events",
    method: "get",
  },
  createEvent: {
    path: "/api/events",
    method: "post",
  },
  removeRequirement: {
    path: "/api/events/:id/remove-requirement",
    method: "post",
  },
  leaveEvent: {
    path: "/api/events/:id/leave",
    method: "post",
  },
  joinEvent: {
    path: "/api/events/:id/join",
    method: "post",
  },
  declineParticipant: {
    path: "/api/events/:id/decline-participant",
    method: "post",
  },
  addRequirement: {
    path: "/api/events/:id/add-requirement",
    method: "post",
  },
  acceptParticipant: {
    path: "/api/events/:id/accept-participant",
    method: "post",
  },
  save: {
    path: "/account/inscription",
    method: "post",
  },
  getAllCaches: {
    path: "/cache",
    method: "get",
  },
  searchEvents: {
    path: "/api/events/search",
    method: "get",
  },
  findAll: {
    path: "/account",
    method: "get",
  },
  findById: {
    path: "/account/:id",
    method: "get",
  },
} as const;
