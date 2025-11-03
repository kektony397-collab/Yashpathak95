
import React, { useState, useMemo } from 'react';
import ToolCard from './components/ToolCard';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { toolsData } from './constants';
import type { Tool } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    if (!lowercasedQuery) {
      return toolsData;
    }
    return toolsData.filter(
      (tool) =>
        tool.titleEN.toLowerCase().includes(lowercasedQuery) ||
        tool.titleHI.toLowerCase().includes(lowercasedQuery) ||
        tool.category.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery]);

  return (
    <div className="bg-[#f7f2fa] min-h-screen flex flex-col">
      <header className="bg-[#eaddff] p-4 shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center text-[#21005d]">
          Utility Tools
        </h1>
      </header>
      
      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {filteredTools.map((tool: Tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center mt-12 text-gray-500">
              <p className="text-lg">No tools found for "{searchQuery}"</p>
              <p className="mt-2">Try searching for another keyword.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
