
  
    $(".right-corder-container-button").hover(function() {
$(".long-text").addClass("show-long-text");   
}, function () {
$(".long-text").removeClass("show-long-text");
});




// selection opt data


var stateObject = {
"Chhattisgarh": { "RAIPUR": ["Shiva Nishan"]
},
"GUJARAT": {
"AHMEDABAD": ["Patel Nissan"],
"BARUCH": ["Sharddha Batsun"],
"MEHSANA": ["Sai Aarav Nissan"],
"SURAT": ["Pramukh Nissan"],
"SILVASA": ["Pramukh Nissan"],
"VAPI": ["Pramukh Nissan"],
"VADODARA": ["Acuit Nissan"],
"YAVATMAL": ["Pobaru Datsun"]
}, "GOA": {
"GOA": ["AM Nissan"]

}, "MADHYA PRADESH": {
"CHHINDWARA": [ "Shree Krishna"],
"INDORE": ["Anand Nissan"],
"JABALPUR": [ "Platinum Nissan"],
"GWALIOR": ["Sumedha Nissan"],
"RATLAM": [ "Galaxy Nissan"]
},
"MAHARASHTRA": {
"AURANGABAD": [ "Aztral Automotive"],
"AHEMADNAGAR": [ "Sakeshwar Datsun"],
"NAGPUR": [ "Provecial Nissan"],
"NAVIMUMBAI": ["Etco Nissan"],
"PANWEL": ["Etco Nissan"],
"LATUR": ["Garje Datsun"]
},
}
window.onload = function () {
var StateSel = document.getElementById("StateSel"),
CitySel = document.getElementById("CitySel"),
DealerSel = document.getElementById("DealerSel");
for (var State in stateObject) {
StateSel.options[StateSel.options.length] = new Option(State, State);
}
StateSel.onchange = function () {
CitySel.length = 1; // remove all options bar first
DealerSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var City in stateObject[this.value]) {
CitySel.options[CitySel.options.length] = new Option(City, City);
}
}
StateSel.onchange(); // reset in case page is reloaded
CitySel.onchange = function () {
DealerSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var Dealer = stateObject[StateSel.value][this.value];
for (var i = 0; i < Dealer.length; i++) {
DealerSel.options[DealerSel.options.length] = new Option(Dealer[i], Dealer[i]);
}
}
}




//  page Scroll 


    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
   