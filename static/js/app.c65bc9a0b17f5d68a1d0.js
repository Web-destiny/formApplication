webpackJsonp([1], {
    "6KoF": function (e, t) {
    }, "7zck": function (e, t) {
    }, IxBH: function (e, t) {
    }, NHnr: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var l = a("7+uW"), n = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("v-app", [a("v-navigation-drawer", {
                    attrs: {app: "", temporary: ""},
                    model: {
                        value: e.drawer, callback: function (t) {
                            e.drawer = t
                        }, expression: "drawer"
                    }
                }, [a("v-list", e._l(e.links, function (t) {
                    return a("v-list-item", {
                        key: t.title,
                        attrs: {to: t.url}
                    }, [a("v-list-item-icon", [a("v-icon", [e._v("\n            " + e._s(t.icon) + "\n          ")])], 1), e._v(" "), a("v-list-item-content", [a("v-list-item-title", {domProps: {textContent: e._s(t.title)}})], 1)], 1)
                }), 1)], 1), e._v(" "), a("v-app-bar", {
                    attrs: {
                        app: "",
                        dark: "",
                        color: "red lighten-1"
                    }
                }, [a("v-app-bar-nav-icon", {
                    staticClass: "hidden-md-and-up", on: {
                        click: function (t) {
                            e.drawer = !e.drawer
                        }
                    }
                }), e._v(" "), a("v-toolbar-title", [a("router-link", {
                    staticClass: "pointer",
                    attrs: {to: "/", tag: "span"}
                }, [e._v("formApp")])], 1), e._v(" "), a("v-spacer"), e._v(" "), a("v-toolbar-items", {staticClass: "hidden-sm-and-down"}, e._l(e.links, function (t) {
                    return a("v-btn", {
                        key: t.title,
                        attrs: {to: t.url, text: ""}
                    }, [a("v-icon", {attrs: {left: ""}}, [e._v(e._s(t.icon))]), e._v("\n        " + e._s(t.title) + "\n      ")], 1)
                }), 1)], 1), e._v(" "), a("v-main", {staticClass: "grey darken-3"}, [a("router-view")], 1)], 1)
            }, staticRenderFns: []
        };
        var s = a("VU/8")({
            data: function () {
                return {drawer: !1, links: [{title: "home", icon: "mdi-home-circle", url: "/"}]}
            }
        }, n, !1, function (e) {
            a("UZvj")
        }, "data-v-73fb7e7b", null).exports, i = a("/ocq"), o = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("v-container", [a("v-layout", {
                    staticClass: "form-layout",
                    attrs: {row: ""}
                }, [a("v-flex", {
                    staticClass: "form-box",
                    attrs: {xs11: ""}
                }, [a("form", [a("v-card-text", [a("h1", {staticClass: "form-title"}, [e._v("Мобильным приложением Онлайн легко пользоваться")])]), e._v(" "), a("div", {staticClass: "form-question-box"}, [a("v-col", {attrs: {cols: "12"}}, [a("v-subheader", {staticClass: "pl-0 form-subtitle"}, [e._v("\n                (где 1 - абсолютно не согласен, а 7 - абсолютно согласен)\n              ")]), e._v(" "), a("v-slider", {
                    attrs: {
                        "thumb-label": "always",
                        "track-color": "grey lighten-3",
                        color: "black",
                        "thumb-color": "black",
                        min: "0",
                        max: "10"
                    }, model: {
                        value: e.formSteps[e.activeStep].value, callback: function (t) {
                            e.$set(e.formSteps[e.activeStep], "value", t)
                        }, expression: "formSteps[activeStep].value"
                    }
                })], 1), e._v(" "), a("v-card-text", [a("h2", {staticClass: "form-question mb-5"}, [e._v(e._s(e.formSteps[e.activeStep].question))])]), e._v(" "), e.formSteps[e.activeStep].value < 7 ? a("v-list", {
                    attrs: {
                        flat: "",
                        subheader: "",
                        "three-line": ""
                    }
                }, [a("v-subheader", {staticClass: "pl-0 form-subtitle"}, [e._v("\n                (возможно несколько вариантов)\n              ")]), e._v(" "), a("v-list-item-group", {
                    attrs: {
                        multiple: "",
                        "active-class": ""
                    }
                }, e._l(e.formSteps[e.activeStep].answers, function (t, l) {
                    return a("v-list-item", {
                        key: "answer" + l,
                        staticClass: "checkbox-item",
                        on: {
                            change: function (e) {
                                t.done = !t.done
                            }
                        }
                    }, [[a("v-list-item-action", [a("v-checkbox", {
                        attrs: {color: "red"}, on: {
                            click: function (e) {
                                t.done = !t.done
                            }
                        }, model: {
                            value: t.done, callback: function (a) {
                                e.$set(t, "done", a)
                            }, expression: "answer.done"
                        }
                    })], 1), e._v(" "), a("v-list-item-content", {staticClass: "checkbox-item-content"}, [a("v-list-item-title", [e._v(e._s(t.label))])], 1), e._v(" "), void 0 != e.chipLabels[l + e.activeStep * e.formSteps[e.activeStep].answers.length] ? a("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-wrap": "wrap"
                        }
                    }, e._l(e.chipLabels[l + e.activeStep * e.formSteps[e.activeStep].answers.length].chips, function (l, n) {
                        return a("v-chip-group", {
                            key: "chip" + n,
                            attrs: {column: "", multiple: ""}
                        }, [t.done && l.label ? a("v-chip", {
                            attrs: {filter: "", outlined: ""},
                            on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [e._v("\n                        " + e._s(l.label) + "\n                      ")]) : e._e()], 1)
                    }), 1) : e._e()]], 2)
                }), 1)], 1) : e._e()], 1), e._v(" "), e.activeStep < e.formSteps.length - 1 ? a("v-btn", {
                    staticClass: "mr-4 red white--text col-sm-12",
                    attrs: {disabled: !e.isValid()},
                    on: {click: e.nextStep}
                }, [e._v("\n            Далее\n          ")]) : e._e(), e._v(" "), e.activeStep === e.formSteps.length - 1 ? a("v-btn", {
                    staticClass: "mr-4 red white--text col-sm-12",
                    attrs: {to: "/thanks", disabled: !e.isValid()}
                }, [e._v("\n            Отправить\n          ")]) : e._e()], 1)])], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var r = a("VU/8")({
            data: function () {
                return {
                    activeStep: 0,
                    formSteps: [{
                        question: "Уточните, какой именно функционал требует улучшений в интернет-банке?",
                        answers: [{
                            label: "Информация по вашим продуктам (счета, карты, вклады, кредиты и т.д.)",
                            done: !1
                        }, {
                            label: "Оплата услуг (ЖКХ, мобильная связь, интернет и т.д.)",
                            done: !1
                        }, {label: "Переводы", done: !1}, {label: "Другое", done: !1}],
                        value: 0
                    }, {
                        question: "фывфывфывфывывфывыфф",
                        answers: [{label: "авппавпвапавпва", done: !1}, {
                            label: "впапвпапвпа",
                            done: !1
                        }, {label: "вапавпап", done: !1}, {label: "вапавпапапв", done: !1}],
                        value: 0
                    }, {
                        question: "5555555555555555555",
                        answers: [{label: "вапвапвап", done: !1}, {
                            label: "вапвапапвап",
                            done: !1
                        }, {label: "впаавппвапвап", done: !1}, {label: "вапапвапвап", done: !1}],
                        value: 0
                    }],
                    chipLabels: [{chips: [{label: "Текущие счета"}, {label: "Накопительные счета"}, {label: "Дебетовые карты"}, {label: "Вклады"}, {label: "Автокредиты"}, {label: "Ипотека"}]}, {chips: [{label: "ЖКХ"}, {label: "Мобильная связь"}, {label: "Интернет"}, {label: "Другие услуги"}]}, {chips: [{label: "Переводы между своими счетами"}, {label: "Обмен валюты"}, {label: "Переводы по номеру телефона"}, {label: "Переводы по реквизитам"}, {label: "Переводы с помощью QR-кода"}]}, {chips: [{label: "Настройки приложения"}, {label: "Информация о тарифе"}, {label: "Прочие услуги"}]}, {chips: [{label: "выаваыав"}, {label: "ывавыаы связь"}, {label: "выав"}, {label: "ываваыва услуги"}]}, {chips: [{label: "ываии"}, {label: "3243432 связь"}, {label: "аываыва"}, {label: "Другие ываываваы"}]}, {chips: [{label: "ывавыаыва"}, {label: "авыаввввввввввввввв связь"}, {label: "ввввввввввввв"}, {label: "сячсчясчясячсчяс услуги"}]}, {chips: [{label: "счсчсм"}, {label: "Мобильнмсиимимиимимая связь"}, {label: "имиимимими"}, {label: "имсиимии мисимсими"}]}, {chips: [{label: "счсчсм"}, {label: "Мобильнмсиимимиимимая связь"}, {label: "имиимимими"}, {label: "имсиимии мисимсими"}]}]
                }
            }, methods: {
                isValid: function () {
                    var e = this, t = !1;
                    return this.formSteps[this.activeStep].answers.forEach(function (a) {
                        (a.done || e.formSteps[e.activeStep].value > 6) && (t = !0)
                    }), t
                }, nextStep: function () {
                    this.activeStep++
                }
            }
        }, o, !1, function (e) {
            a("IxBH")
        }, "data-v-a3bb1824", null).exports, c = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("v-container", [t("v-layout", {
                    staticClass: "form-layout",
                    attrs: {row: "", "mt-5": "", "justify-center": ""}
                }, [t("v-flex", {
                    staticClass: "form-box",
                    attrs: {xs11: ""}
                }, [t("v-alert", {attrs: {type: "success"}}, [this._v("\n          Благодарим за прохождение анкеты!\n        ")])], 1)], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var v = a("VU/8")({name: "Thanks"}, c, !1, function (e) {
            a("6KoF")
        }, "data-v-5bb0d828", null).exports;
        l.default.use(i.a);
        var p = new i.a({
            routes: [{path: "/", name: "home", component: r}, {
                path: "/thanks",
                name: "thanks",
                component: v
            }]
        }), u = a("3EgV"), b = a.n(u);
        a("7zck");
        l.default.use(b.a);
        var d = new b.a({});
        l.default.config.productionTip = !1, new l.default({
            el: "#app",
            router: p,
            vuetify: d,
            components: {App: s},
            template: "<App/>"
        })
    }, UZvj: function (e, t) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.c65bc9a0b17f5d68a1d0.js.map
