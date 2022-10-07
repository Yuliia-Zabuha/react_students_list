import "./Student.css";
import "../App";

function Student({ img, name, second_name, homeworks, scores }) {
  const homework_count = 35;
  const average_score = scores / homework_count;
  const gradation = {
    45: "s",
    65: "g",
    95: "vg",
    100: "ex",
  };

  const mark = (grade) => {
    for (const key in gradation) {
      if (key >= grade) {
        return gradation[key];
      }
    }
  };

  return (
    <div className="student_info">
      <div className="student_basic">
        <img src={img} alt="" className="student_img" />
        <div className="student_name">
          <div className="name text_name">{name}</div>
          <div className="second_name text_name">{second_name}</div>
        </div>
        <div className="student_result">
          <div className="homeworks text_result">{homeworks}</div>
          <div className="scores text_result">{scores}</div>
        </div>
      </div>
      <div className="mark">
        <span className={mark(average_score)}>
          {mark(average_score).toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default Student;
