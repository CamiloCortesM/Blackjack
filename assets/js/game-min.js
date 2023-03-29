const Module = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    l = ["A", "J", "Q", "K"],
    r = [],
    d = document.querySelector("#btnOrder"),
    n = document.querySelector("#btnStop"),
    s = document.querySelector("#btnNew"),
    a = document.querySelectorAll(".divCards"),
    i = document.querySelectorAll("small"),
    o = (t = 2) => {
      (e = c()), (r = []);
      for (let l = 0; l < t; l++) r.push(0);
      i.forEach((e) => (e.innerText = 0)),
        a.forEach((e) => (e.innerHTML = "")),
        (n.disabled = !1),
        (d.disabled = !1);
    },
    c = () => {
      e = [];
      for (let r = 2; r <= 10; r++) for (let d of t) e.push(r + d);
      for (let n of t) for (let s of l) e.push(s + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "no cards in the deck";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    h = (e, t) => ((r[t] = r[t] + $(e)), (i[t].innerText = r[t]), r[t]),
    b = (e, t) => {
      let l = document.createElement("img");
      (l.src = `assets/cards/${e}.png`),
        (l.alt = "card"),
        l.classList.add("item_card"),
        a[t].append(l);
    },
    f = () => {
      let [e, t] = r;
      setTimeout(() => {
        alert(
          (t > e && t < 21) || e > 21
            ? "You Lose"
            : (e > t && e <= 21) || t > 21
            ? "You win"
            : "Nobody won"
        );
      }, 100);
    },
    g = (e) => {
      do {
        let t = u();
        h(t, r.length - 1), b(t, r.length - 1);
      } while (r[r.length - 1] < e && e <= 21);
      f();
    };
  return (
    d.addEventListener("click", () => {
      let e = u(),
        t = h(e, 0);
      b(e, 0),
        t > 21
          ? ((n.disabled = !0), (d.disabled = !0), g(t))
          : 21 === t &&
            (console.warn("21, amazing!"),
            (n.disabled = !0),
            (d.disabled = !0),
            g(t));
    }),
    n.addEventListener("click", () => {
      (n.disabled = !0), (d.disabled = !0), g(r[0]);
    }),
    s.addEventListener("click", () => {
      o();
    }),
    { initGame: o }
  );
})();
