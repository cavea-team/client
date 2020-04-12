import React from 'react';
import { Button } from './components/button';

function App() {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>Super cool page</h1>
      <Button
        onClick={() => console.log('I was clicked')}
        className="px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      >
        I am a button
      </Button>
    </div>
  );
}

export default App;
