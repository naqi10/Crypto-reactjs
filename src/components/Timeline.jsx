// import React from 'react';
// import bitcoin from '../assets/btc.webp';
// import ethereum from '../assets/eth.png';
// import chain from '../assets/chain.png';
// import polygon from '../assets/polygon.png';
// const Timeline = () => {
//   return (
//     <>
//     <div className="bg-white dark:bg-gray-900 items-center justify-center min-h-screen text-center px-4">
//       <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl block">ROADMAP</span>
//       <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
//         The Timeline
//       </h2>
//       <p className="text-lg text-body-color-2 dark:text-body-color">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
//       </p>
//     </div>
//       <section className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
//         <div className="-mx-4 flex justify-center">
//           <div className="w-full px-4 lg:w-10/12 xl:w-9/12" style={{ opacity: 1, transform: 'none' }}>
//             <div className="wow fadeInUp relative -mx-4 flex flex-wrap md:py-14 lg:py-20">
//               {/* Vertical Line */}
//               <span className="absolute left-2 top-0 hidden h-full w-[2px] bg-light-bg dark:bg-[#2D2C4A] md:left-1/2 md:block"></span>

//               {/* Left Box 1 */}
//               <div className="w-full px-4 md:w-1/2">
//                 <div className="md:mr-3 md:text-right lg:mr-5 relative z-10 mb-10 rounded-lg bg-light-bg px-6 py-8 dark:bg-dark md:mb-0">
//                   <span className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:-right-9 md:left-auto md:block lg:-right-11"></span>
//                   <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
//                   <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Feb 25, 2025</h4>
//                   <p className="text-base font-medium text-body-color dark:text-white">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel
//                   </p>
//                   <a href="#" className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3 mt-4">
//                     <img src={bitcoin} alt="Bitcoin" className="w-10 h-10" />
//                     <span className="text-sm font-semibold text-primary">Bitcoin 4.5%</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Right Box 1 */}
//               <div className="w-full px-4 md:w-1/2">
//                 <div className="md:ml-3 lg:ml-5 relative z-10 mb-10 rounded-lg bg-light-bg px-6 py-8 dark:bg-dark">
//                   <span className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:-left-9 md:block lg:-left-11"></span>
//                   <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
//                   <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Jan 14, 2026</h4>
//                   <p className="text-base font-medium text-body-color dark:text-white">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel
//                   </p>
//                   <a href="#" className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3 mt-4">
//                     <img src={ethereum} alt="Ethereum" className="mr-2 w-4 h-4" />
//                     <span className="text-sm font-semibold text-primary">Ethereum 2.5%</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Left Box 2 */}
//               <div className="w-full px-4 md:w-1/2">
//                 <div className="md:mr-3 md:text-right lg:mr-5 relative z-10 mb-10 rounded-lg bg-light-bg px-6 py-8 dark:bg-dark md:mb-0">
//                   <span className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:-right-9 md:left-auto md:block lg:-right-11"></span>
//                   <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
//                   <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Mar 30, 2028</h4>
//                   <p className="text-base font-medium text-body-color dark:text-white">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel
//                   </p>
//                   <a href="#" className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3 mt-4">
//                     <img src={chain} alt="Chainlink" className="mr-2 w-4 h-4" />
//                     <span className="text-sm font-semibold text-primary">Chainlink 4.5%</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Right Box 2 */}
//               <div className="w-full px-4 md:w-1/2">
//                 <div className="md:ml-3 lg:ml-5 relative z-10 mb-10 rounded-lg bg-light-bg px-6 py-8 dark:bg-dark">
//                   <span className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:-left-9 md:block lg:-left-11"></span>
//                   <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
//                   <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Dec 19, 2028</h4>
//                   <p className="text-base font-medium text-body-color dark:text-white">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel
//                   </p>
//                   <a href="#" className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3 mt-4">
//                     <img src={polygon} alt="Polygon" className="mr-2 w-4 h-4" />
//                     <span className="text-sm font-semibold text-primary">Polygon 2.5%</span>
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Timeline;

import React from 'react';
import bitcoin from '../assets/btc.webp';
import ethereum from '../assets/eth.png';
import chain from '../assets/chain.png';
import polygon from '../assets/polygon.png';

const Timeline = () => {
  const events = [
    {
      date: 'Feb 25, 2025',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: bitcoin,
      name: 'Bitcoin',
      growth: '4.5%',
      side: 'left',
    },
    {
      date: 'Jan 14, 2026',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: ethereum,
      name: 'Ethereum',
      growth: '2.5%',
      side: 'right',
    },
    {
      date: 'Mar 30, 2028',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: chain,
      name: 'Chainlink',
      growth: '4.5%',
      side: 'left',
    },
    {
      date: 'Dec 19, 2028',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: polygon,
      name: 'Polygon',
      growth: '2.5%',
      side: 'right',
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-gray-900 items-center justify-center text-center px-4 py-10">
        <span className="mb-3 text-lg font-bold uppercase text-blue-600 block">ROADMAP</span>
        <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl">
          The Timeline
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <section className="relative max-w-5xl mx-auto py-10 px-4">
        {/* vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />

        {/* timeline events */}
        <div className="flex flex-col space-y-10">
          {events.map((event, index) => {
            const isLeft = event.side === 'left';
            return (
              <div key={index} className="relative flex justify-between items-center w-full">
                <div className={`w-5/12 ${isLeft ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  <div className="bg-[#f8f9fd] dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300">
                    <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">{event.date}</h4>
                    <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                      {event.text}
                    </p>
                    <div className="inline-flex items-center rounded-full bg-white p-2 pr-3 mt-4">
                      <img src={event.logo} alt={event.name} className="mr-2 w-5 h-5" />
                      <span className="text-sm font-semibold text-blue-600">{event.name} {event.growth}</span>
                    </div>
                  </div>
                </div>

                {/* center dot */}
                <div className="z-10 flex items-center justify-center order-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />
                </div>

                {/* Empty space */}
                <div className="w-5/12 order-1" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Timeline;

