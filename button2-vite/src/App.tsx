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
    <>
    <div>
      <h1>Button Showcase</h1>
      {/* ラベルを外部から指定したボタン */}
      <Button label={loading ? "Loading..." : "Click Me" } onClick={handleClick} loading={loading} />
      {/* クリック時に発火する関数を外部から指定したボタン */}
      <Button label={loading ? "Loading..." : "Click Me" } width="120px" height="40px" onClick={handleClick} loading={loading} />
      {/* リンクとして振る舞うボタン */}
      <Button label={loading ? "Loading..." : "Go to google" } href="https://google.com" target="_blank"  />
      {/* 他のパターンのボタン */}
    </div>
    {/* フォーム内で使用される。typeがsubmit */}
    <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
      <Button label="Submit Form" type="submit" />
    </form>
    </>
    
  );
}

export default App;
