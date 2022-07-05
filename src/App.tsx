import type { Component } from 'solid-js';

const App: Component = () => {
  const audio = new Audio('/assets/cunny.ogg')
  const start = () => { audio.play() }

  return (
    <div class="flex min-h-screen justify-center items-center">
      <button type="button" onClick={start}>
        <img src="/assets/sob.svg" alt="sob" class="md:w-96 w-64" />
      </button>
    </div>
  );
};

export default App;
