const FilterOptions = (information) => {
  const id = information.id;

  constElements = {
    calculateAltura: ["divVFinal", "divTiempo", "divGravedad"],
    calculateVFinal: ["divGravedad", "divTiempo", "divAltura"],
    calculatetCaida: ["divAltura", "divGravedad"],
  };
  hideAllElemenst();

  switch (id) {
    case "altura":
      showElements(constElements.calculateAltura);
      break;
    case "vFinal":
      showElements(constElements.calculateVFinal);
      break;
    case "tCaida":
      showElements(constElements.calculatetCaida);
      break;
    default:
      alert("Sorry not a validd option");
  }
};

const hideAllElemenst = () => {
  const ids = ["divGravedad", "divTiempo", "divVFinal", "divAltura"];
  for (id of ids) {
    document.getElementById(id).hidden = true;
  }
};

const showElements = (ids) => {
  for (id of ids) {
    document.getElementById(id).hidden = false;
  }
};

const calculateData = () => {
  if (document.getElementById("altura").checked) {
    calculateAltura();
  }
  if (document.getElementById("vFinal").checked) {
    calculateVelocidadFinal();
  }
  if (document.getElementById("tCaida").checked) {
    calculateTCaida();
  }
};

const calculateAltura = () => {
  let errors = false;
  if (document.getElementById("InputTiempo").value === "") {
    swal("We Had an error!", "Tiempo is required!", "error");
    errors = true;
  }
  if (
    (document.getElementById("InputGravedad").value === "" &&
      document.getElementById("InputvFinal").value === "") ||
    (document.getElementById("InputGravedad").value != "" &&
      document.getElementById("InputvFinal").value != "")
  ) {
    swal(
      "We Had an error!",
      "Only Gravedad or Velocidad Final Must be Filled!",
      "error"
    );
    errors = true;
  }

  if (!errors) {
    let tiempo = parseFloat(document.getElementById("InputTiempo").value);
    let gravedad = parseFloat(document.getElementById("InputGravedad").value);
    let vFinal = parseFloat(document.getElementById("InputvFinal").value);
    let result = 0;
    let formula = "";
    let customFormula = "";

    if (isNaN(gravedad)) {
      result = (vFinal / 2) * tiempo;
      formula = "(VF/2)*t";
      customFormula = `${vFinal}/2*${tiempo}`;
    } else {
      result = 0.5 * gravedad * Math.pow(tiempo, 2);
      formula = "0.5*gt^2";
      customFormula = `0.5*${gravedad}*${tiempo}^2`;
    }

    initProgramAltura();

    document.getElementById(
      "alturaExplanation"
    ).innerText = `Altura: ${result.toFixed(
      3
    )} m \n This is the formula that we use in order to calculate the Altura ${formula} \n in our case we are using the following values ${customFormula}`;
  }
};

const calculateVelocidadFinal = () => {
  let errors = false;
  if (document.getElementById("vFinalGravedad").value === "") {
    swal("We Had an error!", "Gravedad is required!", "error");
    errors = true;
  }
  if (
    (document.getElementById("vFinalTiempo").value === "" &&
      document.getElementById("vFinalAltura").value === "") ||
    (document.getElementById("vFinalTiempo").value != "" &&
      document.getElementById("vFinalAltura").value != "")
  ) {
    swal(
      "We Had an error!",
      "Only Gravedad or Altura Must be Filled!",
      "error"
    );
    errors = true;
  }
  if (!errors) {
    let tiempo = parseFloat(document.getElementById("vFinalTiempo").value);
    let gravedad = parseFloat(document.getElementById("vFinalGravedad").value);
    let altura = parseFloat(document.getElementById("vFinalAltura").value);
    let result = 0;
    let formula = "";
    let customFormula = "";

    if (isNaN(altura)) {
      result = gravedad * tiempo;
      formula = "gravedad*tiempo";
      customFormula = `${gravedad}*${tiempo}`;
    } else {
      result = Math.sqrt(2 * gravedad * altura);
      formula = "sqrt(2*gravedad*altura)";
      customFormula = `sqrt(${gravedad}*${altura})`;
    }

    initProgramVFinal();

    document.getElementById(
      "vFinalExplanation"
    ).innerText = `Velocidad Final: ${result.toFixed(
      3
    )} m/s \n This is the formula that we use in order to calculate the Velocidad Final ${formula} \n in our case we are using the following values ${customFormula}`;
  }
};

const calculateTCaida = () => {
  let errors = false;
  if (
    document.getElementById("tCaidaGravedad").value === "" ||
    document.getElementById("tCaidaAltura").value === ""
  ) {
    swal("We Had an error!", "Gravedad and Altura are required!", "error");
    errors = true;
  }

  if (!errors) {
    let gravedad = parseFloat(document.getElementById("tCaidaGravedad").value);
    let altura = parseFloat(document.getElementById("tCaidaAltura").value);
    let result = 0;
    let formula = "";
    let customFormula = "";

    result = Math.sqrt((2 * altura) / gravedad);
    formula = "sqrt(2*altura/gravedad)";
    customFormula = `sqrt(2*${altura}/${gravedad})`;

    initProgramTCaida();

    document.getElementById(
      "tCaidaExplanation"
    ).innerText = `Tiempo Caida: ${result.toFixed(
      3
    )} m/s^2 \n This is the formula that we use in order to calculate the Tiempo Caida ${formula} \n in our case we are using the following values ${customFormula}`;
  }
};
