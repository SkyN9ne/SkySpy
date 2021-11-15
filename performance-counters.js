try {
  window.location.search.indexOf(
      "wa_test=tms_disable") <
    0 && "PerformanceObserver" in
    window && (window.wa = {}, wa
      .performanceMetrics = {},
      function() {
        wa.performanceMetrics
          .paint = [];
        for (var e = 40, t = 0,
            n = 0, r =
            function() {
              "undefined" !=
              typeof wap_tms
                &&
                void 0 !==
                wap_tms
                .custom &&
                void 0 !==
                wap_tms
                .custom
                .performance ?
                wap_tms
                .custom
                .performance
                .sendMetrics(
                  !0
                ) :
                t < e &&
                (t += 1,
                  setTimeout(
                    r,
                    500
                  )
                )
            }, i = function(
              e, t) {
              return Math
                .round(
                  e +
                  t)
            }, a =
            performance
            .getEntriesByType(
              "paint") || [], o = 0; o <
          a
          .length; o += 1) {
          var s = a[o],
            c = s.name,
            u = i(s
              .startTime,
              s.duration);
          wa.performanceMetrics
            .paint.push({
              name: c,
              time: u
            }), wa
            .performanceMetrics
            .longtask && (
              n = wa
              .performanceMetrics
              .longtask
              .length)
        }
        wa.performanceMetrics
          .types =
          PerformanceObserver
          .supportedEntryTypes;
        var f =
          new PerformanceObserver(
            function(e) {
              for (var t =
                  e
                  .getEntries(),
                  r =
                  t
                  .length,
                  a =
                  0; a <
                r; a++
              ) {
                var o =
                  t[
                    a],
                  s =
                  o
                  .entryType,
                  c =
                  o
                  .name;
                if ("navigation" !==
                  s ||
                  c !==
                  document
                  .URL
                ) {
                  var u =
                    o
                    .attribution,
                    f =
                    o
                    .element,
                    m =
                    o
                    .startTime ||
                    null,
                    l =
                    o
                    .renderTime ||
                    null,
                    p =
                    o
                    .loadTime ||
                    null,
                    d =
                    o
                    .value ||
                    0,
                    h =
                    l ||
                    p ||
                    m,
                    v =
                    "layout-shift" !==
                    s ?
                    i("longtask" !==
                      s &&
                      "resource" !==
                      s ?
                      h :
                      0,
                      o
                      .duration
                    ) :
                    d;
                  c = u &&
                    u[
                      0] ?
                    u[
                      0]
                    .containerType :
                    f ?
                    f
                    .outerHTML :
                    c,
                    wa
                    .performanceMetrics[
                      s
                    ] ||
                    (wa
                      .performanceMetrics[
                        s
                      ] = []),
                    wa
                    .performanceMetrics[
                      s
                    ]
                    .push({
                      name: c,
                      time: v
                    }),
                    "paint" ===
                    s &&
                    wa
                    .performanceMetrics
                    .longtask &&
                    (n = wa
                      .performanceMetrics
                      .longtask
                      .length
                    )
                } else
                  wa
                  .performanceMetrics[
                    "time-to-first-byte"
                  ] = [{
                    name: o
                      .type,
                    time: i(o
                      .responseStart,
                      0
                    )
                  }]
              }
            });
        f.observe({
          entryTypes: PerformanceObserver
            .supportedEntryTypes
        });
        var m =
          new PerformanceObserver(
            function(e) {
              wa.performanceMetrics[
                  "largest-contentful-paint"
                ] ||
                (wa.performanceMetrics[
                  "largest-contentful-paint"
                ] = []);
              var t = e
                .getEntries(),
                n = t[t
                  .length -
                  1],
                r = n
                .name ||
                n
                .element,
                i = Math
                .round(n
                  .startTime
                );
              wa.performanceMetrics[
                  "largest-contentful-paint"
                ]
                .push({
                  name: r,
                  time: i
                })
            });
        try {
          m.observe({
            type: "largest-contentful-paint",
            buffered:
              !0
          })
        } catch (e) {}
        var l = function(e) {
          e = e || window;
          var t, n, r = e
            .document,
            i =
            function(
              t) {
              var n = !
                1;
              if (t
                .getBoundingClientRect
              ) {
                var i =
                  t
                  .getBoundingClientRect();
                n = {
                    top: Math
                      .max(
                        i
                        .top,
                        0
                      ),
                    left: Math
                      .max(
                        i
                        .left,
                        0
                      ),
                    bottom: Math
                      .min(
                        i
                        .bottom,
                        e
                        .innerHeight ||
                        r
                        .documentElement
                        .clientHeight
                      ),
                    right: Math
                      .min(
                        i
                        .right,
                        e
                        .innerWidth ||
                        r
                        .documentElement
                        .clientWidth
                      )
                  },
                  n
                  .bottom <=
                  n
                  .top ||
                  n
                  .right <=
                  n
                  .left ?
                  n = !
                  1 :
                  n
                  .area =
                  (n.bottom -
                    n
                    .top
                  ) *
                  (n.right -
                    n
                    .left
                  )
              }
              return n
            },
            a =
            function(e,
              t) {
              if (t) {
                var n =
                  i(
                    e);
                n && m
                  .push({
                    url: t,
                    area: n
                      .area,
                    rect: n
                  })
              }
            },
            o =
            function() {
              for (var t =
                  r
                  .getElementsByTagName(
                    "*"
                  ),
                  n =
                  /url\(.*(http.*)\)/gi,
                  o =
                  0; o <
                t
                .length; o++
              ) {
                var s =
                  t[
                    o],
                  c =
                  e
                  .getComputedStyle(
                    s
                  );
                if ("IMG" ==
                  s
                  .tagName &&
                  a(s, s
                    .currentSrc ||
                    s
                    .src
                  ),
                  c[
                    "background-image"
                  ]
                ) {
                  n.lastIndex =
                    0;
                  var u =
                    n
                    .exec(
                      c[
                        "background-image"
                      ]
                    );
                  u && u
                    .length >
                    1 &&
                    a(s, u[
                        1]
                      .replace(
                        '"',
                        ""
                      )
                    )
                }
                if ("IFRAME" ==
                  s
                  .tagName
                )
                  try {
                    var f =
                      i(
                        s);
                    if (
                      f) {
                      var p =
                        l(s
                          .contentWindow
                        );
                      p && m
                        .push({
                          tm: p,
                          area: f
                            .area,
                          rect: f
                        })
                    }
                  } catch (
                    e
                  ) {}
              }
            },
            s =
            function() {
              for (var t = {},
                  n =
                  e
                  .performance
                  .getEntriesByType(
                    "resource"
                  ),
                  r =
                  0; r <
                n
                .length; r++
              ) t[n[
                    r]
                  .name
                ] =
                n[r]
                .responseEnd;
              for (var i =
                  0; i <
                m
                .length; i++
              )
                "tm" in
                m[
                  i] ||
                (m[i]
                  .tm =
                  void 0 !==
                  t[m[i]
                    .url
                  ] ?
                  t[m[i]
                    .url
                  ] :
                  0
                )
            },
            c =
            function() {
              try {
                for (
                  var n =
                    performance
                    .getEntriesByType(
                      "paint"
                    ),
                    i =
                    0; i <
                  n
                  .length; i++
                )
                  if ("first-paint" ==
                    n[
                      i]
                    .name
                  ) {
                    h = performance
                      .getEntriesByType(
                        "navigation"
                      )[
                        0
                      ]
                      .startTime,
                      t =
                      n[
                        i]
                      .startTime -
                      h;
                    break
                  }
              } catch (
                e
              ) {}
              if (void 0 ===
                t &&
                "msFirstPaint" in
                e
                .performance
                .timing &&
                (t = e
                  .performance
                  .timing
                  .msFirstPaint -
                  h
                ),
                void 0 ===
                t &&
                "chrome" in
                e &&
                "loadTimes" in
                e
                .chrome
              ) {
                var a =
                  e
                  .chrome
                  .loadTimes();
                if (
                  "firstPaintTime" in
                  a &&
                  a
                  .firstPaintTime >
                  0
                ) {
                  var o =
                    a
                    .startLoadTime;
                  "requestTime" in
                  a && (o =
                      a
                      .requestTime
                    ),
                    a
                    .firstPaintTime >=
                    o &&
                    (t = 1e3 *
                      (a.firstPaintTime -
                        o
                      )
                    )
                }
              }
              if (void 0 ===
                t ||
                t <
                0 ||
                t >
                12e4
              ) {
                t = e
                  .performance
                  .timing
                  .responseStart -
                  h;
                var s = {},
                  c =
                  r
                  .getElementsByTagName(
                    "head"
                  )[
                    0
                  ]
                  .children;
                for (
                  i =
                  0; i <
                  c
                  .length; i++
                ) {
                  var u =
                    c[
                      i];
                  "SCRIPT" ==
                  u.tagName &&
                    u
                    .src &&
                    !
                    u
                    .async &&
                    (s[u.src] = !
                      0
                    ),
                    "LINK" ==
                    u
                    .tagName &&
                    "stylesheet" ==
                    u
                    .rel &&
                    u
                    .href &&
                    (s[u.href] = !
                      0
                    )
                }
                for (
                  var f =
                    e
                    .performance
                    .getEntriesByType(
                      "resource"
                    ),
                    m = !
                    1,
                    l =
                    0; l <
                  f
                  .length; l++
                )
                  if (m ||
                    !
                    s[f[l]
                      .name
                    ] ||
                    "script" !=
                    f[
                      l]
                    .initiatorType &&
                    "link" !=
                    f[
                      l]
                    .initiatorType
                  )
                    m = !
                    0;
                  else {
                    var p =
                      f[
                        l]
                      .responseEnd;
                    (void 0 ===
                      t ||
                      p >
                      t
                    ) &&
                    (t =
                      p)
                  }
              }
              t = Math
                .max(
                  t,
                  0
                )
            },
            u =
            function() {
              for (var n = {
                    0: 0
                  },
                  i =
                  0,
                  a =
                  0; a <
                m
                .length; a++
              ) {
                var o =
                  t;
                "tm" in
                m[a] &&
                  m[
                    a]
                  .tm >
                  t &&
                  (o = m[
                      a]
                    .tm
                  ),
                  void 0 ===
                  n[
                    o] &&
                  (n[o] =
                    0
                  ),
                  n[
                    o] +=
                  m[
                    a]
                  .area,
                  i +=
                  m[
                    a]
                  .area
              }
              var s =
                Math
                .max(
                  r
                  .documentElement
                  .clientWidth,
                  e
                  .innerWidth ||
                  0
                ) *
                Math
                .max(
                  r
                  .documentElement
                  .clientHeight,
                  e
                  .innerHeight ||
                  0
                );
              if (s >
                0 &&
                (s = Math
                  .max(
                    s -
                    i,
                    0
                  ) *
                  d,
                  void 0 ===
                  n[
                    t] &&
                  (n[t] =
                    0
                  ),
                  n[
                    t] +=
                  s,
                  i +=
                  s
                ),
                i) {
                for (
                  var c in
                    n
                )
                  n
                  .hasOwnProperty(
                    c
                  ) &&
                  p
                  .push({
                    tm: c,
                    area: n[
                      c]
                  });
                p.sort(function(
                  e,
                  t
                ) {
                  return e
                    .tm -
                    t
                    .tm
                });
                for (
                  var u =
                    0,
                    f =
                    0; f <
                  p
                  .length; f++
                )
                  u +=
                  p[
                    f]
                  .area,
                  p[
                    f]
                  .progress =
                  u /
                  i
              }
            },
            f =
            function() {
              if (p
                .length
              ) {
                n =
                  0;
                for (
                  var e =
                    0,
                    r =
                    0,
                    i =
                    0; i <
                  p
                  .length; i++
                ) {
                  var a =
                    p[
                      i]
                    .tm -
                    e;
                  a > 0 &&
                    r <
                    1 &&
                    (n +=
                      (1 -
                        r) *
                      a
                    ),
                    e =
                    p[
                      i]
                    .tm,
                    r =
                    p[
                      i]
                    .progress
                }
              } else
                n =
                t
            },
            m = [],
            p = [],
            d = .1;
          try {
            var h = e
              .performance
              .timing
              .navigationStart;
            o(), s(),
              c(),
              u(), f()
          } catch (e) {}
          return Math
            .round(n)
        };
        ! function(e, t) {
          function n(e, n) {
            o || (o = n, s =
              e, c =
              new Date,
              a(t),
              r())
          }

          function r() {
            s >= 0 && s <
              c - m && (u
                .forEach(
                  function(
                    e
                  ) {
                    e(s, o)
                  }),
                u = [])
          }

          function i(r) {
            if (r
              .cancelable) {
              var i = (r
                  .timeStamp >
                  1e12 ?
                  new Date :
                  performance
                  .now()
                ) -
                r
                .timeStamp;
              "pointerdown" ==
              r.type ?
                function(
                  r, i
                ) {
                  function a() {
                    n(r, i),
                      s()
                  }

                  function o() {
                    s()
                  }

                  function s() {
                    t(l, a,
                        f),
                      t(p, o,
                        f
                      )
                  }
                  e(l, a,
                      f),
                    e(p, o,
                      f
                    )
                }(i,
                  r) : n(
                  i, r
                )
            }
          }

          function a(e) {
            ["click",
              "mousedown",
              "keydown",
              "touchstart",
              "pointerdown"
            ].forEach(
              function(
                t) {
                e(t, i,
                  f)
              })
          }
          var o, s, c, u = [],
            f = {
              passive: !0,
              capture: !0
            },
            m = new Date,
            l = "pointerup",
            p =
            "pointercancel";
          a(e), self
            .perfMetrics =
            self
            .perfMetrics || {}, self
            .perfMetrics
            .onFirstInputDelay =
            function(e) {
              u.push(e),
                r()
            }
        }(addEventListener,
          removeEventListener
        ), perfMetrics
          .onFirstInputDelay(
            function(e, t) {
              wa.performanceMetrics[
                  "first-input-delay"
                ] = [{
                  name: t
                    .type,
                  time: Math
                    .round(
                      e
                    )
                }], wa
                .performanceMetrics[
                  "layout-shift"
                ] &&
                (wa.performanceMetrics[
                    "cumulative-layout-shift"
                  ] =
                  wa
                  .performanceMetrics[
                    "layout-shift"
                  ]
                  .map(
                    function(
                      e
                    ) {
                      return {
                        name: "layout-shift",
                        time: e
                          .time
                      }
                    }
                  )
                );
              var n = l();
              n > 0 && (wa
                .performanceMetrics[
                  "speed-index"
                ] = [{
                  name: "custom",
                  time: n
                }]);
              var i = 0,
                a =
                setInterval(
                  function() {
                    wa.performanceMetrics
                      .hasOwnProperty(
                        "first-input"
                      ) ||
                      10 ===
                      i ?
                      (r(),
                        clearInterval(
                          a
                        )
                      ) :
                      i +=
                      1
                  },
                  100)
            }),
          function() {
            function e() {
              e = function() {},
                v
                .Symbol ||
                (v.Symbol =
                  t)
            }

            function t(e) {
              return "jscomp_symbol_" +
                (e ||
                  "") +
                y++
            }

            function n() {
              e();
              var t = v
                .Symbol
                .iterator;
              t || (t = v
                  .Symbol
                  .iterator =
                  v
                  .Symbol(
                    "iterator"
                  )
                ),
                "function" !=
                typeof Array
                .prototype[
                  t
                ] &&
                g(Array
                  .prototype,
                  t, {
                    configurable:
                      !
                      0,
                    writable:
                      !
                      0,
                    value: function() {
                      return r(
                        this
                      )
                    }
                  }),
                n =
                function() {}
            }

            function r(e) {
              var t = 0;
              return i(
                function() {
                  return t <
                    e
                    .length ? {
                      done:
                        !
                        1,
                      value: e[
                        t++
                      ]
                    } : {
                      done:
                        !
                        0
                    }
                })
            }

            function i(e) {
              return n(),
                e = {
                  next: e
                }, e[v
                  .Symbol
                  .iterator
                ] =
                function() {
                  return this
                }, e
            }

            function a(e) {
              n();
              var t = e[
                Symbol
                .iterator
              ];
              return t ? t
                .call(
                  e) : r(
                  e)
            }

            function o(e) {
              if (!(
                  e instanceof Array)) {
                e = a(
                  e);
                for (var t,
                    n = []; !
                  (t = e
                    .next()
                  )
                  .done;
                ) n
                  .push(
                    t
                    .value
                  );
                e = n
              }
              return e
            }

            function s(e,
              t) {
              var n =
                XMLHttpRequest
                .prototype
                .send,
                r = w++;
              XMLHttpRequest
                .prototype
                .send =
                function(
                  i) {
                  for (
                    var a = [],
                      o =
                      0; o <
                    arguments
                    .length; ++
                    o
                  )
                    a[o -
                      0
                    ] =
                    arguments[
                      o
                    ];
                  var s =
                    this;
                  return e(
                      r
                    ),
                    this
                    .addEventListener(
                      "readystatechange",
                      function() {
                        4 ===
                          s
                          .readyState &&
                          t(
                            r)
                      }
                    ),
                    n
                    .apply(
                      this,
                      a
                    )
                }
            }

            function c(e,
              t) {
              var n =
                fetch;
              fetch =
                function(
                  r) {
                  for (
                    var i = [],
                      a =
                      0; a <
                    arguments
                    .length; ++
                    a
                  )
                    i[a -
                      0
                    ] =
                    arguments[
                      a
                    ];
                  return new Promise(
                    function(
                      r,
                      a
                    ) {
                      var s =
                        w++;
                      e(s),
                        n
                        .apply(
                          null,
                          []
                          .concat(
                            o(
                              i)
                          )
                        )
                        .then(
                          function(
                            e
                          ) {
                            t(s),
                              r(
                                e)
                          },
                          function(
                            e
                          ) {
                            t(e),
                              a(
                                e)
                          }
                        )
                    }
                  )
                }
            }

            function u(e,
              t) {
              e = a(e);
              for (var n =
                  e
                  .next(); !
                n
                .done; n =
                e.next()
              )
                if (n =
                  n
                  .value,
                  t
                  .includes(
                    n
                    .nodeName
                    .toLowerCase()
                  ) ||
                  u(n.children,
                    t
                  )
                )
                  return !
                    0;
              return !1
            }

            function f(e) {
              var t =
                new MutationObserver(
                  function(
                    t
                  ) {
                    t = a(
                      t);
                    for (
                      var n =
                        t
                        .next(); !
                      n
                      .done; n =
                      t
                      .next()
                    )
                      n =
                      n
                      .value,
                      "childList" ==
                      n
                      .type &&
                      u(n.addedNodes,
                        b
                      ) ?
                      e(
                        n) :
                      "attributes" ==
                      n
                      .type &&
                      b
                      .includes(
                        n
                        .target
                        .tagName
                        .toLowerCase()
                      ) &&
                      e(
                        n)
                  });
              return t
                .observe(
                  document, {
                    attributes:
                      !
                      0,
                    childList:
                      !
                      0,
                    subtree:
                      !
                      0,
                    attributeFilter: [
                      "href",
                      "src"
                    ]
                  }),
                t
            }

            function m(e,
              t) {
              if (2 < e
                .length)
                return performance
                  .now();
              var n = [];
              t = a(t);
              for (var r =
                  t
                  .next(); !
                r
                .done; r =
                t.next()
              ) r = r
                .value,
                n.push({
                  timestamp: r
                    .start,
                  type: "requestStart"
                }), n
                .push({
                  timestamp: r
                    .end,
                  type: "requestEnd"
                });
              for (t = a(
                  e),
                r = t
                .next(); !
                r
                .done; r =
                t.next()
              ) n
                .push({
                  timestamp: r
                    .value,
                  type: "requestStart"
                });
              for (n.sort(
                  function(
                    e,
                    t
                  ) {
                    return e
                      .timestamp -
                      t
                      .timestamp
                  }),
                e = e
                .length,
                t = n
                .length -
                1; 0 <=
                t; t--)
                switch (
                  r =
                  n[
                    t],
                  r
                  .type
                ) {
                  case "requestStart":
                    e--;
                    break;
                  case "requestEnd":
                    if (e++,
                      2 <
                      e
                    )
                      return r
                        .timestamp;
                    break;
                  default:
                    throw Error(
                      "Internal Error: This should never happen"
                    )
                }
              return 0
            }

            function l(e) {
              e = e || {},
                this
                .w = !!e
                .useMutationObserver,
                this.u =
                e
                .minValue ||
                null,
                e =
                window
                .__tti &&
                window
                .__tti
                .e;
              var t =
                window
                .__tti &&
                window
                .__tti
                .o;
              this.a = e ?
                e.map(
                  function(
                    e
                  ) {
                    return {
                      start: e
                        .startTime,
                      end: e
                        .startTime +
                        e
                        .duration
                    }
                  }) : [], t &&
                t
                .disconnect(),
                this
                .b = [],
                this.f =
                new Map,
                this.j =
                null,
                this
                .v = -
                1 / 0,
                this
                .i = !1,
                this.h =
                this.c =
                this.s =
                null, s(
                  this
                  .m
                  .bind(
                    this
                  ),
                  this
                  .l
                  .bind(
                    this
                  )
                ),
                c(this.m
                  .bind(
                    this
                  ),
                  this
                  .l
                  .bind(
                    this
                  )
                ),
                h(this),
                this
                .w && (
                  this
                  .h =
                  f(this
                    .B
                    .bind(
                      this
                    )
                  )
                )
            }

            function p(e) {
              e.i = !0;
              var t = 0 <
                e.a
                .length ?
                e.a[e.a
                  .length -
                  1]
                .end :
                0,
                n = m(e
                  .g,
                  e.b
                );
              d(e, Math
                .max(
                  n +
                  5e3,
                  t
                )
              )
            }

            function d(e,
              t) {
              !e.i || e
                .v >
                t || (
                  clearTimeout(
                    e
                    .j
                  ),
                  e
                  .j =
                  setTimeout(
                    function() {
                      var t =
                        performance
                        .timing
                        .navigationStart,
                        n =
                        m(e.g,
                          e
                          .b
                        );
                      if (t =
                        (window
                          .a &&
                          window
                          .a
                          .A ?
                          1e3 *
                          window
                          .a
                          .A()
                          .C -
                          t :
                          0
                        ) ||
                        performance
                        .timing
                        .domContentLoadedEventEnd -
                        t,
                        e
                        .u
                      )
                        var r =
                          e
                          .u;
                      else performance
                        .timing
                        .domContentLoadedEventEnd ?
                        (r = performance
                          .timing,
                          r =
                          r
                          .domContentLoadedEventEnd -
                          r
                          .navigationStart
                        ) :
                        r =
                        null;
                      var i =
                        performance
                        .now();
                      null ===
                        r &&
                        d(e, Math
                          .max(
                            n +
                            5e3,
                            i +
                            1e3
                          )
                        );
                      var a =
                        e
                        .a;
                      5e3 >
                        i -
                        n ?
                        n =
                        null :
                        (n = a
                          .length ?
                          a[a.length -
                            1
                          ]
                          .end :
                          t,
                          n =
                          5e3 >
                          i -
                          n ?
                          null :
                          Math
                          .max(
                            n,
                            r
                          )
                        ),
                        n &&
                        (e.s(
                            n),
                          clearTimeout(
                            e
                            .j
                          ),
                          e
                          .i = !
                          1,
                          e
                          .c &&
                          e
                          .c
                          .disconnect(),
                          e
                          .h &&
                          e
                          .h
                          .disconnect()
                        ),
                        d(e, performance
                          .now() +
                          1e3
                        )
                    },
                    t -
                    performance
                    .now()
                  ),
                  e
                  .v =
                  t)
            }

            function h(e) {
              e.c =
                new PerformanceObserver(
                  function(
                    t
                  ) {
                    t = a(t
                      .getEntries());
                    for (
                      var n =
                        t
                        .next(); !
                      n
                      .done; n =
                      t
                      .next()
                    )
                      if (n =
                        n
                        .value,
                        "resource" ===
                        n
                        .entryType &&
                        (e.b.push({
                            start: n
                              .fetchStart,
                            end: n
                              .responseEnd
                          }),
                          d(e, m(e.g,
                              e
                              .b
                            ) +
                            5e3
                          )
                        ),
                        "longtask" ===
                        n
                        .entryType
                      ) {
                        var r =
                          n
                          .startTime +
                          n
                          .duration;
                        e.a.push({
                            start: n
                              .startTime,
                            end: r
                          }),
                          d(e, r +
                            5e3
                          )
                      }
                  }),
                e.c
                .observe({
                  entryTypes: [
                    "longtask",
                    "resource"
                  ]
                })
            }
            var v =
              "undefined" !=
              typeof window &&
              window ===
              this ?
              this :
              "undefined" !=
              typeof global &&
              null !=
              global ?
              global :
              this,
              g =
              "function" ==
              typeof Object
              .defineProperties ?
              Object
              .defineProperty :
              function(e,
                t, n) {
                e != Array
                  .prototype &&
                  e !=
                  Object
                  .prototype &&
                  (e[t] =
                    n
                    .value
                  )
              },
              y = 0,
              w = 0,
              b =
              "img script iframe link audio video source"
              .split(" ");
            l.prototype
              .getFirstConsistentlyInteractive =
              function() {
                var e =
                  this;
                return new Promise(
                  function(
                    t
                  ) {
                    e.s =
                      t,
                      "complete" ==
                      document
                      .readyState ?
                      p(
                        e) :
                      window
                      .addEventListener(
                        "load",
                        function() {
                          p(e)
                        }
                      )
                  }
                )
              }, l
              .prototype
              .m =
              function(
                e) {
                this.f
                  .set(
                    e,
                    performance
                    .now()
                  )
              }, l
              .prototype
              .l =
              function(
                e) {
                this.f
                  .delete(
                    e
                  )
              }, l
              .prototype
              .B =
              function() {
                d(this, performance
                  .now() +
                  5e3
                )
              }, v.Object
              .defineProperties(
                l
                .prototype, {
                  g: {
                    configurable:
                      !
                      0,
                    enumerable:
                      !
                      0,
                    get: function() {
                      return []
                        .concat(
                          o(this
                            .f
                            .values()
                          )
                        )
                    }
                  }
                });
            var M = {
              getFirstConsistentlyInteractive: function(
                e
              ) {
                return e =
                  e || {},
                  "PerformanceLongTaskTiming" in
                  window ?
                  new l(
                    e
                  )
                  .getFirstConsistentlyInteractive() :
                  Promise
                  .resolve(
                    null
                  )
              }
            };
            "undefined" !=
            typeof module &&
              module
              .exports ?
              module
              .exports =
              M :
              "function" ==
              typeof define &&
              define.amd ?
              define(
                "ttiPolyfill",
                [],
                function() {
                  return M
                }) :
              window
              .ttiPolyfill =
              M
          }(), ttiPolyfill
          .getFirstConsistentlyInteractive()
          .then(function(e) {
            if (wa
              .performanceMetrics[
                "time-to-interactive"
              ] = [{
                name: "polyfill",
                time: Math
                  .round(
                    e
                  )
              }], wa
              .performanceMetrics
              .longtask
            ) {
              var t =
                wa
                .performanceMetrics
                .longtask
                .slice(
                  n
                );
              wa.performanceMetrics[
                  "total-blocking-time"
                ] =
                t
                .map(
                  function(
                    e
                  ) {
                    return {
                      name: "task-blocking-time",
                      time: e
                        .time -
                        50
                    }
                  }
                );
              var r =
                Math
                .max
                .apply(
                  null,
                  t
                  .map(
                    function(
                      e
                    ) {
                      return e
                        .time
                    }
                  )
                );
              wa.performanceMetrics[
                "max-potential"
              ] = [{
                name: "first-input-delay",
                time: r
              }]
            }
          })
      }())
} catch (e) {}
//The below code is from AEM related to targetDataCookie and IGHFLoggedIn
function targetDataCookie() {
  try {
    var t = "https:" === location
      .protocol,
      a = -1 !== document.cookie
      .indexOf("IGHFLoggedIn") &&
      null === localStorage
      .getItem("targetData"),
      e = null === localStorage
      .getItem("targetloaded"),
      o = window.location.pathname
      .replace(".html", ""),
      uTokenNotAvailable =
      null === localStorage
      .getItem("u_token");
    if (t && a && e &&
      uTokenNotAvailable) {
      var l = new XMLHttpRequest,
        r =
        "/libs/apps/intel/login.json/targetdata?path=";
      if ("www.intel.com" !==
        window.location.host &&
        (l.withCredentials =
          "true", r =
          "/libs/apps/intel/login.json/targetdata?ighf=ighf&path="
        ), l.open("GET", r +
          o, !1), l.send(),
        200 == l.status && l
        .responseText) {
        var n = {};
        try {
          n = JSON.parse(l
            .responseText
          )
        } catch (t) {
          console.error(
            "Response of targetData is invalid",
            t)
        }
        n.targetData && (
          localStorage
          .setItem(
            "targetData",
            n.targetData
          ),
          localStorage
          .setItem(
            "u_token", n
            .u_token),
          localStorage
          .setItem(
            "targetloaded",
            "1"))
      }
    }
  } catch (t) {}
}
targetDataCookie();
