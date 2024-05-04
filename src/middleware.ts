import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/"]);
const DEV = process.env.NODE_ENV === 'development';


export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect()
}, {debug: DEV});


export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};