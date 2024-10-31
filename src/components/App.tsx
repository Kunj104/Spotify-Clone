import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart, Clock3, Music2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import { Song } from './types';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: '4:03',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop'
  });

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Good evening</h1>
            <button className="hover:scale-105 transition-transform">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-zinc-800/50 hover:bg-zinc-800 transition-colors p-4 rounded-lg flex items-center gap-4 cursor-pointer group"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=100&h=100&fit=crop`}
                  alt="Playlist cover"
                  className="w-16 h-16 rounded object-cover"
                />
                <span className="font-semibold">Playlist {item}</span>
                <button className="ml-auto bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 fill-black" />
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="bg-zinc-900/90 rounded-lg">
            <div className="p-6">
              <div className="flex items-center text-zinc-400 text-sm border-b border-zinc-800 pb-3">
                <span className="w-12 text-center">#</span>
                <span className="flex-1">Title</span>
                <span className="w-48">Album</span>
                <Clock3 className="w-4 h-4 mr-8" />
              </div>
              
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className="flex items-center py-3 px-4 hover:bg-zinc-800/50 rounded-lg cursor-pointer group"
                >
                  <span className="w-12 text-center text-zinc-400">{i + 1}</span>
                  <div className="flex-1 flex items-center gap-4">
                    <img
                      src={`https://images.unsplash.com/photo-${1600000000000 + i}?w=50&h=50&fit=crop`}
                      alt="Song cover"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <p className="font-medium">Song Name {i + 1}</p>
                      <p className="text-sm text-zinc-400">Artist Name</p>
                    </div>
                  </div>
                  <span className="w-48 text-zinc-400">Album Name</span>
                  <span className="text-zinc-400 mr-8">3:30</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <MusicPlayer
        isPlaying={isPlaying}
        currentSong={currentSong}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
}

export default App;