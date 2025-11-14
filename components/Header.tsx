import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Church logo */}
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
        <div className="text-white text-sm leading-tight">
          <div>Newlife</div>
          <div>Community</div>
          <div>Baptist Church</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
