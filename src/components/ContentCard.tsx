import React from 'react';
import { Content, WatchlistItem } from '../types';
import { Star, Calendar, Edit3, Trash2, Plus } from 'lucide-react';

interface ContentCardProps {
  content: Content | WatchlistItem;
  isWatchlist?: boolean;
  onEdit?: (content: Content) => void;
  onDelete?: (id: string) => void;
  onMoveToLibrary?: (item: WatchlistItem) => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  content,
  isWatchlist = false,
  onEdit,
  onDelete,
  onMoveToLibrary
}) => {
  const hasRating = 'rating' in content && content.rating;
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="aspect-[2/3] relative overflow-hidden bg-gray-700">
        {content.poster ? (
          <img
            src={content.poster}
            alt={content.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
            <span className="text-gray-400 text-sm text-center px-2">
              {content.title}
            </span>
          </div>
        )}
        
        {hasRating && (
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-medium">{content.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-2 mb-1">
          {content.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
            {content.type === 'movie' ? 'Movie' : 'TV Show'}
          </span>
          <span>{content.genre}</span>
          <span>•</span>
          <span>{content.year}</span>
        </div>
        
        {isWatchlist && 'addedDate' in content && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
            <Calendar className="w-3 h-3" />
            Added {new Date(content.addedDate).toLocaleDateString()}
          </div>
        )}
        
        {'notes' in content && content.notes && (
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">
            {content.notes}
          </p>
        )}
        
        <div className="flex items-center gap-2">
          {isWatchlist && onMoveToLibrary && (
            <button
              onClick={() => onMoveToLibrary(content as WatchlistItem)}
              className="flex-1 bg-purple-600/20 text-purple-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-600/30 transition-colors duration-200 flex items-center justify-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Mark as Watched
            </button>
          )}
          
          {!isWatchlist && onEdit && (
            <button
              onClick={() => onEdit(content as Content)}
              className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 rounded-lg transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          )}
          
          {onDelete && (
            <button
              onClick={() => onDelete(content.id)}
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-600/20 rounded-lg transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};