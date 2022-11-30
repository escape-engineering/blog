import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const [up, setUp] = useState(0);
  function upHandler() {
    let count = up + 1;
    setUp(count);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>리액트 블로그</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}{' '}
          <span style={{ userSelect: 'none' }} onClick={upHandler}>
            👍좋아요
          </span>{' '}
          : {up}
        </h4>
        <p>11월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>11월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>11월 30일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
