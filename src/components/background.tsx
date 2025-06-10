// components/Background.tsx
export default function Background() {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4"
         style={{
           backgroundImage: "url('/assets/glistening_water_by_sini_ko.gif')",
           backgroundRepeat: "repeat",
           backgroundSize: "cover",
         }}>
         
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    </div>
  );
}
