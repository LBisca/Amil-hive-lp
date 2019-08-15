function SeguirCompra(plano) {
  var estado = "";
  var cep = document.getElementById("cep").value.replace(/[^\d]+/g, "");
  var vidas = document.getElementById("vidas").value.replace(/[^\d]+/g, "");
  var msgErro = document.getElementById("cep-error");
  var msgErroVd = document.getElementById("vidas-error");

  if (
    !cep ||
    cep.length != 8 ||
    cep === "00000000" ||
    cep === "11111111" ||
    cep === "22222222" ||
    cep === "33333333" ||
    cep === "44444444" ||
    cep === "55555555" ||
    cep === "66666666" ||
    cep === "77777777" ||
    cep === "88888888" ||
    cep === "99999999"
  ) {
    msgErro.style.display = "block";
    document.getElementById("cep").focus();
  } else {
    msgErro.style.display = "none";
    if (!vidas || vidas.length > 2 || vidas > 19 || vidas < 1) {
      msgErroVd.style.display = "block";
      document.getElementById("vidas").focus();
      document.getElementById("vidas").value = "";
    } else {
      //CRIAR UMA FUNÇÃO "ESCOLHER PLANO PARA A REGRA ABAIXO"
      if (plano === "200pf" && vidas >= 3) {
        planoUrl = "/plano-odontologico/dental-200-para-3-ou-mais/961419";
      }
      if (plano === "200pf" && vidas <= 2) {
        planoUrl = "/plano-odontologico/dental-200-para-1-a-2-pessoas/961413";
      }

      var AC = [69900000, 69999999];
      var AL = [57000000, 57999999];
      var AM1 = [69000000, 69299999];
      var AM2 = [69400000, 69899999];
      var AP = [68900000, 68999999];
      var BA = [40000000, 48999999];
      var CE = [60000000, 63999999];
      var DF1 = [70000000, 72799999];
      var DF2 = [73000000, 73699999];
      var ES = [29000000, 29999999];
      var GO1 = [72800000, 72999999];
      var GO2 = [73700000, 76799999];
      var MA = [65000000, 65999999];
      var MG = [30000000, 39999999];
      var MS = [79000000, 79999999];
      var MT = [78000000, 78899999];
      var PA = [66000000, 68899999];
      var PB = [58000000, 58999999];
      var PE = [50000000, 56999999];
      var PI = [64000000, 64999999];
      var PR = [80000000, 87999999];
      var RJ = [20000000, 28999999];
      var RN = [59000000, 59999999];
      var RO = [76800000, 76999999];
      var RR = [69300000, 69399999];
      var RS = [90000000, 99999999];
      var SC = [88000000, 89999999];
      var SE = [49000000, 49999999];
      var SP = [01000000, 19999999];
      var TO = [77000000, 77999999];

      if (cep >= AC[0] && cep <= AC[1]) {
        estado = "ac";
      }
      if (cep >= AL[0] && cep <= AL[1]) {
        estado = "al";
      }
      if (cep >= AM1[0] && cep <= AM1[1]) {
        estado = "am";
      }
      if (cep >= AM2[0] && cep <= AM2[1]) {
        estado = "am";
      }
      if (cep >= AP[0] && cep <= AP[1]) {
        estado = "ap";
      }
      if (cep >= BA[0] && cep <= BA[1]) {
        estado = "ba";
      }
      if (cep >= CE[0] && cep <= CE[1]) {
        estado = "ce";
      }
      if (cep >= DF1[0] && cep <= DF2[1]) {
        estado = "df";
      }
      if (cep >= DF2[0] && cep <= DF2[1]) {
        estado = "df";
      }
      if (cep >= ES[0] && cep <= ES[1]) {
        estado = "es";
      }
      if (cep >= GO1[0] && cep <= GO1[1]) {
        estado = "go";
      }
      if (cep >= GO2[0] && cep <= GO2[1]) {
        estado = "go";
      }
      if (cep >= MA[0] && cep <= MA[1]) {
        estado = "ma";
      }
      if (cep >= MG[0] && cep <= MG[1]) {
        estado = "mg";
      }
      if (cep >= MS[0] && cep <= MS[1]) {
        estado = "ms";
      }
      if (cep >= MT[0] && cep <= MT[1]) {
        estado = "mt";
      }
      if (cep >= PA[0] && cep <= PA[1]) {
        estado = "pa";
      }
      if (cep >= PB[0] && cep <= PB[1]) {
        estado = "pb";
      }
      if (cep >= PE[0] && cep <= PE[1]) {
        estado = "pe";
      }
      if (cep >= PI[0] && cep <= PI[1]) {
        estado = "pe";
      }
      if (cep >= PR[0] && cep <= PR[1]) {
        estado = "pr";
      }
      if (cep >= RJ[0] && cep <= RJ[1]) {
        estado = "rj";
      }
      if (cep >= RN[0] && cep <= RN[1]) {
        estado = "rn";
      }
      if (cep >= RO[0] && cep <= RO[1]) {
        estado = "ro";
      }
      if (cep >= RR[0] && cep <= RR[1]) {
        estado = "rr";
      }
      if (cep >= RS[0] && cep <= RS[1]) {
        estado = "rs";
      }
      if (cep >= SC[0] && cep <= SC[1]) {
        estado = "sc";
      }
      if (cep >= SE[0] && cep <= SE[1]) {
        estado = "se";
      }
      if (cep >= SP[0] && cep <= SP[1]) {
        estado = "sp";
      }
      if (cep >= TO[0] && cep <= TO[1]) {
        estado = "to";
      }

      var urlFinal =
        "https://www.amildentalvenda.com.br" +
        planoUrl +
        "?cep=" +
        cep +
        "&estado=" +
        estado +
        "&beneficiarios=" +
        vidas;

      window.location.href = urlFinal;
    }
  }
}
function vdChange() {
  var precoDst = document.getElementById("destaque-preco");

  var precoInd = "21,21";
  //var string2 = '10,8';

  //var precoInd = parseFloat(string1.replace(',', '.'));
  var estado = "";
  var cep = document.getElementById("cep").value.replace(/[^\d]+/g, "");
  var vidas = document.getElementById("modal_people-qtd").innerHTML;
  var msgErro = document.getElementById("cep-error");
  var msgErroVd = document.getElementById("vidas-error");

  vidas = vidas.split(" ");

  console.log(vidas[0]);

  if (vidas[0] === "1") {
    document.getElementById("price-md").innerHTML =
      "<h3 class='price-modal'> R$ 46,00</h3></div>";
  }

  if (vidas[0] === "2") {
    precoDst.style.display = "block";
    document.getElementById("price-md").style.marginTop = "";
  } else {
    precoDst.style.display = "none";
  }

  if (!vidas[0] || vidas[0].length > 2 || vidas[0] > 19 || vidas[0] < 1) {
    msgErroVd.style.display = "block";
  } else if (vidas[0] >= 3) {
    msgErroVd.style.display = "none";
    var preco = vidas[0] * 34;
    document.getElementById("price-md").innerHTML =
      "<p class='price-modal-label'>Subtotal:</p> <h3 class='price-modal'> R$ " +
      preco +
      ",00</h3></div>";
  } else {
    msgErroVd.style.display = "none";
    var preco = vidas[0] * 46.5;
    document.getElementById("price-md").innerHTML =
      "<p class='price-modal-label'>Subtotal:</p> <h3 class='price-modal'> R$ " +
      preco +
      ",00</h3></div>";
  }
}

function changeVidas() {
  document.getElementById("vidas").value = 3;
  vdChange();
}
