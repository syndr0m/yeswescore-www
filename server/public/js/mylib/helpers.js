// ALL USEFUL FCTS
var checkName =  function(input) {
  //var ck_name = /^[A-Za-z ]{3,40}$/;
  var ck_name = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,40}$/;
  if (!ck_name.test(input)) 
	return true;
	
  return false;
};

var checkPassword =  function(input) {
  var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
  if (!ck_password.test(input)) 
	return true;
	
  return false;
};

var checkRank =  function(input) {
  var ck_rank =  /^[A-Za-z0-9!\/\_-]{1,5}$/;
  if (!ck_rank.test(input)) 
	return true;
	
  return false;
};

var checkEmail =  function(input) {
  var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 
  if (!ck_email.test(input)) 
	return true;
	
  return false;
};

var checkLicence = function(input){
 var ck_licence = /^[A-Za-z0-9 ]{4,16}$/;

  if (!ck_licence.test(input)) 
	return true;
	
  return false; 
};

var checkComment = function(input){
 var ck_comment = /^[A-Za-z0-9 ]{2,300}$/;

  if (!ck_comment.test(input)) 
	return true;
	
  return false; 
};

var whoServe = function(sets,whobegin){

   //console.log('whoServe', sets);
   
   if (sets==="") sets="0/0";
   
   var total=0; 
    
 /*
 if ($.isNumeric(team2_set1) === false)
 */
    
  if (sets.indexOf(';')!=-1) { 
    var tab = sets.split(';');
	for (var i = 0; i < tab.length; i++) {
	    var tab2 = tab[i].split('/');
		for (var j = 0; j < tab2.length; j++) {
		 
     
		  total += parseInt(tab2[j]); 
		}   	  
	}	
   }
   else {
    var tab2 = sets.split('/');
	for (var i = 0; i < tab2.length; i++) {
	  total += parseInt(tab2[i]); 
	}   
   }
	
	
  //console.log('total',total);
  //console.log('modulo',total%2);
	
	
  if (total%2 === 0)
    return whobegin;

  
  return "";
};

JSON.tryParse = function(o, undefined) {
  try {
    return JSON.parse(o);
  } catch (e) {
    return undefined;
  }
};

String.prototype.startsWith = function (subString) {
    return this.indexOf(subString) === 0;
};

String.prototype.padLeft = function (size, padString) {
    var n = String(this);
    padString = padString || " ";
    while (n.length < size) {
        n = padString + n;
    }
    return n;
};

String.prototype.padRight = function(size, padString) {
  var t = String(this), l = padString.length;
  while (t.length + l <= size)
    t += padString;
  if (t.length < size)
    t += padString.substring(0, size - t);
  return t;
};

String.prototype.toRegExp = function () {
    return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

// for old browser : parse a date in yyyy-mm-dd format
var parseDate = function(input) {
  var parts = input.match(/(\d+)/g);
  
  //console.log('ANDROID parts',parts);
  
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4], parts[5]); // months are 0-based
};

Date.prototype.getMonthName = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'fr';
    return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameShort = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'fr';
    return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.locale = {
    fr: {
       month_names: ['janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre'],
       month_names_short: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    en: {
       month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

window.isMobileBrowser = (function () {
  // detect lots of mobile browser (not ipad/tablet/..)
  // isMobileBrowser copyright to http://detectmobilebrowsers.com/ (@chadsmith)
  var isMobileBrowser = null;
  /*#ifndef WEB*/
  isMobileBrowser = true; // WEB => null => dynamic computation.
  /*#endif*/
  return function () {
    if (isMobileBrowser === null) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      isMobileBrowser = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
    }
    return isMobileBrowser;
  }
})();

var assert = function () { };
/*#ifdef DEV*/
assert = function (t) { if (!t) throw "assert false " };
/*#endif*/

/*#ifdef DEV*/
if (false) {
/*endif*/
  // we do not want any console.log in production environment.
  setTimeout(function () {
    var f = console.log;
    console.log = function () {
      return;
    };
    console.log.f = f;
  }, 5000);
/*#ifdef DEV*/
} else {
  (function () {
    var start = Date.now();
    var f = console.log;
    console.log = function () {
      var a = Array.prototype.slice.apply(arguments);
      var now = Date.now() - start;
      now = String(Math.floor(now / 1000)).padLeft(3, '0') + "." + String(now % 1000).padRight(3, '0');
      a.unshift(now);
      f.apply(console, a);
    };
    console.log.f = f;
  })();
}
/*#endif*/