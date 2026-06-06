'use client';

interface Props {
  index: number;
  name: string;
  className?: string;
}

/**
 * Displays a unique resort/hotel vector illustration for each card.
 * Cycles through 8 distinct designs based on the property index.
 */
export default function HotelCardImage({ index, name, className = '' }: Props) {
  const Illustration = ILLUSTRATIONS[index % ILLUSTRATIONS.length];
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-ocean-200 via-ocean-300 to-ocean-500 dark:from-ocean-800 dark:via-ocean-700 dark:to-ocean-950 flex items-center justify-center ${className}`}>
      <Illustration />
      {/* Subtle overlay gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/30 to-transparent pointer-events-none" />
    </div>
  );
}

/* ── 8 Distinct Hotel / Resort Illustrations ── */

function Resort01() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Sun */}
      <circle cx="200" cy="30" r="18" fill="#f5af69" opacity="0.35" />
      <circle cx="200" cy="30" r="12" fill="#f5af69" opacity="0.5" />
      {/* Beach */}
      <path d="M0 120 Q60 110 120 118 Q180 126 240 115 L240 160 L0 160Z" fill="#f5ebd7" opacity="0.5" />
      {/* Waves */}
      <path d="M0 125 Q30 120 60 125 Q90 130 120 125 Q150 120 180 125 Q210 130 240 125" stroke="#0d8aaf" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M0 130 Q30 125 60 130 Q90 135 120 130 Q150 125 180 130 Q210 135 240 130" stroke="#339fbf" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Palm tree */}
      <rect x="65" y="50" width="4" height="70" rx="2" fill="#7d5f2c" />
      <ellipse cx="40" cy="42" rx="40" ry="10" fill="#0d8aaf" transform="rotate(-25, 40, 42)" opacity="0.7" />
      <ellipse cx="60" cy="38" rx="35" ry="9" fill="#339fbf" transform="rotate(10, 60, 38)" opacity="0.7" />
      <ellipse cx="80" cy="44" rx="30" ry="8" fill="#0a6e8c" transform="rotate(-15, 80, 44)" opacity="0.6" />
      {/* Coconuts */}
      <circle cx="55" cy="48" r="3" fill="#5a411a" />
      <circle cx="62" cy="46" r="2.5" fill="#5a411a" />
      {/* Umbrella */}
      <line x1="140" y1="55" x2="140" y2="95" stroke="#c77428" strokeWidth="2" />
      <path d="M110 65 Q140 40 170 65" fill="#e8923f" opacity="0.7" />
      {/* Chair */}
      <rect x="160" y="80" width="30" height="6" rx="3" fill="#085369" opacity="0.5" />
      <rect x="185" y="70" width="6" height="30" rx="3" fill="#085369" opacity="0.4" />
    </svg>
  );
}

function Resort02() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Mountains */}
      <polygon points="0,90 40,20 80,90" fill="#0d8aaf" opacity="0.3" />
      <polygon points="50,90 100,10 150,90" fill="#085369" opacity="0.35" />
      <polygon points="160,90 200,30 240,90" fill="#0d8aaf" opacity="0.25" />
      {/* Snow caps */}
      <polygon points="90,22 100,10 110,22 100,18" fill="#fdfaf5" opacity="0.4" />
      {/* Ground */}
      <rect x="0" y="90" width="240" height="70" fill="#f5ebd7" opacity="0.3" />
      {/* Building */}
      <rect x="70" y="48" width="100" height="52" rx="6" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <rect x="80" y="56" width="18" height="40" rx="3" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="105" y="56" width="18" height="40" rx="3" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="130" y="56" width="18" height="40" rx="3" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Roof */}
      <polygon points="70,48 120,20 170,48" fill="#e8923f" stroke="#c77428" strokeWidth="1.5" />
      {/* Chimney */}
      <rect x="145" y="22" width="10" height="16" rx="2" fill="#c77428" />
      {/* Trees */}
      <circle cx="30" cy="68" r="16" fill="#0d8aaf" opacity="0.4" />
      <rect x="28" y="74" width="4" height="20" rx="2" fill="#7d5f2c" opacity="0.4" />
      <circle cx="210" cy="72" r="12" fill="#0d8aaf" opacity="0.35" />
      <rect x="208" y="76" width="4" height="16" rx="2" fill="#7d5f2c" opacity="0.35" />
    </svg>
  );
}

function Resort03() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Sky gradient */}
      <rect x="0" y="0" width="240" height="120" fill="url(#sky3)" opacity="0.2" />
      {/* Pool */}
      <ellipse cx="120" cy="90" rx="80" ry="24" fill="#0d8aaf" opacity="0.4" stroke="#339fbf" strokeWidth="1.5" />
      <ellipse cx="120" cy="88" rx="70" ry="18" fill="#e6f3f7" opacity="0.3" />
      {/* Pool steps */}
      <rect x="105" y="78" width="30" height="6" rx="2" fill="#0a6e8c" opacity="0.3" />
      {/* Building left */}
      <rect x="15" y="40" width="55" height="55" rx="5" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <rect x="22" y="48" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="42" y="48" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="22" y="70" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="42" y="70" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="12" y="36" width="61" height="8" rx="2" fill="#e8923f" />
      {/* Building right */}
      <rect x="170" y="50" width="55" height="45" rx="5" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <rect x="178" y="58" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="198" y="58" width="16" height="16" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="167" y="46" width="61" height="8" rx="2" fill="#e8923f" />
      {/* Palm between buildings */}
      <rect x="112" y="45" width="4" height="40" rx="2" fill="#7d5f2c" />
      <circle cx="114" cy="40" r="18" fill="#0d8aaf" opacity="0.5" />
      <circle cx="108" cy="44" r="12" fill="#339fbf" opacity="0.4" />
    </svg>
  );
}

function Resort04() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Sunset sky */}
      <rect x="0" y="0" width="240" height="160" fill="#f5af69" opacity="0.1" />
      {/* Sun */}
      <circle cx="180" cy="50" r="22" fill="#e8923f" opacity="0.3" />
      <circle cx="180" cy="50" r="14" fill="#f5af69" opacity="0.5" />
      {/* Ocean */}
      <rect x="0" y="105" width="240" height="55" fill="#0d8aaf" opacity="0.2" />
      <path d="M0 108 Q40 103 80 108 Q120 113 160 108 Q200 103 240 108" stroke="#339fbf" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Beach */}
      <path d="M0 100 Q80 92 160 100 Q220 106 240 100 L240 110 L0 110Z" fill="#f5ebd7" opacity="0.4" />
      {/* Cottage */}
      <rect x="100" y="55" width="55" height="45" rx="4" fill="#fdfaf5" stroke="#e8923f" strokeWidth="2" />
      {/* Thatched roof */}
      <polygon points="90,55 127,22 165,55" fill="#c77428" stroke="#a28246" strokeWidth="1.5" />
      <path d="M95 45 L100 58 M105 42 L110 58 M115 40 L120 58 M125 38 L130 58 M135 40 L140 58 M145 42 L150 58 M155 45 L160 58" stroke="#a28246" strokeWidth="1" opacity="0.5" />
      {/* Door */}
      <rect x="118" y="72" width="18" height="28" rx="3" fill="#085369" />
      {/* Windows */}
      <circle cx="108" cy="70" r="5" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <circle cx="146" cy="70" r="5" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Fence */}
      {[25, 40, 55, 70].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="85" x2={x} y2="102" stroke="#7d5f2c" strokeWidth="1.5" />
          {i < 3 && <line x1={x} y1="90" x2={x + 15} y2="90" stroke="#7d5f2c" strokeWidth="1" />}
        </g>
      ))}
    </svg>
  );
}

function Resort05() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Clouds */}
      <ellipse cx="50" cy="20" rx="30" ry="10" fill="#fdfaf5" opacity="0.3" />
      <ellipse cx="70" cy="16" rx="20" ry="8" fill="#fdfaf5" opacity="0.25" />
      {/* Ground */}
      <rect x="0" y="105" width="240" height="55" fill="#e6f3f7" opacity="0.2" />
      {/* Multi-story hotel */}
      <rect x="55" y="20" width="130" height="88" rx="6" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      {/* Floors */}
      {[28, 42, 56, 70, 84].map((y, row) => (
        <g key={y}>
          {[62, 82, 102, 122, 142].map((x, col) => (
            <rect key={`${row}-${col}`} x={x} y={y} width={14} height={12} rx={2} fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="0.8" />
          ))}
        </g>
      ))}
      {/* Entrance */}
      <rect x="105" y="88" width="30" height="22" rx="4" fill="#085369" />
      <circle cx="128" cy="99" r="1.5" fill="#f5af69" />
      {/* Roof balcony */}
      <rect x="60" y="14" width="120" height="8" rx="3" fill="#e8923f" />
      {/* Antenna */}
      <line x1="120" y1="14" x2="120" y2="0" stroke="#4a5568" strokeWidth="1.5" />
      {/* Flag */}
      <rect x="120" y="0" width="20" height="8" rx="1" fill="#0d8aaf" opacity="0.6" />
      {/* Trees on sides */}
      <circle cx="25" cy="82" r="18" fill="#0d8aaf" opacity="0.4" />
      <rect x="23" y="88" width="4" height="20" rx="2" fill="#7d5f2c" opacity="0.4" />
      <circle cx="215" cy="85" r="14" fill="#339fbf" opacity="0.35" />
      <rect x="213" y="90" width="4" height="16" rx="2" fill="#7d5f2c" opacity="0.35" />
    </svg>
  );
}

function Resort06() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Hills */}
      <ellipse cx="60" cy="100" rx="80" ry="40" fill="#0d8aaf" opacity="0.15" />
      <ellipse cx="190" cy="105" rx="90" ry="35" fill="#085369" opacity="0.12" />
      {/* Ground */}
      <rect x="0" y="95" width="240" height="65" fill="#f5ebd7" opacity="0.25" />
      {/* Path */}
      <path d="M120 115 Q115 100 120 85 Q125 70 135 65 Q150 55 170 60" stroke="#c77428" strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
      {/* Traditional building */}
      <rect x="70" y="35" width="80" height="62" rx="6" fill="#fdfaf5" stroke="#e8923f" strokeWidth="2" />
      {/* Dome */}
      <path d="M80 35 Q110 8 140 35" fill="#e8923f" stroke="#c77428" strokeWidth="1.5" />
      {/* Pillars */}
      <rect x="80" y="42" width="8" height="55" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="132" y="42" width="8" height="55" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Door */}
      <rect x="100" y="68" width="20" height="29" rx="3" fill="#085369" />
      <circle cx="115" cy="83" r="2" fill="#f5af69" />
      {/* Windows */}
      <rect x="88" y="52" width="10" height="12" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="122" y="52" width="10" height="12" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Steps */}
      <rect x="108" y="92" width="14" height="5" rx="1" fill="#f5ebd7" />
      <rect x="104" y="96" width="22" height="4" rx="1" fill="#f5ebd7" />
    </svg>
  );
}

function Resort07() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Night sky */}
      <rect x="0" y="0" width="240" height="160" fill="#021217" opacity="0.3" />
      {/* Stars */}
      {[30, 80, 150, 200, 60, 180, 45, 220].map((x, i) => (
        <circle key={i} cx={x} cy={(i * 12) % 50 + 8} r={(i % 3) + 1} fill="#fdfaf5" opacity="0.5" />
      ))}
      {/* Moon */}
      <circle cx="200" cy="30" r="14" fill="#f5ebd7" opacity="0.5" />
      <circle cx="206" cy="26" r="12" fill="#021217" opacity="0.3" />
      {/* Ocean */}
      <rect x="0" y="100" width="240" height="60" fill="#085369" opacity="0.25" />
      {/* Luxury resort */}
      <rect x="40" y="40" width="160" height="65" rx="8" fill="#fdfaf5" stroke="#339fbf" strokeWidth="2" />
      {/* Glass panels */}
      {[50, 75, 100, 125, 150].map((x, i) => (
        <rect key={x} x={x} y={48} width={18} height={50} rx={2} fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.2" />
      ))}
      {/* Fountain */}
      <ellipse cx="120" cy="108" rx="20" ry="5" fill="#e6f3f7" opacity="0.4" />
      <line x1="120" y1="108" x2="120" y2="95" stroke="#0d8aaf" strokeWidth="2" />
      <path d="M112 98 Q120 86 128 98" fill="#339fbf" opacity="0.3" />
      {/* Entrance canopy */}
      <rect x="105" y="36" width="30" height="6" rx="3" fill="#e8923f" />
      {/* Palms */}
      <rect x="15" y="58" width="4" height="48" rx="2" fill="#7d5f2c" />
      <circle cx="17" cy="50" r="16" fill="#0d8aaf" opacity="0.4" />
      <rect x="221" y="55" width="4" height="50" rx="2" fill="#7d5f2c" />
      <circle cx="223" cy="47" r="16" fill="#0d8aaf" opacity="0.4" />
    </svg>
  );
}

function Resort08() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 max-w-[200px] opacity-80" aria-hidden="true">
      {/* Sunrise gradient */}
      <rect x="0" y="0" width="240" height="100" fill="#f5af69" opacity="0.08" />
      <rect x="0" y="40" width="240" height="60" fill="#e8923f" opacity="0.06" />
      {/* Sun rising over sea */}
      <circle cx="120" cy="65" r="28" fill="#e8923f" opacity="0.2" />
      <circle cx="120" cy="65" r="18" fill="#f5af69" opacity="0.35" />
      <circle cx="120" cy="65" r="10" fill="#f5af69" opacity="0.5" />
      {/* Sea */}
      <rect x="0" y="80" width="240" height="80" fill="#0d8aaf" opacity="0.15" />
      <path d="M0 85 Q30 80 60 85 Q90 90 120 85 Q150 80 180 85 Q210 90 240 85" stroke="#339fbf" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M0 92 Q40 87 80 92 Q120 97 160 92 Q200 87 240 92" stroke="#0a6e8c" strokeWidth="1" fill="none" opacity="0.25" />
      {/* Boat */}
      <path d="M60 78 L80 78 L75 88 L65 88 Z" fill="#c77428" opacity="0.6" />
      <line x1="70" y1="78" x2="70" y2="58" stroke="#7d5f2c" strokeWidth="1.5" />
      <polygon points="70,58 70,68 85,68" fill="#fdfaf5" opacity="0.5" />
      {/* Resort on shore */}
      <rect x="140" y="45" width="80" height="45" rx="5" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <rect x="148" y="52" width="14" height="30" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="168" y="52" width="14" height="30" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="188" y="52" width="14" height="30" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Roof */}
      <rect x="137" y="40" width="86" height="8" rx="3" fill="#e8923f" />
      {/* Palm */}
      <rect x="102" y="48" width="4" height="44" rx="2" fill="#7d5f2c" />
      <ellipse cx="88" cy="42" rx="28" ry="7" fill="#0d8aaf" transform="rotate(-20, 88, 42)" opacity="0.5" />
      <ellipse cx="108" cy="40" rx="22" ry="6" fill="#339fbf" transform="rotate(10, 108, 40)" opacity="0.5" />
      {/* Beach */}
      <path d="M0 90 Q60 82 120 90 Q180 98 240 90 L240 110 L0 110Z" fill="#f5ebd7" opacity="0.3" />
    </svg>
  );
}

const ILLUSTRATIONS = [
  Resort01, Resort02, Resort03, Resort04,
  Resort05, Resort06, Resort07, Resort08,
];
