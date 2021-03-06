const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

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
      let externalBtn = document.createElement("button");
      externalHead.className = "external-head";
      externalHead.innerText = "external Notes:";
      externalBtn.className = "external-btn";
      externalBtn.innerText = "Copy Customer Notes";
      external.setAttribute("class", "customer-facing");
      external.setAttribute("autofocus", "true");
      external.innerHTML = `
      Problem description: ${this.problem} 
      Visual notes: ${this.visual}
      Accidental damage: ${this.accidental}
      Customer expectations: ${this.expectations}
      Needs data? ${this.data}
      Accessories: ${this.accessories}
      BIN: ${this.bin}
      User: ${this.user}
      `;

      if (document.getElementById("external-notes").children.length <= 1) {
        document
          .getElementById("external-notes")
          .firstElementChild.appendChild(external);

        insertAfter(externalBtn, external);

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
      document
        .querySelector("#external-notes")
        .childNodes[2].childNodes[1].addEventListener("click", function() {
          let text = document.querySelector(".customer-facing");
          console.log(text);
          text.select();
          document.execCommand("copy");
          alert("Customer notes copied to clipboard");
        });
    }
  }

  renderInternalNotes() {
    if (this.problem !== "") {
      let internal = document.createElement("textarea");
      let internalHead = document.createElement("h2");
      let internalBtn = document.createElement("button");
      internalHead.className = "internal-head";
      internalHead.innerText = "internal Notes:";
      internalBtn.className = "internal-btn";
      internalBtn.innerText = "Copy Internal Notes";
      internal.setAttribute("class", "internal-facing");
      internal.setAttribute("autofocus", "true");
      internal.innerHTML = `
      Password: ${this.password}
      Internal notes: ${this.internal}
      `;

      if (document.getElementById("internal-notes").children.length <= 1) {
        document
          .getElementById("internal-notes")
          .firstElementChild.appendChild(internal);

        insertAfter(internalBtn, internal);

        document
          .getElementById("internal-notes")
          .insertBefore(
            internalHead,
            document.getElementById("internal-notes").firstElementChild
          );
      } else {
        document
          .getElementById("internal-notes")
          .children[1].replaceChild(
            internal,
            document.getElementById("internal-notes").children[1].childNodes[0]
          );
      }
    }
    document
      .querySelector("#internal-notes")
      .childNodes[2].childNodes[1].addEventListener("click", function() {
        let text = document.querySelector(".internal-facing");
        console.log(text);
        text.select();
        document.execCommand("copy");
        alert("Internal notes copied to clipboard");
      });
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
  intake.renderInternalNotes();

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
  let sure = confirm("Are you sure? You'll lose everything!");
  if (sure === true) {
    window.location.reload();
  } else {
  }
});
