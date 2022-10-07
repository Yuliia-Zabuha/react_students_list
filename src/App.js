import question from "./question.svg";
import rating from "./rating.png";
import diploma from "./diploma.png";
import "./App.css";
import Student from "./components/Student";

function App(props) {
  const list = props.listStudent;
  const listUsers = list.map((item) => {
    return (
            <Student
        img={item.img}
        name={item.name}
        second_name={item.second_name}
        homeworks={item.homeworks.length}
        scores={item.homeworks.reduce((sum, element) => sum + element, 0)}
      />
    );
  });
  const sortListUsers = listUsers.sort(
    (a, b) => b.props.scores - a.props.scores
  );

  return (
    <div className="wrapper">
      <div className="title_students_list">
        <div className="title">Рейтинг групи</div>
        <button className="help-question-btn">
          <img src={question} alt="question" className="img-btn-help" />
        </button>
      </div>
      <div className="subtitle_students_list">
        <img src={rating} alt="rating" className="img-subtitle" />
        <div className="text-subtitle text-subtitle-left">Студент</div>
        <div className="text-subtitle text-subtitle-right">Домашки/Бали</div>
        <img src={diploma} alt="diplom" className="img-subtitle-diploma" />
      </div>
      <div className="block_students_list">{sortListUsers}</div>
    </div>
  );
}

export default App;
