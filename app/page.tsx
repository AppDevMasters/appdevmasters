import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header with glassmorphism effect */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AppDevMasters
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105">Home</a>
            <a href="#apps" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105">Our Apps</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105">About</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section with enhanced design */}
        <section id="home" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Apps That{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Everyday Life</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                AppDevMasters builds innovative, beautiful, high-quality mobile apps that solve real-world problems. 
                We craft, launch, and support our own products — no client work, just pure product passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-lg">
                  Explore Our Apps
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group bg-white/80 backdrop-blur-sm text-slate-700 font-bold py-4 px-8 rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Section with enhanced cards */}
        <section id="apps" className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Apps</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Discover our collection of thoughtfully designed mobile applications that make life easier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* MaxFocus App Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-400 to-yellow-400 p-5 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <div className="w-10 h-10 text-white text-2xl flex items-center justify-center">💡</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">MaxFocus</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">Stay in flow and block distractions with our minimalist focus timer. Get more done, effortlessly.</p>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-105 text-lg">
                    Download
                  </button>
                </div>
              </div>

              {/* PlanToShop App Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-400 to-blue-400 p-5 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <div className="w-10 h-10 text-white text-2xl flex items-center justify-center">🛒</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">PlanToShop</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">Simplify your daily planning, groceries, and life admin with our beautifully simple lists app.</p>
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105 text-lg">
                    Download
                  </button>
                </div>
              </div>

              {/* Thinkers App Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 p-5 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <div className="w-10 h-10 text-white text-2xl flex items-center justify-center">🧠</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Thinkers</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">Capture ideas, organize thoughts, and brainstorm brilliantly with our intuitive thinking companion.</p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 text-lg">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with modern design */}
        <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8">
                About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium">
                We&apos;re a small team of makers, designers, and dreamers obsessed with quality and the user experience. 
                At AppDevMasters, we believe in building software that feels personal, delightful, and useful. 
                Our vision: empower people everywhere with mobile apps that really make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <div className="text-3xl">📱</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile First</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Every app is designed with mobile users in mind, ensuring perfect experiences on every device.</p>
              </div>

              <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <div className="text-3xl">💡</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation</h3>
                <p className="text-slate-600 text-lg leading-relaxed">We constantly push boundaries to create solutions that didn&apos;t exist before.</p>
              </div>

              <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <div className="text-3xl">👤</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">User Focused</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Every decision we make is driven by what&apos;s best for the people using our apps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-indigo-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              AppDevMasters
            </div>
            <p className="text-slate-300 mb-10 text-xl font-medium">Building apps that transform everyday life</p>
            
            <div className="flex justify-center space-x-8 mb-10">
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-lg font-semibold hover:scale-105">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-lg font-semibold hover:scale-105">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-lg font-semibold hover:scale-105">Support</a>
            </div>
            
            <p className="text-slate-500 text-lg">
              &copy; 2025 AppDevMasters. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 