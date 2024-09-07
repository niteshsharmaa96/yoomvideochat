import SteamVideoProvider from "@/providers/StreamClientProviders";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SteamVideoProvider>{children}</SteamVideoProvider>
    </main>
  );
};

export default RootLayout;
