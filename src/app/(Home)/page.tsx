export const revalidate = 60; // Enable ISR: revalidate every 60 seconds
import React from "react";
import HeroSection from "./components/heroSection";
import SearchBox from "./components/searchBox";
import dynamic from "next/dynamic";
import Image from "next/image";

// Placeholder components for new sections
function TopDestinations() {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-blue-700">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Example destination cards */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-blue-50 hover:scale-105 transition-transform">
            <Image
              src="/1.webp"
              alt="Kathmandu"
              width={400}
              height={200}
              className="w-full h-32 sm:h-48 object-cover"
              sizes="(max-width: 600px) 100vw, 400px"
              quality={60}
              priority
            />
            <div className="p-2 sm:p-4">
              <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-blue-900">
                Kathmandu
              </h3>
              <p className="text-gray-600 text-xs sm:text-base">
                The heart of Nepal, rich in culture and history.
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden bg-blue-50 hover:scale-105 transition-transform">
            <Image
              src="/2.webp"
              alt="Pokhara"
              width={400}
              height={200}
              className="w-full h-32 sm:h-48 object-cover"
              sizes="(max-width: 600px) 100vw, 400px"
              quality={60}
            />
            <div className="p-2 sm:p-4">
              <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-blue-900">Pokhara</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                A paradise for adventure and natural beauty.
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden bg-blue-50 hover:scale-105 transition-transform">
            <Image
              src="/3.webp"
              alt="Chitwan"
              width={400}
              height={200}
              className="w-full h-32 sm:h-48 object-cover"
              sizes="(max-width: 600px) 100vw, 400px"
              quality={60}
            />
            <div className="p-2 sm:p-4">
              <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-blue-900">Chitwan</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                Wildlife, jungle safaris, and unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-yellow-600">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/globe.svg"
              alt="Global Expertise"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
              sizes="(max-width: 600px) 100vw, 64px"
              quality={60}
            />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-blue-900">
              Global Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-base">
              Years of experience crafting unique journeys worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/window.svg"
              alt="Personalized Service"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
              sizes="(max-width: 600px) 100vw, 64px"
              quality={60}
            />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-blue-900">
              Personalized Service
            </h3>
            <p className="text-gray-600 text-xs sm:text-base">
              Tailored itineraries and dedicated support for every traveler.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/file.svg"
              alt="Trusted Partners"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
              sizes="(max-width: 600px) 100vw, 64px"
              quality={60}
            />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-blue-900">
              Trusted Partners
            </h3>
            <p className="text-gray-600 text-xs sm:text-base">
              We work with the best hotels, airlines, and guides.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/next.svg"
              alt="24/7 Support"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
              sizes="(max-width: 600px) 100vw, 64px"
              quality={60}
            />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-blue-900">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-base">
              Always here for you, before, during, and after your trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#F8F9FA]">
      <HeroSection />
      <div
        className="w-full max-w-5xl flex justify-center z-30 mx-auto -mt-40 md:-mt-56"
        style={{ position: "relative" }}
      >
        <SearchBox />
      </div>
      <TopDestinations />
      <WhyChooseUs />
    </main>
  );
}
