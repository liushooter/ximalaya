// var s = document.createElement('script');
//
// s.src = chrome.extension.getURL('script.js');
// s.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(s);
//

////////////////////////////////////////////////////////

$(document).ready(function(){

  // $(".col.info").attr('target', '_blank');

function e(t) {
    if (!t) return "";
    var e, i, o, n, a, t = t.toString(),
        s = [-1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 62, - 1, - 1, - 1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, - 1, - 1, - 1, - 1, - 1, - 1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, - 1, - 1, - 1, - 1, - 1];
    for (n = t.length, o = 0, a = ""; n > o;) {
        do e = s[255 & t.charCodeAt(o++)];
        while (n > o && -1 == e);
        if (-1 == e) break;
        do i = s[255 & t.charCodeAt(o++)];
        while (n > o && -1 == i);
        if (-1 == i) break;
        a += String.fromCharCode(e << 2 | (48 & i) >> 4);
        do {
            if (e = 255 & t.charCodeAt(o++), 61 == e) return a;
            e = s[e]
        } while (n > o && -1 == e);
        if (-1 == e) break;
        a += String.fromCharCode((15 & i) << 4 | (60 & e) >> 2);
        do {
            if (i = 255 & t.charCodeAt(o++), 61 == i) return a;
            i = s[i]
        } while (n > o && -1 == i);
        if (-1 == i) break;
        a += String.fromCharCode((3 & e) << 6 | i)
    }
    return a
}

function i(t, e) {
    for (var i, o = [], n = 0, a = "", s = 0; 256 > s; s++) o[s] = s;
    for (s = 0; 256 > s; s++) n = (n + o[s] + t.charCodeAt(s % t.length)) % 256, i = o[s], o[s] = o[n], o[n] = i;
    for (var r = n = s = 0; r < e.length; r++) s = (s + 1) % 256, n = (n + o[s]) % 256, i = o[s], o[s] = o[n], o[n] = i, a += String.fromCharCode(e.charCodeAt(r) ^ o[(o[s] + o[n]) % 256]);
    return a
}

function o(t, e) {
    for (var i = [], o = 0; o < t.length; o++) {
        for (var n = 0, n = "a" <= t[o] && "z" >= t[o] ? t[o].charCodeAt(0) - 97 : t[o] - 0 + 26, a = 0; 36 > a; a++) if (e[a] == n) {
            n = a;
            break
        }
        i[o] = n > 25 ? n - 26 : String.fromCharCode(n + 97)
    }
    return i.join("")
}


function n(t) {
    this._randomSeed = t, this.cg_hun()
}

n.prototype = {
    cg_hun: function() {
        this._cgStr = "";
        var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890",
            e = t.length,
            i = 0;
        for (i = 0; e > i; i++) {
            var o = this.ran(),
                n = o * t.length,
                a = parseInt(n);
            this._cgStr += t.charAt(a), t = t.split(t.charAt(a)).join("")
        }
    },

    cg_fun: function(t) {
        var t = t.split("*"),
            e = "",
            i = 0;
        for (i = 0; i < t.length - 1; i++) e += this._cgStr.charAt(t[i]);
        return e
    },

    ran: function() {
        return this._randomSeed = (211 * this._randomSeed + 30031) % 65536, this._randomSeed / 65536
    },

    cg_decode: function(t) {
        var e = "",
            i = 0;
        for (i = 0; i < t.length; i++) {
            var o = t.charAt(i),
                n = this._cgStr.indexOf(o); - 1 !== n && (e += "" + n + "*")
        }
        return e
    }

};

///////////////////////////////////////////////////////

(function() {


$('.tab-tit').append("<button id='zqw-start'>button</button>");

$("#zqw-start").click(function(){

});

  var href = window.location.href;
  var sound_id = href.split('/').pop();
  var url = "http://mpay.ximalaya.com/mobile/track/pay/{soundId}";
  // var timestamp = (+ new Date());

  $.ajax({
    url: url.replace("{soundId}", sound_id),
    dataType: "json",
    data: {
      device: "pc",
      uid: '13192073', //xm.util.account.getUid()
      token: '0063756406c9704f2d09c450dd55e1bf5dd2', //xm.util.account.getToken()
      isBackend: false
    },
    method: "GET",
    success: function(t) {
      var title = t.title +".m4a";

      var s = "dg3utf1k6yxdwi09",
      r = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26],
      p = o(s, r),
      h = i(p, e(t.ep)).split("-"),
      c = new n(t.seed),
      y = c.cg_fun(t.fileId),
      m = h[0],
      f = h[1],
      g = h[2],
      v = h[3],
      P = t.duration;
      y = "/" === y[0] ? y : "/" + y;

      var download_url = ("http://audio.pay.xmcdn.com") + "/download/" + ("1.0.0") + y + "?sign=" + encodeURIComponent(f) + "&buy_key=" + encodeURIComponent(m) + "&timestamp=" + v + "&token=" + encodeURIComponent(g) + "&duration=" + P;

      var raw_html = "<a class='zqwlove' download='"+ title +"' href='"+download_url+ "'>"+title+"</a>";

      chrome.runtime.sendMessage({
        action: "download",
        status: "ok",
        data: raw_html
      });

    }
  });
  //////

})();

});
