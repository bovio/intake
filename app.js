class Intake {
  constructor(
    problem,
    visual,
    accidental,
    expectations,
    data,
    password,
    accessories,
    internalNotes,
    bin,
    user
  ) {
    this.problem = problem;
    this.visual = visual;
    this.accidental = accidental;
    this.expectations = expectations;
    this.data = data;
    this.password = password;
    this.accessories = accessories;
    this.internalNotes = internalNotes;
    this.bin = bin;
    this.user = user;
  }
  renderCustomerNotes() {
    if (this.problem !== "") {
      let external = document.createElement("textarea");
      let externalHead = document.createElement("h2");
      externalHead.className = "external-head";
      externalHead.innerText = "external Notes:";
      external.setAttribute("class", "customer-facing");
      external.setAttribute("autofocus", "true");
      external.innerHTML = `
      Problem description: ${this.problem} 
      Visual notes: ${this.visual}
      Accidental damage: ${this.accidental}
      Customer expectations: ${this.expectations}
      Needs data? ${this.data}
      Password: ${this.password}
      Accessories: ${this.accessories}
      Internal notes: ${this.internal}
      BIN: ${this.bin}
      User: ${this.user}
      `;

      if (document.getElementById("external-notes").children.length <= 1) {
        document
          .getElementById("external-notes")
          .firstElementChild.appendChild(external);

        document
          .getElementById("external-notes")
          .insertBefore(
            externalHead,
            document.getElementById("external-notes").firstElementChild
          );
      } else {
        document
          .getElementById("external-notes")
          .children[1].replaceChild(
            external,
            document.getElementById("external-notes").children[1].childNodes[0]
          );
      }
    }
  }
}

class UI {}

document.querySelector("form").addEventListener("submit", function(e) {
  document.querySelector(".btn-submit").innerText = "update";
  let intake = new Intake();
  intake.problem = document.getElementById("problem").value;
  intake.visual = document.getElementById("visual").value;
  intake.expectations = document.getElementById("expectations").value;
  intake.password = document.getElementById("password").children[1].value;

  intake.internal = document.getElementById("internal").value;
  intake.bin = document.getElementById("bin").value;
  intake.user = document.getElementById("user").value;

  if (
    document
      .getElementById("accidental")
      .children[5].querySelector("textarea") != null
  ) {
    intake.accidental = document.getElementById(
      "accidental"
    ).children[5].children[0].value;
  } else {
    intake.accidental = "no damage";
  }

  if (
    document
      .getElementById("accessories")
      .children[5].querySelector("textarea") != null
  ) {
    intake.accessories = document.getElementById(
      "accessories"
    ).children[5].children[0].value;
  } else {
    intake.accessories = "no accessories";
  }

  document
    .getElementById("data")
    .querySelectorAll("input")
    .forEach(option => {
      if (option.checked) {
        intake.data = option.value;
      }
    });

  intake.renderCustomerNotes();

  e.preventDefault();
});

document.getElementById("accidental").addEventListener("change", function(e) {
  if (
    e.target.value === "yes" &&
    e.target.nextElementSibling.nextElementSibling.children.length === 0
  ) {
    let damageDiv = e.target.nextElementSibling.nextElementSibling;
    (".accident-box");
    let textArea = document.createElement("textarea");
    textArea.setAttribute("required", true);
    textArea.setAttribute("placeholder", "what's the damage?");
    textArea.className = "damage external";
    damageDiv.append(textArea);
  }
  if (e.target.value === "no") {
    document.querySelector(".accident-box").firstElementChild.remove();
  }
});
document.getElementById("accessories").addEventListener("change", function(e) {
  if (
    e.target.value === "yes" &&
    e.target.nextElementSibling.nextElementSibling.children.length === 0
  ) {
    let damageDiv = e.target.nextElementSibling.nextElementSibling;
    (".accident-box");
    let textArea = document.createElement("textarea");
    textArea.setAttribute("required", true);
    textArea.setAttribute(
      "placeholder",
      "list all accessories and note location"
    );
    textArea.className = "damage external";
    damageDiv.append(textArea);
  }

  if (e.target.value === "no") {
    document.querySelector(".accessories-box").firstElementChild.remove();
  }
});

document.querySelector(".btn-clear").addEventListener("click", function() {
  window.location.reload();
});
