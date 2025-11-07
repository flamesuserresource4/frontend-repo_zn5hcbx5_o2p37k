import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Websemble Studios</h4>
          <p className="mt-2 text-sm text-gray-600 max-w-xs">A modern web studio crafting fast, beautiful, and thoughtful digital experiences.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900">Services</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Shopify Development</li>
            <li>Custom Website Builds</li>
            <li>WordPress Development</li>
            <li>Branding & UI/UX</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900">Company</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#work" className="hover:text-gray-900">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900">Connect</h5>
          <div className="mt-3 flex items-center gap-3 text-gray-600">
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          </div>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Websemble Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
