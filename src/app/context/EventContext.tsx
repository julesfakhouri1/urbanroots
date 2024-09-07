"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Event } from 'react-big-calendar';

interface CustomEvent extends Event {
  title: string;
}

interface EventContextType {
  events: CustomEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CustomEvent[]>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<CustomEvent[]>([]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};