import Button from './components/Button'; // Buttonのインポート
import './App.css';
import { useState } from 'react';


function App() {
  const [loading, setLoading] = useState(false);

  const handleClick =() => {
    setLoading(true);
    // 非同期処理を行う。
    setTimeout(() => {
      setLoading(false);  // 処理終了でローディング解除
      alert("Action completed!");
    }, 2000);  // 2秒後にローディング解除
  };

  return (
    <div>
      <h1>Button Showcase</h1>
      {/* 通常のボタン */}
      <Button label={loading ? "Loading..." : "Click Me" } onClick={handleClick} loading={loading} />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      {/* 他のパターンのボタン */}
    </div>
  );
}

export default App;
