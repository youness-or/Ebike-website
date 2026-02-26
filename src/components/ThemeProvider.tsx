"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// We don't import ThemeProviderProps directly if the version doesn't export it clearly
// but usually it's fine. If there are TS issues we'll use React.ComponentProps
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
