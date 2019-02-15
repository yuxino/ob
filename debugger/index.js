import Mvvm from "./src/Mvvm";

function __main__() {
  let demo = new Mvvm({
    data: {
      text: [0],
      qaq: ""
    }
  });

  const p = document.getElementById("p");
  const input = document.getElementById("input");

  input.addEventListener("keyup", function(e) {
    demo.text[0] = e.target.value;
  });

  demo.$watch("text.0", str => {
    p.innerHTML = str;
  });

  demo.qaq = 123;

  demo.qaq;
  demo.qaq;
}

__main__();
