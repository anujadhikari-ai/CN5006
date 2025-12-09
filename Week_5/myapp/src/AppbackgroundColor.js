import './App.css';

function AppColor(props) {

  function greetUser(e) {
    document.body.style.background = e.target.value;
    alert("Welcome " + document.getElementById(props.color).value);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>

      <label>{props.lbl}</label>
      <input id={props.color} type="text" />

      <button value={props.color} onClick={greetUser}>
        Colour me {props.color}
      </button>
    </div>
  );
}

export default AppColor;
