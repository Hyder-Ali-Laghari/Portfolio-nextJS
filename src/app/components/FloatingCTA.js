// components/FloatingCTA.jsx
'use client';
import { MessageSquare } from 'lucide-react'; // npm install lucide-react

export default function FloatingCTA() {
  return (
    <a
    target='_blank'
      href="https://wa.me/03305866866"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-teal-400 text-slate-950 font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-teal-300 hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <MessageSquare className="w-5 h-5" />
      <span>Let's Talk</span>
    </a>
  );
}