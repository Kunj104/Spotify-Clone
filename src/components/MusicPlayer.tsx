import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  isPlaying: boolean;
  currentSong: Song;
  onPlayPause: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, currentSong, onPlayPause }) => {
  return (
    <div className="h-24 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-80">
        <img
          src={currentSong.coverUrl}
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div>
          <h4 className="text-sm font-medium">{currentSong.title}</h4>
          <p className="text-xs text-zinc-400">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={onPlayPause}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-black" />
            ) : (
              <Play className="w-5 h-5 fill-black ml-1" />
            )}
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
        </div>
        
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs text-zinc-400">2:14</span>
          <div className="h-1 flex-1 bg-zinc-600 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">{currentSong.duration}</span>
        </div>
      </div>

      <div className="w-80 flex items-center justify-end gap-2">
        <Volume2 className="w-5 h-5" />
        <div className="w-24 h-1 bg-zinc-600 rounded-full">
          <div className="h-full w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
