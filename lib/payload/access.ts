import type { Access, FieldAccess } from "payload";

export const authenticated: Access = ({ req }) => Boolean(req.user);
export const publishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) return true;
  return { _status: { equals: "published" } };
};

export const fieldAdminOnly: FieldAccess = ({ req }) => Boolean(req.user);
export const adminPanelOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);
