
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const LaunchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path d="M10.707 8.293a1 1 0 00-1.414 1.414L10.586 11H4a1 1 0 100 2h6.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3zM19 4a2 2 0 00-2-2h-6a2 2 0 00-2 2v2a1 1 0 102 0V5a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a1 1 0 10-2 0v2a2 2 0 002 2h6a2 2 0 002-2V4z" />
  </svg>
);

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const handleOpenLink = () => {
    window.open(tool.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fffbfe] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-200">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
            <div className="flex flex-col">
                <h2 className="text-xl font-bold text-[#1d1b20]">{tool.titleEN}</h2>
                <h3 className="text-lg text-[#49454f]">{tool.titleHI}</h3>
            </div>
            <span className="bg-[#e8def8] text-[#4a4458] text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                {tool.category}
            </span>
        </div>
        
        <p className="text-sm text-[#49454f] mt-2 flex-grow">
          {tool.descEN}
        </p>
        <p className="text-sm text-[#49454f] mt-1 mb-6 flex-grow">
          {tool.descHI}
        </p>
        
        <div className="mt-auto">
          <button
            onClick={handleOpenLink}
            className="w-full flex items-center justify-center bg-[#6750a4] text-white font-medium py-3 px-4 rounded-full hover:bg-[#584490] focus:outline-none focus:ring-4 focus:ring-[#eaddff] transition-all duration-300 transform hover:scale-105"
            style={{ minHeight: '48px' }}
          >
            Open Tool
            <LaunchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
