import React from 'react'
import { ArrowRight, Download, Smartphone, Lightbulb, ShoppingCart, Brain } from 'lucide-react'
import MobileNav from './components/MobileNav'

const apps = [
  {
    name: 'MaxFocus',
    description: 'Stay in flow and block distractions with our minimalist focus timer. Get more done, effortlessly.',
    icon: Lightbulb,
    color: 'from-orange-400 to-yellow-400'
  },
  {
    name: 'PlanToShop',
    description: 'Simplify your daily planning, groceries, and life admin with our beautifully simple lists app.',
    icon: ShoppingCart,
    color: 'from-green-400 to-blue-400'
  },
  {
    name: 'Thinkers',
    description: 'Capture ideas, organize thoughts, and brainstorm brilliantly with our intuitive thinking companion.',
    icon: Brain,
    color: 'from-purple-400 to-pink-400'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AppDevMasters
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#apps" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Our Apps</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
          </div>
          <MobileNav />
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Apps That Improve{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Everyday Life
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                AppDevMasters builds innovative, beautiful, high-quality mobile apps that solve real-world problems. 
                We craft, launch, and support our own products — no client work, just pure product passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#apps" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Explore Our Apps
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors">
                  <Download className="mr-2 w-5 h-5" />
                  Download Now
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </div>
        </section>

        <section id="apps" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Apps</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover our collection of thoughtfully designed mobile applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.map((app) => {
                const Icon = app.icon
                return (
                  <div 
                    key={app.name}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{app.name}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{app.description}</p>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                      Download
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                We&apos;re a small team of makers, designers, and dreamers obsessed with quality and the user experience. 
                At AppDevMasters, we believe in building software that feels personal, delightful, and useful. 
                Our vision: empower people everywhere with mobile apps that really make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Mobile First</h3>
                <p className="text-slate-600">Every app is designed with mobile users in mind, ensuring perfect experiences on every device.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation</h3>
                <p className="text-slate-600">We constantly push boundaries to create solutions that didn&apos;t exist before.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">User Focused</h3>
                <p className="text-slate-600">Every decision we make is driven by what&apos;s best for the people using our apps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AppDevMasters
            </div>
            <p className="text-slate-400 mb-8">Building apps that improve everyday life</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a>
            </div>
            
            <p className="text-slate-500 text-sm">
              &copy; 2025 AppDevMasters. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 