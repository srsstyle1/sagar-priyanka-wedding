export default function GradientBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A1025] via-[#2b0d17] to-black" />

      <div className="absolute inset-0 opacity-20">

        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#D4AF37] blur-[180px]" />

        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#7d2344] blur-[180px]" />

      </div>
    </>
  );
}