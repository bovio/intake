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
    this.form = document.querySelector("form");
    this.form.onsubmit = this.onSubmit;
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
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    let values = Array.from(e.target);
    const valuesArray = () => {
      return values.forEach((x, i) => {});
    };
    console.log(valuesArray());
  }
}

new Intake();

document.getElementById("damage").addEventListener("change", function(e) {
  console.log(e.target.nextElementSibling.nextElementSibling.children);
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
});
document.getElementById("accessories").addEventListener("change", function(e) {
  console.log(e.target.nextElementSibling.nextElementSibling.children);
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
});
