import React from 'react';
import { motion } from 'framer-motion';

const Collaborators = ({ collaborators = [] }) => {
  if (!collaborators.length) return null;
  
  return (
    <div className="absolute top-2 right-2 z-10">
      <div className="bg-[#132F4C] rounded-md p-2 shadow-lg">
        <h3 className="text-xs text-blue-300 mb-2 font-semibold">Collaborators</h3>
        <div className="space-y-1">
          {collaborators.map((user) => (
            <motion.div 
              key={user.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <span className="text-xs text-white">{user.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;