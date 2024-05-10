import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/connections(.*)",
  "/settings(.*)",
  "/workflow(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/clerk-webhook",
  "/api/drive-activity/notifications",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  else if (isPublicRoute(req)) return;
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
