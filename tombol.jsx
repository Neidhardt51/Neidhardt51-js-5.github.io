import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleTambah = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleKurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Jumlah: {count}</h1>
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
