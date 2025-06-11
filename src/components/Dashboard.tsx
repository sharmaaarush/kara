import React, { useState, useMemo } from 'react';
import { User, Content, WatchlistItem, UserData } from '../types';
import { ContentCard } from './ContentCard';
import { AddContentModal } from './AddContentModal';
import { HotContent } from './HotContent';
import { Plus, Search, Film, Tv, Star, Clock, LogOut, User as UserIcon, Filter, ExternalLink, Bookmark } from 'lucide-react';
import { allContent } from '../data/movieDatabase';

interface DashboardProps {
  userData: UserData;
  onLogout: () => void;
  onUpdateUserData: (userData: UserData) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  userData,
  onLogout,
  onUpdateUserData
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<Content | undefined>();
  const [prefillData, setPrefillData] = useState<any>(undefined);
  const [searchTerm, setSearchTerm] = useState('');
  const [dashboardSearchTerm, setDashboardSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState<'all' | 'movie' | 'tv'>('all');

  const filteredLibrary = userData.library.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dashboard search results
  const dashboardSearchResults = useMemo(() => {
    if (!dashboardSearchTerm.trim()) return [];

    const searchLower = dashboardSearchTerm.toLowerCase();
    
    // Search in user's library first
    const libraryResults = userData.library.filter(content =>
      content.title.toLowerCase().includes(searchLower) ||
      content.genre.toLowerCase().includes(searchLower)
    );

    // Search in all available content
    const allResults = allContent.filter(content =>
      (content.title.toLowerCase().includes(searchLower) ||
       content.genre.toLowerCase().includes(searchLower)) &&
      (searchFilter === 'all' || content.type === searchFilter)
    );

    // Combine and remove duplicates, prioritizing user's library
    const combined = [...libraryResults];
    allResults.forEach(item => {
      if (!combined.find(existing => existing.title.toLowerCase() === item.title.toLowerCase())) {
        combined.push({
          id: item.id,
          title: item.title,
          type: item.type,
          genre: item.genre,
          year: item.year,
          poster: item.poster
        } as Content);
      }
    });

    // Sort alphabetically
    return combined.sort((a, b) => a.title.localeCompare(b.title));
  }, [dashboardSearchTerm, userData.library, searchFilter]);

  const stats = useMemo(() => {
    const movies = userData.library.filter(c => c.type === 'movie');
    const tvShows = userData.library.filter(c => c.type === 'tv');
    const avgRating = userData.library.length > 0
      ? userData.library.reduce((sum, c) => sum + (c.rating || 0), 0) / userData.library.length
      : 0;

    return {
      totalContent: userData.library.length,
      movies: movies.length,
      tvShows: tvShows.length,
      avgRating: avgRating.toFixed(1),
      watchlistCount: userData.watchlist.length
    };
  }, [userData.library, userData.watchlist]);

  const recentMovies = userData.library
    .filter(c => c.type === 'movie')
    .sort((a, b) => new Date(b.watchedDate || '').getTime() - new Date(a.watchedDate || '').getTime())
    .slice(0, 6);

  const recentShows = userData.library
    .filter(c => c.type === 'tv')
    .sort((a, b) => new Date(b.watchedDate || '').getTime() - new Date(a.watchedDate || '').getTime())
    .slice(0, 6);

  const handleAddContent = (contentData: Omit<Content, 'id'>) => {
    // Check if content already exists in library
    const existingContent = userData.library.find(
      content => content.title.toLowerCase() === contentData.title.toLowerCase() &&
                 content.type === contentData.type &&
                 content.year === contentData.year
    );

    if (existingContent && !editingContent) {
      alert('This content is already in your library!');
      return;
    }

    const newContent: Content = {
      ...contentData,
      id: Date.now().toString()
    };

    onUpdateUserData({
      ...userData,
      library: editingContent
        ? userData.library.map(c => c.id === editingContent.id ? { ...newContent, id: editingContent.id } : c)
        : [...userData.library, newContent]
    });

    setEditingContent(undefined);
    setPrefillData(undefined);
  };

  const handleDeleteContent = (id: string) => {
    onUpdateUserData({
      ...userData,
      library: userData.library.filter(c => c.id !== id)
    });
  };

  const handleDeleteWatchlistItem = (id: string) => {
    onUpdateUserData({
      ...userData,
      watchlist: userData.watchlist.filter(w => w.id !== id)
    });
  };

  const handleMoveToLibrary = (watchlistItem: WatchlistItem) => {
    // Check if content already exists in library
    const existingContent = userData.library.find(
      content => content.title.toLowerCase() === watchlistItem.title.toLowerCase() &&
                 content.type === watchlistItem.type &&
                 content.year === watchlistItem.year
    );

    if (existingContent) {
      alert('This content is already in your library!');
      return;
    }

    const newContent: Content = {
      id: Date.now().toString(),
      title: watchlistItem.title,
      type: watchlistItem.type,
      genre: watchlistItem.genre,
      year: watchlistItem.year,
      poster: watchlistItem.poster,
      watchedDate: new Date().toISOString()
    };

    onUpdateUserData({
      ...userData,
      library: [...userData.library, newContent],
      watchlist: userData.watchlist.filter(w => w.id !== watchlistItem.id)
    });

    setEditingContent(newContent);
    setIsAddModalOpen(true);
  };

  const handleHotContentAddToLibrary = (content: Omit<Content, 'id' | 'watchedDate'>) => {
    // Check if content already exists in library
    const existingContent = userData.library.find(
      existing => existing.title.toLowerCase() === content.title.toLowerCase() &&
                  existing.type === content.type &&
                  existing.year === content.year
    );

    if (existingContent) {
      alert('This content is already in your library!');
      return;
    }

    setPrefillData({
      title: content.title,
      type: content.type,
      genre: content.genre,
      year: content.year,
      poster: content.poster
    });
    setIsAddModalOpen(true);
  };

  const handleAddToWatchlist = (content: Omit<WatchlistItem, 'id' | 'addedDate'>) => {
    // Check if content already exists in watchlist
    const existingInWatchlist = userData.watchlist.find(
      existing => existing.title.toLowerCase() === content.title.toLowerCase() &&
                  existing.type === content.type &&
                  existing.year === content.year
    );

    // Check if content already exists in library
    const existingInLibrary = userData.library.find(
      existing => existing.title.toLowerCase() === content.title.toLowerCase() &&
                  existing.type === content.type &&
                  existing.year === content.year
    );

    if (existingInWatchlist) {
      alert('This content is already in your watchlist!');
      return;
    }

    if (existingInLibrary) {
      alert('This content is already in your library!');
      return;
    }

    const newWatchlistItem: WatchlistItem = {
      ...content,
      id: Date.now().toString(),
      addedDate: new Date().toISOString()
    };

    onUpdateUserData({
      ...userData,
      watchlist: [...userData.watchlist, newWatchlistItem]
    });
  };

  const handleSearchContentClick = (content: any) => {
    const searchQuery = encodeURIComponent(`${content.title} ${content.year} ${content.type === 'movie' ? 'movie' : 'TV show'}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  const handleSearchAddToLibrary = (content: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setPrefillData({
      title: content.title,
      type: content.type,
      genre: content.genre,
      year: content.year,
      poster: content.poster
    });
    setIsAddModalOpen(true);
  };

  const handleSearchAddToWatchlist = (content: any, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToWatchlist({
      title: content.title,
      type: content.type,
      genre: content.genre,
      year: content.year,
      poster: content.poster
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Welcome back, {userData.user.title} {userData.user.lastName}!
                </h1>
                <p className="text-gray-400 mt-1">
                  Ready for your next cinematic adventure?
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
          
          {/* Search Bar and Add Content Button */}
          <div className="flex items-center justify-between mt-6">
            <div className="relative">
              <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search content or genres..."
                    value={dashboardSearchTerm}
                    onChange={(e) => setDashboardSearchTerm(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <select
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value as 'all' | 'movie' | 'tv')}
                  className="bg-gray-600 text-white px-3 py-2 focus:outline-none border-l border-gray-600"
                >
                  <option value="all">All</option>
                  <option value="movie">Movies</option>
                  <option value="tv">Shows</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={() => {
                setPrefillData(undefined);
                setEditingContent(undefined);
                setIsAddModalOpen(true);
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 font-semibold"
            >
              <Plus className="w-4 h-4" />
              Add Content
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Results */}
        {dashboardSearchTerm && (
          <div className="mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Search Results</h3>
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                  {dashboardSearchResults.length} found
                </span>
              </div>
              
              {dashboardSearchResults.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No content found for "{dashboardSearchTerm}"
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {dashboardSearchResults.map((content) => {
                    const isInLibrary = userData.library.find(
                      lib => lib.title.toLowerCase() === content.title.toLowerCase()
                    );
                    
                    return (
                      <div key={content.id} className="group cursor-pointer" onClick={() => handleSearchContentClick(content)}>
                        <div className="w-full aspect-[2/3] relative overflow-hidden rounded-xl bg-gray-700 mb-2">
                          <img
                            src={content.poster}
                            alt={content.title}
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
                            {!isInLibrary && (
                              <button
                                onClick={(e) => handleSearchAddToLibrary(content, e)}
                                className="bg-purple-600/90 backdrop-blur-sm rounded-full p-2 hover:bg-purple-700 transition-colors duration-200"
                                title="Add to Library"
                              >
                                <Plus className="w-4 h-4 text-white" />
                              </button>
                            )}
                            
                            {/* Add to Watchlist Button */}
                            {!isInLibrary && (
                              <button
                                onClick={(e) => handleSearchAddToWatchlist(content, e)}
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
                              {content.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                              <span className="bg-gray-800/80 px-2 py-1 rounded">
                                {content.type === 'movie' ? 'Movie' : 'TV Show'}
                              </span>
                              <span>{content.year}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="font-medium text-sm text-white line-clamp-2 mb-1">
                          {content.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{content.genre}</span>
                          <span>{content.year}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stats.totalContent}</p>
                <p className="text-sm text-gray-400">Total Content</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stats.movies}</p>
                <p className="text-sm text-gray-400">Movies</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stats.tvShows}</p>
                <p className="text-sm text-gray-400">TV Shows</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stats.watchlistCount}</p>
                <p className="text-sm text-gray-400">To Watch</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Hot Content */}
          <HotContent 
            userData={userData}
            onAddToLibrary={handleHotContentAddToLibrary}
            onAddToWatchlist={handleAddToWatchlist}
          />

          {/* Recent Watches */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Your Recent Watches</h2>
            
            {/* Movies Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Movies</h3>
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.movies}
                </span>
              </div>
              
              {recentMovies.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No movies in your library yet. Add some to get started!
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {recentMovies.map((content) => (
                    <ContentCard
                      key={content.id}
                      content={content}
                      onEdit={(content) => {
                        setEditingContent(content);
                        setPrefillData(undefined);
                        setIsAddModalOpen(true);
                      }}
                      onDelete={handleDeleteContent}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* TV Shows Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-2">
                  <Tv className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">TV Shows</h3>
                <span className="bg-pink-500/20 text-pink-400 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.tvShows}
                </span>
              </div>
              
              {recentShows.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No TV shows in your library yet. Add some to get started!
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {recentShows.map((content) => (
                    <ContentCard
                      key={content.id}
                      content={content}
                      onEdit={(content) => {
                        setEditingContent(content);
                        setPrefillData(undefined);
                        setIsAddModalOpen(true);
                      }}
                      onDelete={handleDeleteContent}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Watchlist */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Watchlist</h3>
                <span className="bg-orange-500/20 text-orange-400 text-xs font-medium px-2 py-1 rounded-full">
                  {userData.watchlist.length}
                </span>
              </div>
              
              {userData.watchlist.length > 0 && (
                <div className="text-sm text-gray-400">
                  Click "Mark as Watched" to move items to your library
                </div>
              )}
            </div>

            {userData.watchlist.length === 0 ? (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-2">Your watchlist is empty</p>
                <p className="text-gray-500 text-sm mb-6">
                  Add content from the hot section above or search for something new!
                </p>
                <button
                  onClick={() => setDashboardSearchTerm('thriller')}
                  className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-600/30 transition-colors duration-200"
                >
                  Explore Thrillers
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {userData.watchlist.map((item) => (
                  <ContentCard
                    key={item.id}
                    content={item}
                    isWatchlist
                    onDelete={handleDeleteWatchlistItem}
                    onMoveToLibrary={handleMoveToLibrary}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <AddContentModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingContent(undefined);
          setPrefillData(undefined);
        }}
        onAdd={handleAddContent}
        editContent={editingContent}
        prefillData={prefillData}
      />
    </div>
  );
};