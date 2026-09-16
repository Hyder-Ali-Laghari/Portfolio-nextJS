
'use client';

import { useState } from 'react';
import { MessageSquare, Mail } from 'lucide-react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
  window.open(
    'https://wa.me/03305866866', 
    'popupWindow', 
    'width=600,height=400,scrollbars=yes,resizable=yes'
  );
}

  return (
    <div className="fixed bottom-6 right-6  z-50">

      {/* Popup menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mt-6  flex flex-col gap-4">
          
          {/* WhatsApp */}
          
          <a
             onClick={openPopup}
            className="flex items-center gap-2 px-4 py-3 bg-[#0057FF] text-slate-950 font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-[#00a2ff] hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hyder.ali58144@gmail.com"
            className="flex items-center gap-2 px-4 py-3 bg-[#0057FF] text-slate-950 font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-[#00a2ff] hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>

        </div>
      )}

      {/* Main button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#0057FF] text-slate-950 font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-[#00a2ff] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Let's Talk</span>
      </button>

    </div>
  );
}

