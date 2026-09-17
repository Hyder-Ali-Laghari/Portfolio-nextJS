// components/Background.jsx
// export default function Background() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//       {/* Radial Gradient Glow Spotlights */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
//       {/* Subtle Grid Overlay */}
//       <div 
//         className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" 
//       />
//     </div>
//   );
// }


export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Pink / Purple glow - top left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[(var--primary)]/20 bg-[var(--primary)]/20 rounded-full blur-[120px]" />

      {/* Blue glow - top right */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] bg-[var(--secondary)]/20 rounded-full blur-[120px]" />

      {/* Purple glow - middle */}
      <div className="absolute top-[40%] -left-40 w-[450px] h-[450px] bg-[var(--primary)]/20 rounded-full blur-[120px]" />

      {/* Pink glow - lower right */}
      <div className="absolute top-[65%] -right-40 w-[500px] h-[500px] bg-[(var--background)]/15 rounded-full blur-[120px]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#4c1d95_1px,transparent_1px),linear-gradient(to_bottom,#4c1d95_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          opacity-20
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

    </div>
  );
}

