var mainBusAValue;
var mainBusBValue;
$(document).ready(function() {
  $("powerOn").click(function() {
    switch(mainBusA) {
    case 0:
      mainBusAValue = false;
    case 1:
      mainBusAValue = true;
  }
  
  switch(mainBusB) {
    case 0:
      mainBusBValue = false;
    case 1:
      mainBusBValue = true;
  }
  
  if (mainBusAValue && mainBusBValue) {
    alert("Power On");
  } else {
    alert("ErrorCode1");
  }
  });
});
