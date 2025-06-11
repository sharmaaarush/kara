import React from 'react';
import { Content } from '../types';
import { ContentCard } from './ContentCard';
import { Trophy } from 'lucide-react';

interface HallOfFameProps {
  title: string;
  content: Content[];
  onEdit: (content: Content) => void;
  onDelete: (id: string) => void;
}

export const HallOfFame: React.FC<HallOfFameProps> = ({
  title,
  content,
  onEdit,
  onDelete
}) => {
  if (content.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-500 text-center py-8">
          No high-rated content yet. Rate some content 8+ to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
          {content.length}
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((item) => (
          <ContentCard
            key={item.id}
            content={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};