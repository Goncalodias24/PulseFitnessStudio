import React from 'react';

export default function SpotCounter({ count, onIncrement, onDecrement, max = 15 }) {
  return (
    <div className="mt-3 pt-3 border-t border-brand-border flex items-center justify-between">
      <span className="text-xs text-gray-400 font-medium">Spots Reserved:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrement}
          disabled={count <= 0}
          className="w-6 h-6 rounded bg-brand-dark text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-red transition-colors text-xs flex items-center justify-center font-bold"
          aria-label="Decrease spot count"
        >
          -
        </button>
        <span className="text-xs font-bold w-4 text-center text-white">{count}</span>
        <button
          onClick={onIncrement}
          disabled={count >= max}
          className="w-6 h-6 rounded bg-brand-dark text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-red transition-colors text-xs flex items-center justify-center font-bold"
          aria-label="Increase spot count"
        >
          +
        </button>
      </div>
    </div>
  );
}