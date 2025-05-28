'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#apps', label: 'Our Apps' },
  { href: '#about', label: 'About' },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile navigation overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile navigation menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AppDevMasters
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Building apps that improve everyday life
            </p>
          </div>
        </div>
      </nav>
    </>
  )
} 