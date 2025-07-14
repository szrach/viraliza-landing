// Viraliza Landing Page - React + Tailwind
// GOAL: Collect leads + establish authority in the Web3 influencer space

import React from 'react';

export default function ViralizaLandingPage() {
  return (
    <div className="bg-gradient-to-br from-black via-[#0c0c1a] to-[#10072d] text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <img src="/logo.png" alt="Viraliza logo" className="w-24 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">VIRALIZA</h1>
        <h2 className="text-xl md:text-2xl text-purple-300 mb-2">Web3 Agency</h2>
        <p className="text-lg max-w-xl text-gray-300">
          Built for Creators Who Move Markets.
        </p>
        <a href="#leadform" className="mt-8 inline-block bg-gradient-to-r from-fuchsia-500 to-blue-500 px-6 py-3 rounded-full text-white font-bold hover:scale-105 transition">
          Apply Now
        </a>
      </section>

      {/* STATS & PARTNERS */}
      <section className="py-12 bg-black text-center">
        <h3 className="text-2xl font-semibold mb-6">$5B+ Monthly Volume Across Our Partners</h3>
        <div className="flex flex-wrap items-center justify-center gap-6 grayscale opacity-80">
          <img src="/bitget.png" className="h-10" alt="Bitget" />
          <img src="/binance.png" className="h-10" alt="Binance" />
          <img src="/bybit.png" className="h-10" alt="Bybit" />
          <img src="/bitunix.png" className="h-10" alt="Bitunix" />
          <img src="/blofin.png" className="h-10" alt="Blofin" />
          <img src="/bingx.png" className="h-10" alt="BingX" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">We Build Influencers Who Print Volume</h3>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="text-xl font-semibold mb-2">Design That Converts</h4>
            <p className="text-gray-300">We craft scroll-stopping thumbnails, banners, media kits and social visuals that command attention.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Reach That Matters</h4>
            <p className="text-gray-300">Plug into our viral playbook to grow an audience that trusts you — and clicks your links.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Volume That Pays</h4>
            <p className="text-gray-300">Over $5B in trading volume flows through our creators every month. We get results — not just reach.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0b0b17] py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">Who is Viraliza for?</h4>
            <p className="text-gray-400">Crypto influencers, creators, and alpha-driven KOLs looking to grow, monetize, and scale.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Do you only work with big creators?</h4>
            <p className="text-gray-400">No — if you’re early but have potential, we’ll help you grow into a volume-generating machine.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">How do I apply?</h4>
            <p className="text-gray-400">Scroll down and fill the short form. We review every profile and respond fast if you're a fit.</p>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="leadform" className="py-20 px-6 max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Apply to Join Viraliza</h3>
        <p className="text-gray-400 mb-6">We only work with creators who are serious about growth, brand, and business. Let’s talk.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="bg-black border border-gray-700 p-3 rounded-md text-white" />
          <input type="email" placeholder="Email or Telegram" className="bg-black border border-gray-700 p-3 rounded-md text-white" />
          <textarea placeholder="Tell us who you are & your audience" className="bg-black border border-gray-700 p-3 rounded-md text-white"></textarea>
          <button type="submit" className="bg-gradient-to-r from-fuchsia-500 to-blue-500 py-3 px-6 rounded-md font-bold text-white hover:scale-105 transition">
            Submit Application
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Viraliza. Built for creators who move markets.
      </footer>
    </div>
  );
}
