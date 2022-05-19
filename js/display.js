function myFunction() {  
  var freqs = []
  var myForm = document.getElementById("freq");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                freqs.push(checks[i].value);
            }
        }
  var commaSeparated = freqs.join(' • ')
  document.getElementById("results").innerHTML = commaSeparated;
}

function myFunction2() {  
  var durs = []
  var myForm = document.getElementById("dur");
  var checks = myForm.getElementsByTagName("INPUT");
  for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                durs.push(checks[i].value);
            }
        }
  var commaSeparated = durs.join(' • ')
  document.getElementById("results2").innerHTML = commaSeparated;
}

