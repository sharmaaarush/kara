import React, { useState, useEffect } from 'react';
import { Content } from '../types';
import { genres } from '../data/mockData';
import { searchContent } from '../data/movieDatabase';
import { X, Star, Film, Tv, Search } from 'lucide-react';

interface AddContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (content: Omit<Content, 'id'>) => void;
  editContent?: Content;
  prefillData?: {
    title: string;
    type: 'movie' | 'tv';
    genre: string;
    year: number;
    poster?: string;
  };
}

export const AddContentModal: React.FC<AddContentModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  editContent,
  prefillData
}) => {
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie');
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'movie' as 'movie' | 'tv',
    genre: '',
    year: new Date().getFullYear(),
    rating: 0,
    notes: '',
    poster: ''
  });

  useEffect(() => {
    if (editContent) {
      setActiveTab(editContent.type);
      setFormData({
        title: editContent.title,
        type: editContent.type,
        genre: editContent.genre,
        year: editContent.year,
        rating: editContent.rating || 0,
        notes: editContent.notes || '',
        poster: editContent.poster || ''
      });
      setSearchTerm(editContent.title);
      setShowSuggestions(false);
    } else if (prefillData) {
      setActiveTab(prefillData.type);
      setFormData({
        title: prefillData.title,
        type: prefillData.type,
        genre: prefillData.genre,
        year: prefillData.year,
        rating: 0,
        notes: '',
        poster: prefillData.poster || ''
      });
      setSearchTerm(prefillData.title);
      setShowSuggestions(false);
    }
  }, [editContent, prefillData]);

  useEffect(() => {
    if (searchTerm.length > 0 && !editContent && !prefillData) {
      const results = searchContent(searchTerm, activeTab);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, activeTab, editContent, prefillData]);

  const handleSuggestionSelect = (suggestion: any) => {
    setFormData({
      ...formData,
      title: suggestion.title,
      type: activeTab,
      year: suggestion.year,
      genre: suggestion.genre,
      poster: suggestion.poster || ''
    });
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleTabChange = (tab: 'movie' | 'tv') => {
    setActiveTab(tab);
    setFormData({ ...formData, type: tab });
    if (searchTerm && !editContent && !prefillData) {
      const results = searchContent(searchTerm, tab);
      setSuggestions(results);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after a short delay to prevent visual glitch
    setTimeout(() => {
      setSearchTerm('');
      setShowSuggestions(false);
      setSuggestions([]);
      setFormData({
        title: '',
        type: 'movie',
        genre: '',
        year: new Date().getFullYear(),
        rating: 0,
        notes: '',
        poster: ''
      });
      setActiveTab('movie');
    }, 300);
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      type: activeTab,
      rating: formData.rating || undefined,
      notes: formData.notes || undefined,
      poster: formData.poster || undefined,
      watchedDate: new Date().toISOString()
    });
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">
            {editContent ? 'Edit Content' : 'Add New Content'}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!editContent && !prefillData && (
          <div className="p-6 border-b border-gray-700">
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => handleTabChange('movie')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors duration-200 ${
                  activeTab === 'movie'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Film className="w-4 h-4" />
                Movie
              </button>
              <button
                onClick={() => handleTabChange('tv')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors duration-200 ${
                  activeTab === 'tv'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Tv className="w-4 h-4" />
                Show
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {activeTab === 'movie' ? 'Movie' : 'Show'} Title *
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                required
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setFormData({ ...formData, title: e.target.value });
                }}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder={`Search for ${activeTab === 'movie' ? 'movies' : 'shows'}...`}
              />
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => handleSuggestionSelect(suggestion)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-600 transition-colors duration-200 text-left"
                  >
                    <img
                      src={suggestion.poster}
                      alt={suggestion.title}
                      className="w-12 h-16 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=100&h=150&fit=crop';
                      }}
                    />
                    <div>
                      <h4 className="text-white font-medium">{suggestion.title}</h4>
                      <p className="text-gray-400 text-sm">{suggestion.year} • {suggestion.genre}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Genre *
            </label>
            <select
              required
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            >
              <option value="">Select genre</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Year *
            </label>
            <input
              type="number"
              required
              min="1900"
              max={new Date().getFullYear() + 5}
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Rating
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating })}
                  className={`p-1 rounded transition-colors duration-200 ${
                    rating <= formData.rating
                      ? 'text-yellow-400'
                      : 'text-gray-500 hover:text-yellow-400'
                  }`}
                >
                  <Star className="w-4 h-4 fill-current" />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-400">
                {formData.rating}/10
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
              placeholder="Your thoughts, review, or notes..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              {editContent ? 'Update' : 'Add to Library'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};