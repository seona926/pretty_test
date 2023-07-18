import React from 'react';
import { Link } from 'react-router-dom';

const Question3 = () => {
  return (
    <div className="container">
      <div className="subject">
        나는 남자에게(아빠, 남친 제외!) 예쁘다는 말을 1년에 n번 듣는다
      </div>
      <div className="main-image-container">
        <img src="img/barbie3.png" className="question-image" />
      </div>
      <div className="answers-container">
        <div className="answer">
          &nbsp;한 번 들을까 말까인데...?
        </div>
        <div className="answer">
            &nbsp;1번 ~ 3번은 듣는거 같아
        </div>
        <div className="answer">
          &nbsp;그걸 셀 수가 있어 ..?
        </div>
      </div>
      <div className="next-btn-container">
        <Link to="/result/beautiful">
          <button className="next-btn">결과보기</button>
        </Link>
      </div>
    </div>
  )
}

export default Question3