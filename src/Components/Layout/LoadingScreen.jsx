import { Metronome } from "@uiball/loaders";
const LoadingScreen = () => {
  return (
    <div className="min-h-screen w-full bg-orange/10 justify-center items-center flex">
      <Metronome size={40} speed={1.6} color="#ed7c12" />
    </div>
  );
};

export default LoadingScreen;
