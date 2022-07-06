import { Component, useContext } from 'solid-js';

const App: Component = () => {
  const start = () => { 
    const audio = new Audio('/assets/cunny.ogg')
    audio.play()
   }

  return (
    <div class="flex min-h-screen justify-center items-center">
      <button type="button" onClick={start}>
        <img src="/assets/sob.svg" alt="sob" class="md:w-96 w-64 transform transition-all hover:scale-95 active:scale-90" />
      </button>
    </div>
  );
};

export default App;
