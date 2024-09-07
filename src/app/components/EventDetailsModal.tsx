import React from 'react';

interface EventDetailsModalProps {
  event: {
    title: string;
    description?: string;
    createdBy?: {
      name?: string;
      email?: string;
    };
    start: Date;
    end: Date;
    [key: string]: any;
  };
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-xl w-full">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-primary-700 mb-2">{event.title}</h2>
          <p className="text-sm text-gray-600">
            <strong>Date:</strong> {event.start.toLocaleString()} - {event.end.toLocaleString()}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700"><strong>Description:</strong></p>
          <p className="text-gray-600">{event.description || 'Aucune description fournie.'}</p>
        </div>
        {event.createdBy && (
          <div className="mb-4">
            <p className="text-gray-700"><strong>Proposé par:</strong></p>
            <p className="text-gray-600">{event.createdBy.name} ({event.createdBy.email})</p>
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition duration-300 ease-in-out"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;