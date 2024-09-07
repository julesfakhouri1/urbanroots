import React from 'react';

interface EventProps {
  event: {
    title: string;
    description?: string;
    createdBy?: {
      name?: string;
      email?: string;
    };
    [key: string]: any;
  };
  onSelectEvent: (event: any) => void;
}

const CustomEvent: React.FC<EventProps> = ({ event, onSelectEvent }) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div 
      onClick={() => onSelectEvent(event)}
      style={{ 
        cursor: 'pointer',
        whiteSpace: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      <strong>{truncateText(event.title, 30)}</strong>
    </div>
  );
};

export default CustomEvent;