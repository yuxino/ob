import Vue from "./src/Vue";

function __main__() {
  let demo = new Vue({
    data: {
      text: ""
    }
  });

  const p = document.getElementById("p");
  const input = document.getElementById("input");

  input.addEventListener("keyup", function(e) {
    demo.text = e.target.value;
  });

  demo.$watch("text", str => (p.innerHTML = str));
}

__main__();
