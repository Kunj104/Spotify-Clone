import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black p-6">
      <div className="flex items-center gap-2 mb-8">
        <Music2 className="w-8 h-8" />
        <span className="text-xl font-bold">Musicify</span>
      </div>

      <nav className="space-y-6">
        <div className="space-y-3">
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Home className="w-6 h-6" />
            Home
          </a>
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
            Search
          </a>
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Library className="w-6 h-6" />
            Your Library
          </a>
        </div>

        <div className="space-y-3">
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <PlusSquare className="w-6 h-6" />
            Create Playlist
          </a>
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Heart className="w-6 h-6" />
            Liked Songs
          </a>
        </div>

        <div className="pt-6 border-t border-zinc-800 space-y-3 text-sm text-zinc-400">
          {['Pop Mix', 'Chill Mix', 'Rock Classics', 'Daily Mix 1', 'Discover Weekly'].map((playlist) => (
            <a
              key={playlist}
              href="#"
              className="block hover:text-white transition-colors"
            >
              {playlist}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;