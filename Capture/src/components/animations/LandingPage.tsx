import React from 'react';
import AnimatedLeaf from './AnimatedLeaf';

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-emerald-50 to-emerald-100 relative">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <div className="flex-1 space-y-6 text-center lg:text-left z-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-emerald-900">
              We Are Here!
            </h1>
            <p className="text-lg lg:text-xl text-emerald-700 max-w-xl">
              Welcome to our innovative platform where creativity meets technology. 
              We're dedicated to bringing sustainable solutions to your everyday challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full height animated leaf on right side */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 flex items-center justify-center">
        <div className="w-[600px] h-[600px]">
          <AnimatedLeaf />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// "use client";
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import AnimatedLeaf from './AnimatedLeaf';

// const LandingPage = () => {
//   const h1Ref = useRef<HTMLHeadingElement>(null);
//   const paragraphRef = useRef<HTMLParagraphElement>(null);
//   const buttonsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
//     tl.fromTo(
//       h1Ref.current, 
//       { opacity: 0, y: 50, scale: 0.8 }, 
//       { opacity: 1, y: 0, scale: 1, duration: 0.8 }
//     )
//     .fromTo(
//       paragraphRef.current, 
//       { opacity: 0, y: 50, scale: 0.9 }, 
//       { opacity: 1, y: 0, scale: 1, duration: 0.8 },
//       '-=0.4'
//     )
//     .fromTo(
//       (buttonsRef.current as HTMLDivElement).children, 
//       { opacity: 0, y: 50, scale: 0.9 }, 
//       { 
//         opacity: 1, 
//         y: 0, 
//         scale: 1, 
//         duration: 0.6,
//         stagger: 0.2
//       },
//       '-=0.4'
//     );
//   }, []);

//   return (
//     <div className="min-h-screen min-w-full bg-gradient-to-br from-emerald-50 to-emerald-100 relative">
//       <div className="container mx-auto px-4 py-12 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left side content */}
//           <div className="flex-1 space-y-6 text-center lg:text-left z-20">
//             <h1 
//               ref={h1Ref}
//               className="text-4xl lg:text-6xl font-bold text-emerald-900"
//             >
//               We Are Here!
//             </h1>
//             <p 
//               ref={paragraphRef}
//               className="text-lg lg:text-xl text-emerald-700 max-w-xl"
//             >
//               Welcome to our innovative platform where creativity meets technology. 
//               We're dedicated to bringing sustainable solutions to your everyday challenges.
//             </p>
//             <div 
//               ref={buttonsRef}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
//                 Get Started
//               </button>
//               <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full height animated leaf on right side */}
//       <div className="absolute top-0 right-0 bottom-0 w-1/2 flex items-center justify-center">
//         <div className="w-[600px] h-[600px]">
//           <AnimatedLeaf />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;