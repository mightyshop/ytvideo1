import React, { useState } from 'react';
import { Play, Star, Info, ChevronRight, ArrowLeft, Clock, Calendar, User, Heart, Download, Share2, X } from 'lucide-react';
import EarningBanner from '../components/EarningBanner';
import CountdownTimer from '../components/CountdownTimer';

const Movie: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [balance, setBalance] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [showEarningMessage, setShowEarningMessage] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const movies = {
    featured: {
      id: 1,
      title: 'The Last Adventure',
      rating: 8.5,
      year: 2024,
      duration: '2h 15m',
      description: 'An epic journey through uncharted territories as a team of explorers face unprecedented challenges and discover the true meaning of courage.',
      thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      banner: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videoUrl: 'https://macdn.hakunaymatata.com/resource/aa024e46f048680da7c82a0f6aafc41f.mp4?Expires=1747098956&Signature=w7RMIOwvW7F~J~uj-rn812whvBS52ZvfAwN4c8sQReO0sMp-gRyojjfhA4s4IzD2TXJpQYmGA~zUIxByJG7buI~DZZKY-2a~zkOaaiWk-ZIve3kolh7upc4H1xQJN3Qrhu8~ioItcqDUdRLhklp59Q5gu2oQ45Ubez9knVAlp4qL3y6e--bLsqya7PGksNcJNrjJt1B3Yovah3zM936OeewMqAOwBL4avPz5P1OSqZCwMfOk5oPPHnXh4pea9BVuAEWUAyEKg8Z98W51w30V3jKLiNx3gaRkM5WEdW7dVUqHm97a9rnky8VE7TU~o7pW6c3A45tbKLw4rSekCEm-Og__&Key-Pair-Id=KMHN1LQ1HEUPL',
      cast: [
        { name: 'John Smith', role: 'Lead Actor' },
        { name: 'Emma Davis', role: 'Supporting Actor' },
        { name: 'Michael Chen', role: 'Supporting Actor' }
      ],
      director: 'Sarah Johnson',
      genre: ['Action', 'Adventure', 'Drama'],
      language: 'English'
    },
    recommended: [
      {
        id: 2,
        title: 'Space Odyssey',
        rating: 7.9,
        year: 2024,
        duration: '1h 55m',
        thumbnail: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1600',
        genre: ['Sci-Fi', 'Adventure']
      },
      {
        id: 3,
        title: 'Dark Mystery',
        rating: 8.2,
        year: 2024,
        duration: '2h 05m',
        thumbnail: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1600',
        genre: ['Mystery', 'Thriller']
      },
      {
        id: 4,
        title: 'Urban Chase',
        rating: 7.8,
        year: 2024,
        duration: '2h 10m',
        thumbnail: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600',
        genre: ['Action', 'Crime']
      }
    ]
  };

  const handleTimerComplete = () => {
    setBalance(prev => prev + 1);
    setShowEarningMessage(true);
    setTimeout(() => {
      setShowEarningMessage(false);
    }, 3000);
  };

  const handleMovieClick = (movieId: number) => {
    setSelectedMovie(String(movieId));
    setIsPlaying(true);
  };

  const handleDownload = () => {
    window.open(movies.featured.videoUrl, '_blank');
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Share Movie</h3>
            <button 
              onClick={() => setShowShareModal(false)}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors">
              Share on Facebook
            </button>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-colors">
              Share on Twitter
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors">
              Share on WhatsApp
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {selectedMovie ? (
        <div className="min-h-screen bg-black">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <button 
              onClick={() => setSelectedMovie(null)}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>

          <div className="fixed top-8 right-8 bg-black/90 rounded-xl backdrop-blur-md px-4 py-2 z-50">
            <span className="text-white font-bold">Balance: ${balance.toFixed(2)}</span>
          </div>

          <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-50">
            <div className="w-20 h-20 bg-black/90 rounded-full backdrop-blur-md flex items-center justify-center">
              <CountdownTimer 
                onComplete={handleTimerComplete}
                isPlaying={isPlaying}
              />
            </div>
            <p className="text-white text-xs mt-2 max-w-[120px] text-center opacity-80">
              Allow timer to finish to earn $1.00
            </p>
          </div>

          {showEarningMessage && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-full z-50 animate-fade-in-out">
              You earned $1.00!
            </div>
          )}

          <div className="flex justify-center bg-black">
            <div className="w-full max-w-5xl mx-auto relative">
              <div className="aspect-video">
                <video
                  src={movies.featured.videoUrl}
                  className="w-full h-full"
                  autoPlay
                  controls
                />
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={handleDownload}
                  className="p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-full transition-colors backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-full transition-colors backdrop-blur-sm"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold mb-4">{movies.featured.title}</h1>
                
                <div className="flex items-center space-x-4 mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{movies.featured.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{movies.featured.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{movies.featured.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{movies.featured.director}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                    <p className="text-gray-300">{movies.featured.description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Cast</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {movies.featured.cast.map((member, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-4">
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm text-gray-400">Genre</h3>
                        <p>{movies.featured.genre.join(', ')}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-400">Language</h3>
                        <p>{movies.featured.language}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Recommended</h2>
                <div className="space-y-4">
                  {movies.recommended.map(movie => (
                    <div 
                      key={movie.id}
                      onClick={() => handleMovieClick(movie.id)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={movie.thumbnail} 
                          alt={movie.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <h3 className="font-medium">{movie.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{movie.year}</span>
                          <span>•</span>
                          <span>{movie.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <EarningBanner message="Watch any movie for 5 minutes to earn $1.00!" />
          
          <div className="relative h-[70vh] mb-8">
            <div className="absolute inset-0">
              <img 
                src={movies.featured.banner}
                alt={movies.featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">{movies.featured.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{movies.featured.rating}</span>
                  </div>
                  <span>{movies.featured.year}</span>
                  <span>{movies.featured.duration}</span>
                </div>
                <p className="text-lg text-gray-300 mb-6">{movies.featured.description}</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleMovieClick(movies.featured.id)}
                    className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Play Now</span>
                  </button>
                  <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Add to Watchlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recommended Movies</h2>
                <button className="text-gray-400 hover:text-white flex items-center space-x-1">
                  <span>See all</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.recommended.map(movie => (
                  <div 
                    key={movie.id}
                    onClick={() => handleMovieClick(movie.id)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={movie.thumbnail} 
                        alt={movie.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">{movie.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{movie.rating}</span>
                        </div>
                        <span>{movie.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showShareModal && <ShareModal />}
    </div>
  );
};

export default Movie;