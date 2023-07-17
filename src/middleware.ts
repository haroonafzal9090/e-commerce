import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/Male", "/Female", "/kids", "/All-Products","/product/:path"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};