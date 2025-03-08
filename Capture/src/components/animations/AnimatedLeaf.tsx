// import React from 'react';

// const AnimatedLeaf = () => {
//   return (
//     <div className="w-full h-full flex items-center justify-center">
//       <svg className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
//         <defs>
//           <radialGradient id="leafGradient" cx="50%" cy="50%" r="75%">
//             <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
//             <stop offset="100%" style={{ stopColor: '#065f46', stopOpacity: 1 }} />
//           </radialGradient>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
//             <feMerge>
//               <feMergeNode in="coloredBlur"/>
//               <feMergeNode in="SourceGraphic"/>
//             </feMerge>
//           </filter>
//         </defs>
        
//         {/* Multiple orbital paths */}
//         <circle cx="80" cy="80" r="75" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.15"/>
//         <circle cx="80" cy="80" r="65" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.2"/>
//         <circle cx="80" cy="80" r="55" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.25"/>
//         <circle cx="80" cy="80" r="45" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.3"/>
        
//         {/* Multiple orbiting particles */}
//         <circle cx="80" cy="5" r="2" fill="#34d399">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 80 80"
//             to="360 80 80"
//             dur="8s"
//             repeatCount="indefinite"/>
//         </circle>
        
//         <circle cx="80" cy="15" r="1.5" fill="#34d399">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="180 80 80"
//             to="-180 80 80"
//             dur="6s"
//             repeatCount="indefinite"/>
//         </circle>
        
//         <circle cx="80" cy="25" r="1.8" fill="#34d399">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="90 80 80"
//             to="450 80 80"
//             dur="10s"
//             repeatCount="indefinite"/>
//         </circle>
        
//         <circle cx="80" cy="35" r="1.2" fill="#34d399">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="-90 80 80"
//             to="-450 80 80"
//             dur="7s"
//             repeatCount="indefinite"/>
//         </circle>
        
//         {/* Main leaf path with partial rotation */}
//         <g transform="translate(80 80)">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             values="0;30;0;-30;0"
//             dur="4s"
//             repeatCount="indefinite"
//             additive="sum"/>
//           <path 
//             d="M49.816 -29.7902C47.105 -34.4609 39.933 -38.8395 21.388 -33.9625C15.1982 -38.2338 7.958 -40.7305 0.4512 -41.1824C-7.0556 -41.6342 -14.5431 -40.024 -21.2004 -36.5261C-27.8578 -33.0281 -33.4315 -27.7757 -37.318 -21.3374C-41.2046 -14.8992 -43.256 -7.5204 -43.25 0C-43.25 1.0313 -43.2128 2.0539 -43.1383 3.068C-56.7594 16.6977 -56.5273 25.094 -53.8031 29.79C-51.2422 34.207 -46.1289 36.094 -39.5203 36.094C-35.3137 36.094 -30.4969 35.329 -25.3621 33.984C-19.1711 38.249 -11.9315 40.74 -4.4268 41.188C3.0779 41.635 10.5621 40.021 17.2159 36.522C23.87 33.022 29.44 27.769 33.324 21.332C37.207 14.8948 39.257 7.5181 39.25 0C39.25 -1.0355 39.211 -2.0582 39.134 -3.0766C45.283 -9.2555 49.386 -15.198 50.736 -20.2641C51.947 -24.7414 50.903 -27.9297 49.816 -29.7902ZM-2 -30.9375C5.0073 -30.928 11.8046 -28.5436 17.2822 -24.1734C22.76 -19.8031 26.594 -13.7052 28.16 -6.875C22.062 -1.4051 13.8984 4.5504 3.9812 10.2523C-5.3602 15.6191 -14.7316 19.8602 -23.1277 22.563C-27.6491 18.3212 -30.7919 12.8189 -32.1485 6.7695C-33.505 0.7202 -33.0128 -5.5972 -30.7357 -11.3635C-28.4585 -17.1298 -24.5015 -22.0789 -19.3777 -25.5691C-14.2538 -29.0593 -8.1996 -30.9296 -2 -30.9375ZM-44.8871 24.617C-45.1492 24.157 -44.9602 21.085 -40.3023 15.2883C-38.8556 18.8999 -36.904 22.288 -34.5059 25.352C-41.9094 26.473 -44.6035 25.098 -44.8871 24.617ZM-2 30.938C-5.2941 30.938 -8.567 30.41 -11.6937 29.373C-4.5344 26.459 2.417 23.058 9.1117 19.1941C15.7813 15.3905 22.18 11.1307 28.263 6.4453C26.778 13.3719 22.964 19.5805 17.4577 24.037C11.9512 28.494 5.084 30.929 -2 30.938ZM40.784 -22.9238C40.234 -20.8699 38.717 -18.2531 36.32 -15.2754C34.873 -18.8918 32.92 -22.2844 30.519 -25.3516C37.321 -26.3699 40.475 -25.3516 40.896 -24.6168C40.969 -24.4922 41.059 -23.9422 40.784 -22.9238Z"
//             fill="url(#leafGradient)"
//             filter="url(#glow)">
//             <animate 
//               attributeName="opacity"
//               values="0.8;1;0.8"
//               dur="3s"
//               repeatCount="indefinite"/>
//           </path>
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default AnimatedLeaf;

import React from 'react';

const AnimatedLeaf = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <defs>
          <radialGradient id="leafGradient" cx="50%" cy="50%" r="75%">
            <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#065f46', stopOpacity: 1 }} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Multiple orbital paths */}
        <circle cx="150" cy="150" r="140" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.15"/>
        <circle cx="150" cy="150" r="120" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.2"/>
        <circle cx="150" cy="150" r="100" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.25"/>
        <circle cx="150" cy="150" r="80" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.3"/>
        
        {/* Multiple orbiting particles */}
        <circle cx="150" cy="10" r="4" fill="#34d399">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 150 150"
            to="360 150 150"
            dur="8s"
            repeatCount="indefinite"/>
        </circle>
        
        <circle cx="150" cy="30" r="3" fill="#34d399">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="180 150 150"
            to="-180 150 150"
            dur="6s"
            repeatCount="indefinite"/>
        </circle>
        
        <circle cx="150" cy="50" r="3.6" fill="#34d399">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="90 150 150"
            to="450 150 150"
            dur="10s"
            repeatCount="indefinite"/>
        </circle>
        
        <circle cx="150" cy="70" r="2.4" fill="#34d399">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-90 150 150"
            to="-450 150 150"
            dur="7s"
            repeatCount="indefinite"/>
        </circle>
        
        {/* Main leaf path with partial rotation */}
        <g transform="translate(150 150)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;30;0;-30;0"
            dur="4s"
            repeatCount="indefinite"
            additive="sum"/>
          <path 
            d="M49.816 -29.7902C47.105 -34.4609 39.933 -38.8395 21.388 -33.9625C15.1982 -38.2338 7.958 -40.7305 0.4512 -41.1824C-7.0556 -41.6342 -14.5431 -40.024 -21.2004 -36.5261C-27.8578 -33.0281 -33.4315 -27.7757 -37.318 -21.3374C-41.2046 -14.8992 -43.256 -7.5204 -43.25 0C-43.25 1.0313 -43.2128 2.0539 -43.1383 3.068C-56.7594 16.6977 -56.5273 25.094 -53.8031 29.79C-51.2422 34.207 -46.1289 36.094 -39.5203 36.094C-35.3137 36.094 -30.4969 35.329 -25.3621 33.984C-19.1711 38.249 -11.9315 40.74 -4.4268 41.188C3.0779 41.635 10.5621 40.021 17.2159 36.522C23.87 33.022 29.44 27.769 33.324 21.332C37.207 14.8948 39.257 7.5181 39.25 0C39.25 -1.0355 39.211 -2.0582 39.134 -3.0766C45.283 -9.2555 49.386 -15.198 50.736 -20.2641C51.947 -24.7414 50.903 -27.9297 49.816 -29.7902ZM-2 -30.9375C5.0073 -30.928 11.8046 -28.5436 17.2822 -24.1734C22.76 -19.8031 26.594 -13.7052 28.16 -6.875C22.062 -1.4051 13.8984 4.5504 3.9812 10.2523C-5.3602 15.6191 -14.7316 19.8602 -23.1277 22.563C-27.6491 18.3212 -30.7919 12.8189 -32.1485 6.7695C-33.505 0.7202 -33.0128 -5.5972 -30.7357 -11.3635C-28.4585 -17.1298 -24.5015 -22.0789 -19.3777 -25.5691C-14.2538 -29.0593 -8.1996 -30.9296 -2 -30.9375ZM-44.8871 24.617C-45.1492 24.157 -44.9602 21.085 -40.3023 15.2883C-38.8556 18.8999 -36.904 22.288 -34.5059 25.352C-41.9094 26.473 -44.6035 25.098 -44.8871 24.617ZM-2 30.938C-5.2941 30.938 -8.567 30.41 -11.6937 29.373C-4.5344 26.459 2.417 23.058 9.1117 19.1941C15.7813 15.3905 22.18 11.1307 28.263 6.4453C26.778 13.3719 22.964 19.5805 17.4577 24.037C11.9512 28.494 5.084 30.929 -2 30.938ZM40.784 -22.9238C40.234 -20.8699 38.717 -18.2531 36.32 -15.2754C34.873 -18.8918 32.92 -22.2844 30.519 -25.3516C37.321 -26.3699 40.475 -25.3516 40.896 -24.6168C40.969 -24.4922 41.059 -23.9422 40.784 -22.9238Z"
            fill="url(#leafGradient)"
            filter="url(#glow)">
            <animate 
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="3s"
              repeatCount="indefinite"/>
          </path>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLeaf;