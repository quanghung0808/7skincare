export const Statuses = {
  ACTIVATED: "ACTIVATED",
  DISABLED: "DISABLED",
} as const;

export const Roles = {
  STAFF: "STAFF",
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type Status = (typeof Statuses)[keyof typeof Statuses];
export type Role = (typeof Roles)[keyof typeof Roles];
