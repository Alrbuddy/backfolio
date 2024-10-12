import React, { useState } from 'react';
import { Code, Headphones, MessageCircle, Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';

const portfolioVideos = [
  'https://www.youtube.com/watch?v=PyI-TzY_HJU',
];

const musicTracks = [
  { name: 'Ambient', url: '' },
  { name: 'Electronic', url: '' },
  { name: 'Lo-Fi', url: '' },
];

function App() {
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Code className="mr-2" /> Roblox Studio Backend Pro
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-xl">
            Expert Roblox Studio backend programmer with a passion for creating efficient, scalable, and innovative game systems. Specializing in performance optimization, data management, and server-side architecture.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioVideos.map((video, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <ReactPlayer
                  url={video}
                  width="100%"
                  height="200px"
                  loop
                  playing
                  muted
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Me?</h2>
          <ul className="list-disc list-inside text-xl">
            <li>Professional and tidy workflow</li>
            <li>Superior optimization techniques</li>
            <li>Extensive experience with Roblox Studio backend systems</li>
            <li>Commitment to clean, maintainable code</li>
            <li>Excellent communication and collaboration skills</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <a
            href="https://discord.gg/your-discord-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            <MessageCircle className="mr-2" /> Join My Discord
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm">© 2024 Roblox Studio Backend Pro. All rights reserved.</div>
          <div className="flex items-center">
            <Headphones className="mr-2" />
            <select
              className="bg-gray-700 text-white rounded px-2 py-1 mr-2"
              value={currentTrack.name}
              onChange={(e) => setCurrentTrack(musicTracks.find(track => track.name === e.target.value) || musicTracks[0])}
            >
              {musicTracks.map((track) => (
                <option key={track.name} value={track.name}>
                  {track.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded p-2"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </footer>

      <audio src={currentTrack.url} autoPlay={isPlaying} loop />
    </div>
  );
}

export default App;