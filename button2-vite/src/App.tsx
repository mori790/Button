import Button from './components/Button'; // Buttonのインポート
import './App.css';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight  } from 'react-icons/fa';


function App() {
  const [loading, setLoading] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const handleClick =(buttonKey: keyof typeof loading) => {
    setLoading((prevState) => ({...prevState, [buttonKey]: true}));
    // 非同期処理を行う。
    setTimeout(() => {
      setLoading((prevState) => ({...prevState, [buttonKey]: false}));  // 処理終了でローディング解除
      alert("Action completed!");
    }, 2000);  // 2秒後にローディング解除
  };

  return (
    <>
    <div>
      <h1>Button Showcase</h1>
      {/* 左にアイコン */}
      <Button
        label="Back"
        icon={<FaArrowLeft />}
        onClick={() => alert('Back clicked!')}
      />
      {/* ラベルを外部から指定したボタン */}
      <Button 
        label={loading.button1 ? "Loading..." : "Click Me" } 
        onClick={() => handleClick("button1")} 
        loading={loading.button1} />
      {/* クリック時に発火する関数を外部から指定したボタン */}
      <Button 
        label={loading.button2 ? "Loading..." : "Click Me" }  
        width="120px" height="40px" 
        onClick={() => handleClick("button2")}
        loading={loading.button2} />
      {/* リンクとして振る舞うボタン */}
      <Button 
        label={loading.button3 ? "Loading..." : "Go to google" } 
        href="https://google.com" 
        target="_blank"
        onClick={() => handleClick("button3")}
        loading={loading.button3}  />
      {/* 高さ、横幅は親コンポーネントから制御できるボタン */}
      <Button 
      label={loading.button4 ? "Loading..." : "Click Me" }  
      width="120px" height="40px"
      onClick={() => handleClick("button4")}
      loading={loading.button4}  />
      {/* 右にアイコン */}
      <Button
        label="Next"
        icon={<FaArrowRight />}
        onClick={() => alert('Next clicked!')}
      />
    </div>
    {/* フォーム内で使用される。typeがsubmitのボタン */}
    <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
      <Button 
      label={loading.button5 ? "Loading..." : "Submision Form" }  
      type="submit"
      onClick={() => handleClick("button5")}
      loading={loading.button5}  />
    </form>
    </>
    
  );
}

export default App;
