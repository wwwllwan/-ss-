
import React, { useState, useEffect } from 'react';
import Scene from './components/Scene';
import { Sparkles, MousePointer2 } from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Scene Layer */}
      <Scene />

      {/* UI Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Header */}
        <div className="absolute top-10 left-10 text-white z-10">
          <h1 className="text-7xl font-script text-amber-400 mb-2 tracking-wide drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
            Merry Christmas
          </h1>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-xs font-light ml-2">
            Interactive Luminous Tree
          </p>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-10 left-10 flex flex-col gap-4 z-10">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm">
            <MousePointer2 size={16} className="text-amber-400" />
            <span>Move mouse to sway the tree</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm">
            <Sparkles size={16} className="text-emerald-400" />
            <span>Scroll to explore the glow</span>
          </div>
        </div>

        {/* Aesthetic Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -ml-64 -mb-64" />
      </div>

      {/* Loading Screen */}
      <div className={`fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 transition-transform duration-700 ease-in-out ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="relative">
          <div className="w-16 h-16 border-t-2 border-amber-400 rounded-full animate-spin mb-8" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400" />
        </div>
        <h2 className="text-white font-serif text-2xl animate-pulse">Growing Your Tree...</h2>
      </div>
    </div>
  );
};

export default App;
