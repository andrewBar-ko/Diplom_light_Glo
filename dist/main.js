!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var l = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(l.exports, l, l.exports, n),
        l.l = !0,
        l.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var l in e)
                n.d(o, l, function(t) {
                    return e[t]
                }
                .bind(null, l));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    var o = e=>{
        [...e.elements].filter(e=>"button" !== e.tagName.toLowerCase() && "button" != e.type).forEach(e=>{
            e.value = ""
        }
        )
    }
    ;
    var l = e=>{
        let t = 0;
        e.style.display = "block",
        e.style.opacity = t,
        setTimeout((function n() {
            t > 1 ? e.style.opacity = 1 : (e.style.opacity = t,
            t += .01,
            setTimeout(n, .1))
        }
        ), 60)
    }
    ;
    var c = e=>{
        const t = document.querySelector(".popup-call")
          , n = document.querySelector(".popup-check")
          , c = document.querySelector(".popup-discount")
          , r = document.querySelector(".popup-consultation");
        let a;
        switch (!0) {
        case -1 != e.className.indexOf("call-btn"):
            a = t;
            break;
        case -1 != e.className.indexOf("check-btn"):
            a = n;
            break;
        case -1 != e.className.indexOf("discount-btn"):
            a = c;
            break;
        case -1 != e.className.indexOf("consultation-btn"):
            a = r
        }
        const s = a.querySelector("form");
        o(s),
        l(a),
        a.addEventListener("click", e=>{
            let t = e.target;
            t.classList.contains("popup-close") ? a.style.display = "none" : (t = t.closest(".popup-content")) || (a.style.display = "none")
        }
        )
    }
    ;
    var r = e=>{
        const t = document.querySelector(".text-center>.row").children;
        Array.from(t).forEach((function(e) {
            e.className = "col-xs-12 col-sm-6 col-md-4"
        }
        )),
        e.style.display = "none"
    }
    ;
    var a = e=>{
        const t = e.getAttribute("aria-controls")
          , n = e.getAttribute("data-parent")
          , o = document.querySelector(n).querySelectorAll(".panel-collapse")
          , l = document.getElementById(t);
        o.forEach(e=>{
            e.id != l && e.classList.remove("in")
        }
        ),
        l.classList.add("in")
    }
    ;
    var s = e=>{
        const t = e.querySelector('input[name="user_name"]')
          , n = e.querySelector('input[name="user_phone"]')
          , l = document.getElementsByName("user_quest")
          , c = document.createElement("div");
        if (c.className = "status",
        c.style.cssText = "font-size: 2rem;",
        e.querySelector(".status") || (e.appendChild(c),
        setTimeout(()=>{
            e.removeChild(c)
        }
        , 4e3)),
        t && !t.value.match(/[а-яёА-ЯЁ\s]/g))
            return void (c.textContent = "Ошибка ввода");
        if (n && !n.value.match(/[0-9]/g))
            return void (c.textContent = "Ошибка ввода");
        c.textContent = "Загрузка...";
        const r = new FormData(e);
        let a = {}
          , s = JSON.parse(localStorage.getItem("calcData"))
          , i = {};
        r.forEach((e,t)=>{
            a[t] = e
        }
        ),
        s.body = a,
        "" != l[0].value && (s.userQuestion = l[0].value),
        i = s,
        l[0].value = "",
        c.textContent = "Загрузка...";
        ((e,t)=>fetch(t, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        }))(i, "./server.php").then(e=>{
            if (200 != e.status)
                throw new Error("network status is not 200");
            console.log(e),
            c.textContent = "Спасибо! Ожидайте звонка нашего менеджера"
        }
        ).catch(e=>{
            c.textContent = "Что-то пошло не так...",
            console.error(e)
        }
        ).finally(o(e))
    }
    ;
    var i = ()=>{
        const e = document.getElementById("accordion")
          , t = e.querySelectorAll("select")
          , n = e.querySelectorAll(".onoffswitch-checkbox")
          , o = e.querySelectorAll(".select-box")
          , l = e.querySelectorAll(".title-text")
          , c = e.querySelectorAll("a")
          , r = e.querySelectorAll("input")[2]
          , s = document.getElementById("calc-result")
          , i = document.getElementById("collapseFour").querySelector("button.construct-btn");
        let u = {
            val: 1
        }
          , d = {
            val: 0
        }
          , m = {
            val: 0
        }
          , y = {
            body: {},
            type: 1,
            diameter1: 1.4,
            ringNumber1: 1,
            diameter2: 0,
            ringNumber2: 0,
            bottom: !0,
            sum: 0
        };
        i.disabled = !0,
        r.placeholder = "Введите расстояние";
        const p = ()=>{
            n[0].checked ? (o[2].style.display = "none",
            o[3].style.display = "none",
            l[1].style.display = "none",
            t[2].selectedIndex = 0,
            t[3].selectedIndex = 0) : (o[2].style.display = "inline-block",
            o[3].style.display = "inline-block",
            l[1].style.display = "block")
        }
        ;
        p(),
        e.addEventListener("click", e=>{
            e.preventDefault();
            let t = e.target;
            switch (t.closest("a") && (t = t.closest("a")),
            "button" == t.getAttribute("role") && (p(),
            a(t)),
            !0) {
            case "#collapseTwo" == t.getAttribute("href"):
                a(c[2]),
                p();
                break;
            case "#collapseThree" == t.getAttribute("href"):
                a(c[4]),
                p();
                break;
            case "#collapseFour" == t.getAttribute("href"):
                a(c[6]),
                p()
            }
            -1 == t.className.indexOf("onoffswitch-inner") && -1 == t.className.indexOf("onoffswitch-switch") || ((e=>{
                e.closest("div[role]").querySelector(".onoffswitch-checkbox").toggleAttribute("checked"),
                p(),
                f()
            }
            )(t),
            p())
        }
        );
        const f = ()=>{
            const e = []
              , o = [[1, 1.2], [1, 1.3, 1.5], [1, 1.2], [1, 1.3, 1.5]]
              , l = []
              , c = [[1.4, 2], [1, 2, 3], [1.4, 2], [1, 2, 3]];
            let a = 1;
            t.forEach((t,n)=>{
                e[n] != t.selectedIndex && (a *= o[n][t.selectedIndex]),
                e[n] = t.selectedIndex,
                l[n] = c[n][t.selectedIndex]
            }
            ),
            n[0].checked && (m.val = 1e4,
            y.type = 1,
            y.diameter1 = l[0],
            y.ringNumber1 = l[1],
            y.diameter2 = 0,
            y.ringNumber2 = 0),
            n[0].checked || (m.val = 15e3,
            y.type = 2,
            y.diameter1 = l[0],
            y.ringNumber1 = l[1],
            y.diameter2 = l[2],
            y.ringNumber2 = l[3]),
            n[0].checked && n[1].checked && (d.val = 1e3,
            y.bottom = !0),
            !n[0].checked && n[1].checked && (d.val = 2e3,
            y.bottom = !0),
            n[1].checked || (d.val = 0,
            y.bottom = !1),
            u.val = a,
            s.value = Math.ceil((m.val + d.val) * u.val),
            y.sum = +s.value,
            "" != r.value && (y.distance = +r.value,
            i.disabled = !1),
            localStorage.setItem("calcData", JSON.stringify(y))
        }
        ;
        f(),
        t.forEach((e,t)=>{
            e.addEventListener("change", ()=>{
                f()
            }
            )
        }
        ),
        r.addEventListener("input", ()=>{
            "" != r.value ? (y.distance = r.value,
            i.disabled = !1) : i.disabled = !0,
            f()
        }
        )
    }
    ;
    (()=>{
        document.querySelector("body").addEventListener("click", e=>{
            e.preventDefault();
            let t = e.target;
            t.closest("a") && (t = t.closest("a")),
            -1 == t.className.indexOf("call-btn") && -1 == t.className.indexOf("check-btn") && -1 == t.className.indexOf("discount-btn") && -1 == t.className.indexOf("consultation-btn") || c(t),
            -1 != t.className.indexOf("add-sentence-btn") && r(t),
            "button" == t.getAttribute("role") && t.closest("#accordion-two") && a(t),
            "submit" == t.type && "submit" == t.name && "BUTTON" == t.tagName && -1 == t.className.indexOf("director-btn") && (t = t.closest("form"),
            s(t))
        }
        )
    }
    )(),
    i()
}
]);
