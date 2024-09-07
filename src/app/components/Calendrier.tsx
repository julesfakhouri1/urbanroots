"use client";
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSession } from 'next-auth/react';
import CustomEvent from './CustomEvent';
import EventDetailsModal from './EventDetailsModal';

const localizer = momentLocalizer(moment);

interface CustomEvent {
  title: string;
  description?: string;
  start: Date;
  end: Date;
  createdBy?: {
    name?: string;
    email?: string;
  };
}

const Calendrier: React.FC = () => {
  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleSelect = async (slotInfo: SlotInfo) => {
    const title = window.prompt('Nom de l\'événement');
    if (title) {
      const description = window.prompt('Description de l\'événement') || '';
      const newEvent = {
        start: slotInfo.start,
        end: slotInfo.end,
        title,
        description,
        createdBy: {
          name: session?.user?.name,
          email: session?.user?.email,
        },
      };

      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const savedEvent = await response.json();
        setEvents([...events, savedEvent]);
      }
    }
  };

  const handleSelectEvent = (event: CustomEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectSlot={handleSelect}
        selectable
        components={{
          event: (props) => <CustomEvent {...props} onSelectEvent={handleSelectEvent} />,
        }}
      />
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Calendrier;