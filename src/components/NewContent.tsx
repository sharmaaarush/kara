import React from 'react';
import { Content, WatchlistItem } from '../types';
import { trendingContent } from '../data/mockData';
import { TrendingUp, Plus } from 'lucide-react';

interface NewContentProps {
  userPreferences: string[];
  onAddToWatchlist: (content: Omit<WatchlistItem, 'id' | 'addedDate'>) => void;
}

export const NewContent: React.FC<NewContentProps> = ({
  userPreferences,
  onAddToWatchlist
}) => {
  const filteredContent = trendingContent.filter(content =>
    userPreferences.length === 0 || userPreferences.includes(content.genre)
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-green-500" />
        <h2 className="text-lg font-semibold text-gray-900">New & Trending</h2>
        {userPreferences.length > 0 && (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Personalized
          </span>
        )}
      </div>
      
      {userPreferences.length > 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Based on your preferences: {userPreferences.join(', ')}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {filteredContent.map((content) => (
          <div key={content.id} className="group">
            <div className="aspect-[2/3] relative overflow-hidden rounded-lg bg-gray-100 mb-2">
              {content.poster ? (
                <img
                  src={content.poster}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <span className="text-gray-400 text-xs text-center px-2">
                    {content.title}
                  </span>
                </div>
              )}
            </div>
            
            <h3 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
              {content.title}
            </h3>
            
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>{content.genre}</span>
              <span>{content.year}</span>
            </div>
            
            <button
              onClick={() => onAddToWatchlist({
                title: content.title,
                type: content.type,
                genre: content.genre,
                year: content.year,
                poster: content.poster
              })}
              className="w-full bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Add to Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};