import React, { useRef } from 'react';
import { Content, WatchlistItem, UserData } from '../types';
import { getHotContent } from '../data/movieDatabase';
import { ChevronLeft, ChevronRight, Flame, ExternalLink, Plus, Bookmark } from 'lucide-react';

interface HotContentProps {
  userData?: UserData;
  onAddToWatchlist?: (content: Omit<WatchlistItem, 'id' | 'addedDate'>) => void;
  onAddToLibrary?: (content: Omit<Content, 'id' | 'watchedDate'>) => void;
}

export const HotContent: React.FC<HotContentProps> = ({ 
  userData, 
  onAddToWatchlist, 
  onAddToLibrary 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hotContent = getHotContent();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleContentClick = (content: any) => {
    const searchQuery = encodeURIComponent(`${content.title} ${content.year} ${content.type === 'movie' ? 'movie' : 'TV show'}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  const handleAddToLibrary = (content: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToLibrary) {
      onAddToLibrary({
        title: content.title,
        type: content.type,
        genre: content.genre,
        year: content.year,
        poster: content.poster
      });
    }
  };

  const handleAddToWatchlist = (content: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToWatchlist) {
      onAddToWatchlist({
        title: content.title,
        type: content.type,
        genre: content.genre,
        year: content.year,
        poster: content.poster
      });
    }
  };

  // Split content into two rows of 9 items each
  const topRow = hotContent.slice(0, 9);
  const bottomRow = hotContent.slice(9, 18);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Hot Content</h2>
          <span className="bg-red-500/20 text-red-400 text-xs font-medium px-2 py-1 rounded-full">
            Trending
          </span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Top Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {topRow.map((item) => (
            <div key={item.id} className="flex-shrink-0 group cursor-pointer" onClick={() => handleContentClick(item)}>
              <div className="w-48 aspect-[2/3] relative overflow-hidden rounded-xl bg-gray-700">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Add to Library Button - Top Left */}
                  {userData && onAddToLibrary && (
                    <button
                      onClick={(e) => handleAddToLibrary(item, e)}
                      className="bg-purple-600/90 backdrop-blur-sm rounded-full p-2 hover:bg-purple-700 transition-colors duration-200"
                      title="Add to Library"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  )}
                  
                  {/* Add to Watchlist Button */}
                  {userData && onAddToWatchlist && (
                    <button
                      onClick={(e) => handleAddToWatchlist(item, e)}
                      className="bg-orange-600/90 backdrop-blur-sm rounded-full p-2 hover:bg-orange-700 transition-colors duration-200"
                      title="Add to Watchlist"
                    >
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                  )}
                  
                  {/* External Link Button - Top Right */}
                  <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="bg-gray-800/80 px-2 py-1 rounded">
                      {item.type === 'movie' ? 'Movie' : 'TV Show'}
                    </span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {bottomRow.map((item) => (
            <div key={item.id} className="flex-shrink-0 group cursor-pointer" onClick={() => handleContentClick(item)}>
              <div className="w-48 aspect-[2/3] relative overflow-hidden rounded-xl bg-gray-700">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Add to Library Button - Top Left */}
                  {userData && onAddToLibrary && (
                    <button
                      onClick={(e) => handleAddToLibrary(item, e)}
                      className="bg-purple-600/90 backdrop-blur-sm rounded-full p-2 hover:bg-purple-700 transition-colors duration-200"
                      title="Add to Library"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  )}
                  
                  {/* Add to Watchlist Button */}
                  {userData && onAddToWatchlist && (
                    <button
                      onClick={(e) => handleAddToWatchlist(item, e)}
                      className="bg-orange-600/90 backdrop-blur-sm rounded-full p-2 hover:bg-orange-700 transition-colors duration-200"
                      title="Add to Watchlist"
                    >
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                  )}
                  
                  {/* External Link Button - Top Right */}
                  <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="bg-gray-800/80 px-2 py-1 rounded">
                      {item.type === 'movie' ? 'Movie' : 'TV Show'}
                    </span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};