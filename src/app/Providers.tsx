'use client';
import { EventProvider } from './context/EventContext';
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <EventProvider>
        {children}
      </EventProvider>
    </SessionProvider>
  );
}