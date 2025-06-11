import React, { useState } from 'react';
import { AuthModal } from './AuthModal';
import { User } from '../types';
import { movieQuotes } from '../data/mockData';
import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onAuth: (user: User) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAuth }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Pattern - Fixed positioning to prevent scrolling issues */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Movie Quotes Floating Around - Fixed positioning */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {movieQuotes.map((item, index) => {
          // Better distribution across the screen
          const positions = [
            { top: '8%', left: '5%' },
            { top: '15%', right: '8%' },
            { top: '25%', left: '12%' },
            { top: '35%', right: '15%' },
            { top: '45%', left: '8%' },
            { top: '55%', right: '12%' },
            { top: '65%', left: '15%' },
            { top: '75%', right: '5%' },
            { top: '12%', left: '75%' },
            { top: '28%', left: '85%' },
            { top: '42%', left: '78%' },
            { top: '58%', left: '82%' },
            { top: '72%', left: '75%' },
            { top: '18%', left: '45%' },
            { top: '38%', left: '52%' },
            { top: '62%', left: '48%' },
            { top: '82%', left: '45%' },
            { top: '5%', left: '35%' },
            { top: '88%', left: '25%' },
            { top: '92%', left: '65%' },
            { top: '3%', left: '65%' },
            { top: '48%', left: '25%' },
            { top: '68%', left: '35%' },
            { top: '22%', left: '25%' },
            { top: '52%', left: '65%' },
            { top: '32%', left: '35%' },
            { top: '78%', left: '55%' },
            { top: '85%', left: '85%' },
            { top: '95%', left: '15%' },
            { top: '2%', left: '85%' },
            { top: '12%', left: '25%' },
            { top: '88%', left: '35%' },
            { top: '6%', left: '55%' },
            { top: '76%', left: '8%' },
            { top: '86%', left: '75%' },
            { top: '16%', left: '65%' },
            { top: '36%', left: '15%' },
            { top: '56%', left: '85%' },
            { top: '26%', left: '75%' },
            { top: '46%', left: '5%' }
          ];
          
          const position = positions[index % positions.length];
          
          return (
            <div
              key={index}
              className={`absolute text-gray-400 text-sm font-light italic opacity-30 animate-float-${index % 4} max-w-xs z-0`}
              style={{
                ...position,
                animationDelay: `${index * 0.8}s`
              }}
            >
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30">
                <p className="text-xs mb-1">"{item.quote}"</p>
                <p className="text-gray-500 text-xs">— {item.character}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content - Relative positioning with high z-index */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 tracking-wider">
              Kara
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-light">
              Your cinematic journey begins here
            </p>
          </div>

          {/* Welcome Button */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Enter
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={onAuth}
      />

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-2deg); }
        }
        .animate-float-0 { animation: float-0 6s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 7s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};