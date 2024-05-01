import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
    {
        publicRoutes: ["/"],

        // ignoredRoutes: ["/login", "/signup"],
    }
);

export const config = { matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"] };