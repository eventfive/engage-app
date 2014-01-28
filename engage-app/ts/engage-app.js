var engage;
(function (engage) {
    (function (model) {
        var Ressource = (function () {
            function Ressource() {
            }
            Ressource.ASSET_PATH = "/eventfive/web/engage-map/assets";
            Ressource.MEDIA_PATH = "/assets/best_practices/";
            Ressource.CLOUD_DATA_REQUEST = "/eventfive/web/engage-map/php/Service.php?operation=export&out=json";
            Ressource.CLOUD_DATA_OFFLINE = "data.init.json";
            return Ressource;
        })();
        model.Ressource = Ressource;
    })(engage.model || (engage.model = {}));
    var model = engage.model;
})(engage || (engage = {}));
Array.prototype.id = function (id) {
    var l = this.length;
    for (var i = 0; i < l; ++i)
        if (this[i].id == id)
            return this[i];
    return null;
};

Array.prototype.where = function (property, value) {
    var l = this.length;
    var res = [];
    for (var i = 0; i < l; ++i)
        if (this[i][property] == value)
            res.push(this[i]);
    return res;
};

Array.prototype.pushUnique = function (value) {
    if (this.indexOf(value) >= 0)
        return false;
    this.push(value);
    return true;
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}

//Fix for IE when no console if available (its created when the debug-console opens)
var cons = "console";
if (!window.console)
    window[cons] = { log: function () {
        } };
var e5;
(function (e5) {
    (function (core) {
        var Caps = (function () {
            function Caps() {
            }
            Caps.resolve = function () {
                if (/MSIE\s([\d.]+)/.test(navigator.userAgent)) {
                    Caps.isMSIE = true;
                    Caps.msieVersion = parseFloat(RegExp.$1);
                }

                //is ios operation system
                this.isIOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

                //canvas support
                var elem = document.createElement('canvas');
                Caps.canvasSupported = Boolean(elem.getContext && elem.getContext('2d'));

                //touch support
                Caps.touchSupported = 'ontouchstart' in document.documentElement;

                //worker support
                Caps.workerSupported = typeof (Worker) !== "undefined";

                //pixel ratio
                Caps.pixelRatio = window["devicePixelRatio"] ? window["devicePixelRatio"] : 1;

                //is mobile envirionment
                //SOURCE MODIFIED: http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser
                var a = navigator.appVersion;
                Caps.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
            };
            Caps.pixelRatio = 1;
            Caps.touchSupported = false;
            Caps.canvasSupported = false;
            Caps.workerSupported = false;
            Caps.isMSIE = false;
            Caps.isIOS = false;
            Caps.isMobile = false;
            Caps.msieVersion = 0;
            return Caps;
        })();
        core.Caps = Caps;

        Caps.resolve();
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
(function ($) {
    //::: sortElements plugin :::
    jQuery.fn.sortElements = (function () {
        var sort = [].sort;
        return function (comparator, getSortable) {
            getSortable = getSortable || function () {
                return this;
            };
            var placements = this.map(function () {
                var sortElement = getSortable.call(this), parentNode = sortElement.parentNode, nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);

                return function () {
                    if (parentNode === this) {
                        throw new Error("You can't sort elements if any one is a descendant of another.");
                    }

                    // Insert before flag:
                    parentNode.insertBefore(this, nextSibling);

                    // Remove flag:
                    parentNode.removeChild(nextSibling);
                };
            });

            return sort.call(this, comparator).each(function (i) {
                placements[i].call(getSortable.call(this));
            });
        };
    })();

    //::: ajax-progress plugin :::
    var originalXhr = $.ajaxSettings.xhr;
    $.ajaxSetup({
        progress: function () {
        },
        xhr: function () {
            var req = originalXhr(), that = this;
            if (req) {
                if (typeof req.addEventListener == "function") {
                    req.addEventListener("progress", function (evt) {
                        that.progress(evt);
                    }, false);
                }
            }
            return req;
        }
    });
})(jQuery);
var e5;
(function (e5) {
    (function (math) {
        var Calc = (function () {
            function Calc() {
            }
            Calc.clamp = function (value, min, max) {
                if (min > max) {
                    var tmp = max;
                    max = min;
                    min = tmp;
                }
                return (value < min) ? min : ((value > max) ? max : value);
            };

            Calc.clampAvg = function (value, min, max, ratio) {
                if (typeof ratio === "undefined") { ratio = 0.5; }
                if (min > max)
                    return max + (min - max) * ratio;
                return (value < min) ? min : ((value > max) ? max : value);
            };

            Calc.clampMin = function (value, min) {
                return (value < min) ? min : value;
            };

            Calc.clampMax = function (value, max) {
                return (value > max) ? max : value;
            };

            Calc.roundTo = function (value, mod) {
                var r = value % mod;
                return (r < (mod * 0.5)) ? value - r : value + (mod - r);
            };

            Calc.floorTo = function (value, mod) {
                return value - value % mod;
            };

            Calc.ceilTo = function (value, mod) {
                return value + (mod - value % mod);
            };

            Calc.averageAngle = function (angles) {
                var avgX = 0;
                var avgY = 0;
                var l = angles.length;
                if (l == 0)
                    return 0;
                var ang = angles[0];
                for (var i = 1; i < l; ++i)
                    ang += Calc.shortRotation(ang, angles[i]) * 0.5;
                return ang;
            };

            Calc.shortRotation = function (startRotation, endRotation) {
                var dif = (endRotation - startRotation) % 360;
                if (dif != dif % 180)
                    dif = (dif < 0) ? dif + 360 : dif - 360;
                return dif;
            };
            Calc.TO_DEG = 180 / Math.PI;
            Calc.TO_RAD = Math.PI / 180;
            return Calc;
        })();
        math.Calc = Calc;
    })(e5.math || (e5.math = {}));
    var math = e5.math;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (math) {
        var Point = (function () {
            function Point(x, y) {
                if (typeof x === "undefined") { x = 0; }
                if (typeof y === "undefined") { y = 0; }
                this.x = x;
                this.y = y;
            }
            Point.prototype.length = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            Point.origin = new Point(0, 0);
            return Point;
        })();
        math.Point = Point;

        var Geom = (function () {
            function Geom() {
            }
            Geom.localToGlobal = function (element, x, y, target) {
                if (typeof target === "undefined") { target = new e5.math.Point(); }
                var cr = element.getBoundingClientRect();
                target.x = cr.left + x;
                target.y = cr.top + y;
                return target;
            };

            Geom.globalToLocal = function (element, x, y, target) {
                if (typeof target === "undefined") { target = new e5.math.Point(); }
                target.x = Math.floor(x - element.offsetLeft);
                target.y = Math.floor(y - element.offsetTop);
                return target;
            };

            Geom.latLngToTexture = function (lat, lon, textureWidth, textureHeight) {
                return new Point(((lon + 180) * (textureWidth / 360)) % textureWidth, (((lat * -1) + 90) * (textureHeight / 180)) % textureHeight);
            };

            Geom.textureToLatLng = function (pointX, pointY, textureWidth, textureHeight) {
                var m = (pointX / textureWidth) * 180 / Math.PI;

                //            console.log(m * 1.7639164489511259);
                //
                //            pointX /= 600;
                //            pointY /= 600;
                //
                //            pointX *= 6378137;
                //            pointY *= 6378137;
                pointX = pointX / textureWidth;
                pointY = pointY / textureHeight;
                var lat = 2 * Math.atan(Math.pow(Math.E, pointY)) - .5 * Math.PI;
                var lon = pointX;
                lat = lat * 180 / Math.PI;
                lon = lon * 180 / Math.PI;

                //            console.log(lat, lon);
                return new Point(lat, lon);

                var lng = (pointX) / textureWidth;
                var latRadians = (pointY) / -textureHeight;
                var lat = ((2 * Math.atan(Math.exp(latRadians)) * Math.PI / 180) - Math.PI / 2);
                return new e5.math.Point(lat, lng);
            };
            return Geom;
        })();
        math.Geom = Geom;
    })(e5.math || (e5.math = {}));
    var math = e5.math;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Slot = (function () {
            function Slot(signal, listener, context) {
                this.once = false;
                this._enabled = true;
                this._signal = signal;
                this._listener = listener;
                this._context = context;
            }
            Slot.prototype.getEnabled = function () {
                return this._enabled;
            };

            Slot.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Slot.prototype.getListener = function () {
                return this._listener;
            };

            Slot.prototype.execute = function (target, args) {
                var val = this._listener.apply(this._context, args);
                if (val instanceof Boolean)
                    return Boolean(val);
                return true;
            };

            Slot.prototype.remove = function () {
                this._signal.remove(this._listener);
            };

            Slot.prototype.dispose = function () {
                this._listener = null;
                this._signal = null;
            };
            return Slot;
        })();
        core.Slot = Slot;
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Signal = (function () {
            function Signal() {
                this._enabled = true;
                this._slots = [];
                this._dispatched = false;
            }
            Signal.prototype.getDispatched = function () {
                return this._dispatched;
            };

            Signal.prototype.getEnabled = function () {
                return this._enabled;
            };

            Signal.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Signal.prototype.getLength = function () {
                return this._slots.length;
            };

            Signal.prototype.dispatch = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                if (!this.getEnabled()) {
                    return;
                }

                this._dispatched = true;

                var l = this._slots.length;
                var slot;
                for (var i = 0; i < l; ++i) {
                    slot = this._slots[i];
                    if (!slot.getEnabled())
                        continue;
                    var res = slot.execute(this, args);
                    if (slot.once) {
                        this._slots.splice(i, 1);
                        --l;
                        --i;
                    }
                }
            };

            Signal.prototype.once = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                var sl = this.add(listener);
                sl.once = true;
                return sl;
            };

            Signal.prototype.add = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                var sl = this.retrieveSlot(listener);
                if (sl) {
                    //bring to end (like removing the old listener and setting a new one)
                    var idx = this._slots.indexOf(sl);
                    this._slots.splice(idx, 1);
                    this._slots.push(sl);
                    return sl;
                }

                sl = new e5.core.Slot(this, listener, context);
                this._slots.push(sl);
                return sl;
            };

            Signal.prototype.remove = function (listener) {
                var sl = this.retrieveSlot(listener);
                if (!sl)
                    return null;
                var idx = this._slots.indexOf(sl);
                this._slots.splice(idx, 1);
                sl.dispose();
                return sl;
            };

            Signal.prototype.clear = function () {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    this._slots[i].dispose();
                }
                this._slots.splice(0, this._slots.length);
                //this._dispatched = false;
            };

            Signal.prototype.retrieveSlot = function (listener) {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    if (this._slots[i].getListener() == listener)
                        return this._slots[i];
                }
                return null;
            };

            Signal.prototype.dispose = function () {
                this.clear();
            };
            return Signal;
        })();
        core.Signal = Signal;
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Player = (function () {
            function Player() {
            }
            Player.getEnabled = function () {
                return Ticker.getEnabled();
            };

            Player.setEnabled = function (value) {
                Ticker.setEnabled(value);
            };
            Player.onTick = new e5.core.Signal();
            Player.tickCount = 0;
            return Player;
        })();
        core.Player = Player;

        var Ticker = (function () {
            function Ticker() {
            }
            Ticker.getEnabled = function () {
                return this._enabled;
            };

            Ticker.setEnabled = function (value) {
                if (Ticker._enabled == value)
                    return;
                Ticker._enabled = value;

                if (!Ticker._created)
                    Ticker.create();

                if (Ticker._enabled) {
                    Ticker._enabled = true;
                    Ticker.handleTick();
                } else {
                    window.cancelAnimationFrame(Ticker._handle);
                }
            };

            Ticker.handleTick = function () {
                Player.tickCount++;
                Ticker._handle = window.requestAnimationFrame(Ticker.handleTick);
                e5.core.Player.onTick.dispatch();
            };

            //source: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            Ticker.create = function () {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {
                        clearTimeout(id);
                    };
            };
            Ticker._enabled = false;
            Ticker._created = false;
            return Ticker;
        })();
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (text) {
        var Text = (function () {
            function Text() {
            }
            Text.ext = function (filename) {
                var dotIndex = filename.lastIndexOf(".");
                return filename.substr(dotIndex + 1).toLowerCase();
            };

            Text.month = function (month) {
                return Text.MONTH_EN[e5.math.Calc.clamp(month, 0, 11)];
            };

            Text.toDate = function (str) {
                var year = parseInt(str.substr(0, 4));
                var month = parseInt(str.substr(5, 2)) - 1;
                var date = parseInt(str.substr(8, 2));
                if (str.length <= 10)
                    return new Date(year, month, date);
                var hours = parseInt(str.substr(11, 2));
                var minutes = parseInt(str.substr(14, 2));
                var seconds = parseInt(str.substr(17, 2));
                return new Date(year, month, date, hours, minutes, seconds);
            };

            Text.randomString = function (length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < length; ++i)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            };
            Text.MONTH_EN = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"];
            return Text;
        })();
        text.Text = Text;
    })(e5.text || (e5.text = {}));
    var text = e5.text;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (text) {
        var Symbols = (function () {
            function Symbols() {
            }
            Symbols.ARROW_UP = "&#8593;";
            Symbols.ARROW_RIGHT = "&#8594;";
            Symbols.ARROW_DOWN = "&#8595;";
            Symbols.ARROW_LEFT = "&#8592;";
            Symbols.CHECK_MARK = "&#10003;";
            Symbols.BALLOT_BOX = "&#9744;";
            Symbols.BALLOT_BOX_WITH_CHECK = "&#9745;";
            Symbols.BALLOT_BOX_WITH_X = "&#9746;";
            Symbols.PLUS_SIGN = "&#43;";
            Symbols.MINUS_SIGN = "&#8722;";
            Symbols.PLUS_MINUS_SIGN = "&#177;";
            return Symbols;
        })();
        text.Symbols = Symbols;
    })(e5.text || (e5.text = {}));
    var text = e5.text;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (control) {
        var History = (function () {
            function History() {
                this.onHashChange = new e5.core.Signal();
                this._hash = "";
                this.init();
            }
            History.prototype.init = function () {
                var _this = this;
                this._hash = window.location.hash.substring(1);
                $(window).bind('hashchange', function () {
                    return _this.handleHashChange();
                });
            };

            History.prototype.handleHashChange = function () {
                var newHash = window.location.hash;
                newHash = newHash.substring(1);
                this.setHash(newHash);
                this.onHashChange.dispatch(this._hash);
            };

            History.prototype.getHash = function () {
                return this._hash;
            };

            History.prototype.setHash = function (value) {
                if (this._hash == value)
                    return;
                this._hash = value;
                window.location.hash = "#" + this._hash;
            };

            History.prototype.clear = function () {
                window.location.hash = null;
            };
            return History;
        })();
        control.History = History;
    })(e5.control || (e5.control = {}));
    var control = e5.control;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var Interactor = (function () {
            function Interactor(target, actionArea) {
                if (typeof actionArea === "undefined") { actionArea = null; }
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionBegin = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionMove = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionEnd = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionTap = new e5.core.Signal();
                /**
                * callback: (delta:number, evt:any):void
                */
                this.onMouseWheel = new e5.core.Signal();
                this.preventMouseDown = false;
                this.preventMouseMove = false;
                this.preventTouchDown = false;
                this.preventTouchMove = true;
                this.preventSelection = false;
                this._mouseWheelEnabled = false;
                this._mouseEnabled = false;
                this._touchEnabled = false;
                this._timestamp = 0;
                this._pageX = 0;
                this._pageY = 0;
                this._deltaX = 0;
                this._deltaY = 0;
                this._originX = 0;
                this._originY = 0;
                this._localOriginX = 0;
                this._localOriginY = 0;
                this.namespace = e5.text.Text.randomString(6);
                this._target = target;
                this._actionArea = actionArea;
            }
            Interactor.prototype.getActionArea = function () {
                return this._actionArea ? this._actionArea : this._target;
            };

            Interactor.prototype.setActionArea = function (actionArea) {
                if (this._actionArea == actionArea)
                    return;

                var te = this._touchEnabled;
                var me = this._mouseEnabled;
                this.setTouchEnabled(false);
                this.setMouseEnabled(false);
                this._actionArea = actionArea;
                this.setTouchEnabled(te);
                this.setMouseEnabled(me);
            };

            Interactor.prototype.getTarget = function () {
                return this._target;
            };

            Interactor.prototype.setTarget = function (target) {
                if (this._target == target)
                    return;

                var te = this._touchEnabled;
                var me = this._mouseEnabled;
                this.setTouchEnabled(false);
                this.setMouseEnabled(false);
                this._target = target;
                this.setTouchEnabled(te);
                this.setMouseEnabled(me);
            };

            Interactor.prototype.getOriginX = function () {
                return this._originX;
            };

            Interactor.prototype.getOriginY = function () {
                return this._originY;
            };

            Interactor.prototype.getLocalOriginX = function () {
                return this._localOriginX;
            };

            Interactor.prototype.getLocalOriginY = function () {
                return this._localOriginY;
            };

            Interactor.prototype.getDeltaX = function () {
                return this._deltaX;
            };

            Interactor.prototype.getDeltaY = function () {
                return this._deltaY;
            };

            Interactor.prototype.getPageX = function () {
                return this._pageX;
            };

            Interactor.prototype.getPageY = function () {
                return this._pageY;
            };

            Interactor.prototype.getMouseEnabled = function () {
                return this._mouseEnabled;
            };

            Interactor.prototype.setMouseEnabled = function (value) {
                var _this = this;
                if (this._mouseEnabled == value)
                    return;
                this._mouseEnabled = value;
                if (this._mouseEnabled)
                    this.getActionArea().bind("mousedown", function (e) {
                        _this.handleMouseDown(e);
                    });
                else
                    this.getActionArea().unbind("mousedown");
            };

            Interactor.prototype.getMouseWheelEnabled = function () {
                return this._mouseWheelEnabled;
            };

            Interactor.prototype.setMouseWheelEnabled = function (value) {
                var _this = this;
                if (this._mouseWheelEnabled == value)
                    return;
                this._mouseWheelEnabled = value;
                if (this._mouseWheelEnabled)
                    this.getActionArea().bind("mousewheel DOMMouseScroll", function (e) {
                        _this.handleMouseWheel(e);
                    });
                else
                    this.getActionArea().unbind("mousewheel DOMMouseScroll");
            };

            Interactor.prototype.getTouchEnabled = function () {
                return this._touchEnabled;
            };

            Interactor.prototype.setTouchEnabled = function (value) {
                var _this = this;
                if (this._touchEnabled == value)
                    return;
                this._touchEnabled = value;
                if (this._touchEnabled) {
                    this.getActionArea().bind("touchstart." + this.namespace, function (e) {
                        return _this.handleTouchStart(e);
                    });
                    this.getActionArea().bind("touchmove." + this.namespace, function (e) {
                        return _this.handleTouchMove(e);
                    });
                    this.getActionArea().bind("touchend." + this.namespace + " touchleave." + this.namespace, function (e) {
                        return _this.handleTouchEnd(e);
                    });
                } else {
                    this.getActionArea().unbind("touchstart." + this.namespace + " touchmove." + this.namespace + " touchend." + this.namespace + " touchleave." + this.namespace);
                }
            };

            Interactor.prototype.handleMouseDown = function (e) {
                var _this = this;
                if (this.preventMouseDown)
                    e.originalEvent.preventDefault();
                this._handleActionBegin(e.pageX, e.pageY, e.target, e.currentTarget);
                $(window).bind("mousemove." + this.namespace, function (e) {
                    return _this.handleMouseMove(e);
                });
                $(window).one("mouseup." + this.namespace, function (e) {
                    return _this.handleMouseUp(e);
                }); //mouseleave
            };

            Interactor.prototype.handleMouseMove = function (e) {
                if (this.preventMouseMove)
                    e.originalEvent.preventDefault();
                this._handleActionMove(e.pageX, e.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleMouseUp = function (e) {
                $(window).unbind("mousemove." + this.namespace); // mouseup blur, mouseleave
                this._handleActionEnd(this._pageX, this._pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchStart = function (e) {
                if (this.preventTouchDown)
                    e.originalEvent.preventDefault();
                var p = e.originalEvent.touches[0];
                this._handleActionBegin(p.pageX, p.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchMove = function (e) {
                if (this.preventTouchMove)
                    e.originalEvent.preventDefault();
                var p = e.originalEvent.touches[0];
                this._handleActionMove(p.pageX, p.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchEnd = function (e) {
                if (e.originalEvent.touches.length > 0) {
                    var p = e.originalEvent.touches[0];
                    this._deltaX = 0;
                    this._deltaY = 0;
                    this._pageX = p.pageX;
                    this._pageX = p.pageY;
                    return;
                }
                this._handleActionEnd(this._pageX, this._pageY, e.target, e.currentTarget);
            };

            Interactor.prototype._handleActionBegin = function (pageX, pageY, target, currentTarget) {
                this._originX = pageX;
                this._originY = pageY;
                this._pageX = pageX;
                this._pageY = pageY;

                var off = this.getTarget().offset();
                this._localOriginX = off.left - this._originX;
                this._localOriginY = off.top - this._originY;

                this._timestamp = new Date().getTime();

                this.onActionBegin.dispatch(this, target, currentTarget);

                if (this.preventSelection)
                    $("html").addClass("prevent-selection");
            };

            Interactor.prototype._handleActionMove = function (pageX, pageY, target, currentTarget) {
                this._deltaX = pageX - this._pageX;
                this._deltaY = pageY - this._pageY;
                this._pageX = pageX;
                this._pageY = pageY;

                this.onActionMove.dispatch(this, target, currentTarget);
            };

            Interactor.prototype._handleActionEnd = function (pageX, pageY, target, currentTarget) {
                this._pageX = pageX;
                this._pageY = pageY;

                this.onActionEnd.dispatch(this, target, currentTarget);

                var time = new Date().getTime();
                var tapTime = time - this._timestamp;
                var dx = this._pageX - this._originX;
                var dy = this._pageY - this._originY;
                var dist = Math.sqrt(dx * dx + dy + dy);
                if (dist < e5.input.Interactor.MAX_TAP_DISTANCE && tapTime < e5.input.Interactor.MAX_TAP_TIME)
                    this.onActionTap.dispatch(this, target, currentTarget);

                if (this.preventSelection)
                    $("html").removeClass("prevent-selection");
            };

            Interactor.prototype.handleMouseWheel = function (e) {
                if (!this._mouseWheelEnabled)
                    return;

                var delta = e.originalEvent.detail;
                if (!delta)
                    delta = e.originalEvent.wheelDelta / -40;
                this.onMouseWheel.dispatch(delta, e);
            };

            Interactor.prototype.dispose = function () {
                this.onActionBegin.dispose();
                this.onActionMove.dispose();
                this.onActionEnd.dispose();
                this.onActionTap.dispose();
                this.onMouseWheel.dispose();
                this.setMouseEnabled(false);
                this.setTouchEnabled(false);

                this.onActionBegin = null;
                this.onActionMove = null;
                this.onActionEnd = null;
                this.onActionTap = null;
                this._target = null;
                this._actionArea = null;
            };
            Interactor.MAX_TAP_TIME = 300;
            Interactor.MAX_TAP_DISTANCE = 10;
            return Interactor;
        })();
        input.Interactor = Interactor;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var e5;
(function (e5) {
    (function (input) {
        var Dragger = (function (_super) {
            __extends(Dragger, _super);
            function Dragger(target, vertical, horizontal) {
                if (typeof vertical === "undefined") { vertical = false; }
                if (typeof horizontal === "undefined") { horizontal = false; }
                _super.call(this, target);
                this.onChange = new e5.core.Signal();
                this.onChangeEnd = new e5.core.Signal();
                this._minLocalX = NaN;
                this._maxLocalX = NaN;
                this._minLocalY = NaN;
                this._maxLocalY = NaN;
                this._vertical = true;
                this._horizontal = true;
                this._keepInBounds = false;

                this.setMouseEnabled(true);
                this.setTouchEnabled(true);
                this.setVertical(vertical);
                this.setHorizontal(horizontal);

                this.onActionBegin.add(this.handleActionBegin, this);
                this.onActionMove.add(this.handleActionMove, this);
                this.onActionEnd.add(this.handleActionEnd, this);
            }
            Dragger.prototype.setVertical = function (value) {
                if (this._vertical == value)
                    return;
                this._vertical = value;
            };

            Dragger.prototype.getVertical = function () {
                return this._vertical;
            };

            Dragger.prototype.setKeepInBounds = function (value) {
                if (this._keepInBounds == value)
                    return;
                this._keepInBounds = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getKeepInBounds = function () {
                return this._keepInBounds;
            };

            Dragger.prototype.setHorizontal = function (value) {
                if (this._horizontal == value)
                    return;
                this._horizontal = value;
            };

            Dragger.prototype.getHorizontal = function () {
                return this._horizontal;
            };

            Dragger.prototype.setMinLocalX = function (value) {
                if (this._minLocalX == value)
                    return;
                this._minLocalX = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMinLocalX = function () {
                if (isNaN(this._minLocalX)) {
                    if (this._keepInBounds)
                        return 0;
                    else
                        return -10000000;
                }
                return this._minLocalX;
            };

            Dragger.prototype.setMaxLocalX = function (value) {
                if (this._maxLocalX == value)
                    return;
                this._maxLocalX = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMaxLocalX = function () {
                if (isNaN(this._maxLocalX)) {
                    if (this._keepInBounds) {
                        if (this.getTarget().parent()) {
                            return this.getTarget().parent().width() - this.getTarget().outerWidth();
                        } else
                            return 0;
                    } else
                        return 10000000;
                }
                return this._maxLocalX;
            };

            Dragger.prototype.setMinLocalY = function (value) {
                if (this._minLocalY == value)
                    return;
                this._minLocalY = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMinLocalY = function () {
                if (isNaN(this._minLocalY)) {
                    if (this._keepInBounds)
                        return 0;
                    else
                        return -10000000;
                }
                return this._minLocalY;
            };

            Dragger.prototype.setMaxLocalY = function (value) {
                if (this._maxLocalY == value)
                    return;
                this._maxLocalY = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMaxLocalY = function () {
                if (isNaN(this._maxLocalY)) {
                    if (this._keepInBounds) {
                        if (this.getTarget().parent()) {
                            return this.getTarget().parent().height() - this.getTarget().outerHeight();
                        } else
                            return 0;
                    } else
                        return 10000000;
                }
                return this._maxLocalY;
            };

            Dragger.prototype.setLocalX = function (value) {
                value = e5.math.Calc.clamp(Math.round(value), this.getMinLocalX(), this.getMaxLocalX());
                this.getTarget().css("left", value + "px");
            };

            Dragger.prototype.getLocalX = function () {
                return this.getTarget().position().left;
            };

            Dragger.prototype.setLocalY = function (value) {
                value = e5.math.Calc.clamp(Math.round(value), this.getMinLocalY(), this.getMaxLocalY());
                this.getTarget().css("top", value + "px");
            };

            Dragger.prototype.getLocalY = function () {
                return this.getTarget().position().top;
            };

            Dragger.prototype.refreshExtrema = function () {
                //TODO: keep target in min/max bounds
            };

            Dragger.prototype.handleActionBegin = function () {
                this.getTarget().addClass("dragging");
            };

            Dragger.prototype.handleActionMove = function () {
                var pos = this.getTarget().position();
                if (this.getHorizontal())
                    this.setLocalX(pos.left + this.getDeltaX());
                if (this.getVertical())
                    this.setLocalY(pos.top + this.getDeltaY());
                this.onChange.dispatch();
            };

            Dragger.prototype.handleActionEnd = function () {
                this.getTarget().removeClass("dragging");
                this.onChangeEnd.dispatch();
            };
            return Dragger;
        })(e5.input.Interactor);
        input.Dragger = Dragger;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var ScrollerSetting = (function () {
            function ScrollerSetting() {
                this.scrollerMode = e5.input.ScrollerModes.SCROLL;
                this.mouseEnabled = false;
                this.touchEnabled = false;
                this.mouseWheelEnabled = false;
                this.mouseWheelSpeed = 16;
                this.mouseWheelTime = 0.5;
                this.horizontal = false;
                this.vertical = false;
                this.contentWidth = NaN;
                this.contentHeight = NaN;
                this.clamping = true;
                this.centering = false;
                this.preventMouseWheel = false;
            }
            return ScrollerSetting;
        })();
        input.ScrollerSetting = ScrollerSetting;

        var Scroller = (function (_super) {
            __extends(Scroller, _super);
            function Scroller(wrapper, holder, setting) {
                _super.call(this, wrapper);
                /**
                * callback: ():void
                */
                this.onResized = new e5.core.Signal();
                /**
                * callback: (newScrollLeft:number, oldScrollLeft:number):void
                */
                this.onScrollLeft = new e5.core.Signal();
                /**
                * callback: (newScrollTop:number, oldScrollTop:number):void
                */
                this.onScrollTop = new e5.core.Signal();
                this._enabled = true;
                this._lastMouseWheelDelta = 0;
                this._mouseWheelTimeoutHandle = 0;
                this._mouseWheelTime = 0.5;
                this._scrollerMode = null;
                this._vertical = true;
                this._horizontal = false;
                this._contentHeight = NaN;
                this._contentWidth = NaN;
                this._clamping = true;
                this._minScrollTop = 0;
                this._minScrollLeft = 0;
                this._centering = false;
                this._preventMouseWheel = false;
                this._holder = holder;
                this._scrollTop = holder ? holder.position().top : 0;
                this._lastScrollTop = this._scrollTop;
                this._scrollLeft = holder ? holder.position().left : 0;
                this._lastScrollLeft = this._scrollLeft;
                this.onActionMove.add(this.moveDrag, this);

                if (setting)
                    this.setSetting(setting);
            }
            Scroller.prototype.setSetting = function (setting) {
                this.setClamping(setting.clamping);
                this.setCentering(setting.centering);
                this._contentWidth = setting.contentWidth;
                this._contentHeight = setting.contentHeight;
                this.refreshMaxima();

                this._preventMouseWheel = setting.preventMouseWheel;
                this._mouseWheelTime = setting.mouseWheelTime;
                this.setScrollerMode(setting.scrollerMode);
                this.setVertical(setting.vertical);
                this.setHorizontal(setting.horizontal);
                this.setMouseEnabled(setting.mouseEnabled);
                this.setMouseWheelSpeed(setting.mouseWheelSpeed);
                this.setTouchEnabled(setting.touchEnabled);
                this.setMouseWheelEnabled(setting.mouseWheelEnabled);
            };

            Scroller.prototype.setContentWidth = function (value) {
                if (this._contentWidth == value)
                    return;
                this._contentWidth = value;
                this.refreshMaxima();
            };

            Scroller.prototype.setContentHeight = function (value) {
                if (this._contentHeight == value)
                    return;
                this._contentHeight = value;
                this.refreshMaxima();
            };

            Scroller.prototype.scrollIntoView = function (element, top, time) {
                if (typeof time === "undefined") { time = 0; }
                //very simple implementation
                var ele = $(element);
                var tar = this.getTarget();
                var pos = ele.offset();
                var hei = ele.outerHeight();
                var availHei = tar.outerHeight();
                var pgY = pos.top - tar.offset().top;
                var resTop = this._scrollTop;
                if (pgY < 0)
                    resTop = element.offsetTop - tar.position().top;
                else if (pgY + hei > availHei)
                    resTop = element.offsetTop - (availHei - hei + tar.position().top);
                this.tweenToTop(resTop, time);
                //TO-DO: correct the calculations
                //var gl = math.Geom.localToGlobal(element, 0, 0);
                //var st = math.Geom.globalToLocal(this.getTarget()[0], gl.x, gl.y);
                //this.setScrollTop(st.y - this.getTarget()[0].scrollTop);
                //ARRRGHHHH IE renders immadiately, but resolves position later
                //var topPos = this._scrollTop;
                //var leftPos = this._scrollLeft;
                //element.scrollIntoView(top);
                //var newLeft: number = this.getScrollerMode().getScrollLeft(this);
                //this._scrollerMode.scrollLeft(this, leftPos);
                //this.tweenToLeft(newLeft, time);
                //var newTop: number = this.getScrollerMode().getScrollTop(this);
                //this._scrollerMode.scrollTop(this, topPos);
                //this.tweenToTop(newTop, time);
            };

            //resets the scroll values by the
            //real values of the dom element
            //through the current ScrollMode.
            //e.g. in ScrollMode.SCROLL its retrieves
            //the native scrollTop() and scrollLeft() values
            //as numbers
            Scroller.prototype.refresh = function () {
                if (this._vertical)
                    this.setScrollTop(this._scrollerMode.getScrollTop(this));
                if (this._horizontal)
                    this.setScrollLeft(this._scrollerMode.getScrollLeft(this));
            };

            Scroller.prototype.resize = function () {
                this.refreshMaxima();
                if (this._vertical)
                    this.setScrollTop(this._scrollTop);
                if (this._horizontal)
                    this.setScrollLeft(this._scrollLeft);
                this.onResized.dispatch();
            };

            Scroller.prototype.getContentWidth = function () {
                if (this._holder)
                    return isNaN(this._contentWidth) ? this._holder.width() : this._contentWidth;
                return isNaN(this._contentWidth) ? this.getTarget()[0].scrollWidth : this._contentWidth;
                //return isNaN(this._contentWidth) ? this.getTarget().innerWidth() : this._contentWidth;
            };

            Scroller.prototype.getContentHeight = function () {
                if (this._holder)
                    return isNaN(this._contentHeight) ? this._holder.height() : this._contentHeight;
                return isNaN(this._contentHeight) ? this.getTarget()[0].scrollHeight : this._contentHeight;
                //return isNaN(this._contentHeight) ? this.getTarget().innerHeight() : this._contentHeight;
            };

            Scroller.prototype.refreshMaxima = function () {
                var cw = this.getContentWidth();
                var ch = this.getContentHeight();
                var tw = this.getTarget().width();
                var th = this.getTarget().height();
                this._maxScrollLeft = cw - tw;
                this._maxScrollTop = ch - th;
                this._minScrollLeft = 0;
                this._minScrollTop = 0;

                if (this._maxScrollLeft < 0) {
                    if (this._centering) {
                        this._maxScrollLeft = -0.5 * (tw - cw);
                        this._minScrollLeft = this._maxScrollLeft;
                    } else
                        this._maxScrollLeft = 0;
                }
                if (this._maxScrollTop < 0) {
                    if (this._centering) {
                        this._maxScrollTop = -0.5 * (th - ch);
                        this._minScrollTop = this._maxScrollTop;
                    } else
                        this._maxScrollTop = 0;
                }
            };

            Scroller.prototype.getHolder = function () {
                return this._holder;
            };

            Scroller.prototype.getHorizontal = function () {
                return this._horizontal;
            };

            Scroller.prototype.setHorizontal = function (value) {
                this._horizontal = value;
            };

            Scroller.prototype.getVertical = function () {
                return this._vertical;
            };

            Scroller.prototype.setVertical = function (value) {
                this._vertical = value;
            };

            Scroller.prototype.getEnabled = function () {
                return this._enabled;
            };

            Scroller.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Scroller.prototype.getCentering = function () {
                return this._centering;
            };

            Scroller.prototype.setCentering = function (value) {
                this._centering = value;
            };

            Scroller.prototype.getClamping = function () {
                return this._clamping;
            };

            Scroller.prototype.setClamping = function (value) {
                this._clamping = value;
            };

            Scroller.prototype.getLastMouseWheelDelta = function () {
                return this._lastMouseWheelDelta;
            };

            Scroller.prototype.getScrollTopMin = function () {
                return this._minScrollTop;
            };

            Scroller.prototype.getScrollTopMax = function () {
                return this._maxScrollTop;
            };

            Scroller.prototype.getScrollLeftMin = function () {
                return this._minScrollLeft;
            };

            Scroller.prototype.getScrollLeftMax = function () {
                return this._maxScrollLeft;
            };

            Scroller.prototype.getScrollLeft = function () {
                return this._scrollLeft;
            };

            Scroller.prototype.setScrollLeft = function (value) {
                if (this.getClamping())
                    value = e5.math.Calc.clamp(value, this.getScrollLeftMin(), this.getScrollLeftMax());
                if (this._scrollLeft == value)
                    return;
                var lastValue = this._scrollLeft;
                this._scrollLeft = value;

                //if (this._horizontal && this._scrollerMode)
                if (this._scrollerMode)
                    this._scrollerMode.scrollLeft(this, this._scrollLeft);
                this.onScrollLeft.dispatch(this._scrollLeft, lastValue);
            };

            Scroller.prototype.getScrollTop = function () {
                return this._scrollTop;
            };

            Scroller.prototype.setScrollTop = function (value) {
                if (this.getClamping())
                    value = e5.math.Calc.clamp(value, this.getScrollTopMin(), this.getScrollTopMax());
                if (this._scrollTop == value)
                    return;
                var lastValue = this._scrollTop;
                this._scrollTop = value;

                //if (this._vertical && this._scrollerMode)
                if (this._scrollerMode)
                    this._scrollerMode.scrollTop(this, this._scrollTop);
                this.onScrollTop.dispatch(this._scrollTop, lastValue);
            };

            Scroller.prototype.getMouseWheelSpeed = function () {
                return this._mouseWheelSpeed;
            };

            Scroller.prototype.setMouseWheelSpeed = function (value) {
                this._mouseWheelSpeed = value;
            };

            Scroller.prototype.getScrollerMode = function () {
                return this._scrollerMode;
            };

            Scroller.prototype.setScrollerMode = function (value) {
                if (this._scrollerMode == value)
                    return;
                if (this._scrollerMode)
                    this._scrollerMode.exit(this);
                this._scrollerMode = value;
                if (this._scrollerMode)
                    this._scrollerMode.enter(this);
            };

            Scroller.prototype.handleMouseWheelEnd = function () {
            };

            Scroller.prototype.mouseWheel = function (delta, evt) {
                var _this = this;
                if (!this._enabled)
                    return;

                this._lastMouseWheelDelta = delta;

                clearTimeout(this._mouseWheelTimeoutHandle);
                this._mouseWheelTimeoutHandle = setTimeout(function () {
                    _this.handleMouseWheelEnd();
                }, 500);

                if (this._preventMouseWheel)
                    evt.preventDefault();

                var minDiff = 0;
                if (delta > 0) {
                    if (this._vertical) {
                        if (Math.abs(this._scrollTop - this._maxScrollTop) > minDiff)
                            evt.preventDefault();
                    }
                    if (this._horizontal) {
                        if (Math.abs(this._scrollLeft - this._maxScrollLeft) > minDiff)
                            evt.preventDefault();
                    }
                } else if (!this._preventMouseWheel) {
                    if (this._vertical) {
                        if (Math.abs(this._scrollTop - this._minScrollTop) > minDiff)
                            evt.preventDefault();
                    }
                    if (this._horizontal) {
                        if (Math.abs(this._scrollLeft - this._minScrollLeft) > minDiff)
                            evt.preventDefault();
                    }
                }

                if (this._vertical)
                    this.tweenToTop(this._scrollTop + delta * this.getMouseWheelSpeed(), this._mouseWheelTime);
                else if (this._horizontal)
                    this.tweenToLeft(this._scrollLeft + delta * this.getMouseWheelSpeed(), this._mouseWheelTime);
            };

            Scroller.prototype.tweenToTop = function (top, time) {
                if (this.getClamping())
                    top = e5.math.Calc.clamp(top, this.getScrollTopMin(), this.getScrollTopMax());
                TweenMax.to(this, time, { setScrollTop: top });
            };

            Scroller.prototype.tweenToLeft = function (left, time) {
                if (this.getClamping())
                    left = e5.math.Calc.clamp(left, this.getScrollLeftMin(), this.getScrollLeftMax());
                TweenMax.to(this, time, { setScrollLeft: left });
            };

            Scroller.prototype.moveDrag = function (pageX, pageY) {
                if (this._horizontal)
                    this.setScrollLeft(this.getScrollLeft() - this.getDeltaX());
                if (this._vertical)
                    this.setScrollTop(this.getScrollTop() - this.getDeltaY());
            };

            Scroller.prototype.dispose = function () {
                this.setMouseEnabled(false);
                this.setTouchEnabled(false);
                this.setMouseWheelEnabled(false);
                this.onScrollLeft.dispose();
                this.onScrollTop.dispose();
                this.onScrollLeft = null;
                this.onScrollTop = null;
                this._holder = null;

                _super.prototype.dispose.call(this);
            };
            return Scroller;
        })(e5.input.Interactor);
        input.Scroller = Scroller;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var BaseMode = (function () {
            function BaseMode() {
            }
            BaseMode.prototype.enter = function (scroller) {
                if (scroller.getVertical())
                    this.scrollTop(scroller, scroller.getScrollTop());
                if (scroller.getHorizontal())
                    this.scrollLeft(scroller, scroller.getScrollLeft());
            };
            BaseMode.prototype.exit = function (scroller) {
                if (scroller.getHorizontal())
                    this.scrollLeft(scroller, 0);
                if (scroller.getVertical())
                    this.scrollTop(scroller, 0);
            };
            BaseMode.prototype.scrollLeft = function (scroller, value) {
            };
            BaseMode.prototype.scrollTop = function (scroller, value) {
            };

            BaseMode.prototype.getScrollLeft = function (scroller) {
                return 0;
            };

            BaseMode.prototype.getScrollTop = function (scroller) {
                return 0;
            };
            return BaseMode;
        })();

        var ModeTranslate = (function (_super) {
            __extends(ModeTranslate, _super);
            function ModeTranslate() {
                _super.apply(this, arguments);
            }
            ModeTranslate.prototype.scrollLeft = function (scroller, value) {
                scroller.getHolder().css("transform", "translateX(" + -Math.round(value) + "px)");
            };
            ModeTranslate.prototype.scrollTop = function (scroller, value) {
                scroller.getHolder().css("transform", "translateY(" + -Math.round(value) + "px)");
            };

            ModeTranslate.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal() || scroller.getVertical())
                    scroller.getHolder().css("transform", "");
            };

            ModeTranslate.prototype.getScrollLeft = function (scroller) {
                return 0;
            };

            ModeTranslate.prototype.getScrollTop = function (scroller) {
                return 0;
            };
            return ModeTranslate;
        })(BaseMode);

        var ModeBackgroundTranslate = (function (_super) {
            __extends(ModeBackgroundTranslate, _super);
            function ModeBackgroundTranslate() {
                _super.apply(this, arguments);
            }
            ModeBackgroundTranslate.prototype.scrollLeft = function (scroller, value) {
                scroller.getTarget().css("background-position", -Math.round(value) + "px center");
            };
            ModeBackgroundTranslate.prototype.scrollTop = function (scroller, value) {
                scroller.getTarget().css("background-position", "center" + -Math.round(value) + "px");
            };

            ModeBackgroundTranslate.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal() || scroller.getVertical())
                    scroller.getTarget().css("background-position", "");
            };

            ModeBackgroundTranslate.prototype.getScrollLeft = function (scroller) {
                var backgroundPos = scroller.getTarget().css('backgroundPosition').split(" ");
                return parseInt(backgroundPos[0]);
            };

            ModeBackgroundTranslate.prototype.getScrollTop = function (scroller) {
                var backgroundPos = scroller.getTarget().css('backgroundPosition').split(" ");
                return parseInt(backgroundPos[1]);
            };
            return ModeBackgroundTranslate;
        })(BaseMode);

        var ModeTopLeft = (function (_super) {
            __extends(ModeTopLeft, _super);
            function ModeTopLeft() {
                _super.apply(this, arguments);
            }
            ModeTopLeft.prototype.scrollLeft = function (scroller, value) {
                scroller.getHolder().css("left", -Math.round(value) + "px");
            };
            ModeTopLeft.prototype.scrollTop = function (scroller, value) {
                scroller.getHolder().css("top", -Math.round(value) + "px");
            };

            ModeTopLeft.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal())
                    scroller.getHolder().css("left", "");
                if (scroller.getVertical())
                    scroller.getHolder().css("top", "");
            };

            ModeTopLeft.prototype.getScrollLeft = function (scroller) {
                return parseInt(scroller.getHolder().css('left'), 10);
            };

            ModeTopLeft.prototype.getScrollTop = function (scroller) {
                return parseInt(scroller.getHolder().css('top'), 10);
            };
            return ModeTopLeft;
        })(BaseMode);

        var ModeScroll = (function (_super) {
            __extends(ModeScroll, _super);
            function ModeScroll() {
                _super.apply(this, arguments);
            }
            ModeScroll.prototype.scrollLeft = function (scroller, value) {
                scroller.getTarget().scrollLeft(Math.round(value));
            };
            ModeScroll.prototype.scrollTop = function (scroller, value) {
                scroller.getTarget().scrollTop(Math.round(value));
            };

            ModeScroll.prototype.getScrollLeft = function (scroller) {
                return scroller.getTarget().scrollLeft();
            };

            ModeScroll.prototype.getScrollTop = function (scroller) {
                return scroller.getTarget().scrollTop();
            };
            return ModeScroll;
        })(BaseMode);

        var ScrollerModes = (function () {
            function ScrollerModes() {
            }
            ScrollerModes.BACKGROUND_TRANSLATE = new ModeBackgroundTranslate();
            ScrollerModes.TRANSLATE = new ModeTranslate();
            ScrollerModes.TOP_LEFT = new ModeTopLeft();
            ScrollerModes.SCROLL = new ModeScroll();
            return ScrollerModes;
        })();
        input.ScrollerModes = ScrollerModes;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var PagerSetting = (function (_super) {
            __extends(PagerSetting, _super);
            function PagerSetting() {
                _super.apply(this, arguments);
                this.pagingVertical = true;
                this.pagingHorizontal = false;
            }
            return PagerSetting;
        })(e5.input.ScrollerSetting);
        input.PagerSetting = PagerSetting;

        var Pager = (function (_super) {
            __extends(Pager, _super);
            function Pager(wrapper, holder, setting) {
                _super.call(this, wrapper, holder, null);
                /**
                * callback: (newPageIndex:number, oldPageIndex:number):void
                */
                this.onPageChange = new e5.core.Signal();
                /**
                * callback: (newPageIndex:number, oldPageIndex:number):void
                */
                this.onPageReached = new e5.core.Signal();
                this._pageHorizontal = 0;
                this._pageVertical = 0;
                this._pagingHorizontal = false;
                this._pagingVertical = false;
                this._lastReachedPageX = 0;
                this._lastReachedPageY = 0;
                this._tween = null;

                this._pageWidth = wrapper.width();
                this._pageHeight = wrapper.height();

                this.onActionBegin.add(this.startDrag, this);
                this.onActionEnd.add(this.endDrag, this);

                this.setSetting(setting);
            }
            Pager.prototype.setSetting = function (setting) {
                _super.prototype.setSetting.call(this, setting);
                this.setPagingHorizontal(setting.pagingHorizontal);
                this.setPagingVertical(setting.pagingVertical);
            };

            Pager.prototype.resize = function () {
                _super.prototype.resize.call(this);

                this._pageWidth = this.getTarget().width();
                this._pageHeight = this.getTarget().height();
                if (this._pagingVertical)
                    this.setScrollTop(this._pageVertical * this._pageHeight);
                if (this._pagingHorizontal)
                    this.setScrollLeft(this._pageHorizontal * this._pageWidth);
            };

            Pager.prototype.getPagingVertical = function () {
                return this._pagingVertical;
            };

            Pager.prototype.setPagingVertical = function (value) {
                if (this._pagingVertical == value)
                    return;
                this._pagingVertical = value;
                if (this._pagingVertical)
                    this.onScrollTop.add(this.checkPageVertical, this);
                else
                    this.onScrollTop.remove(this.checkPageVertical);
            };

            Pager.prototype.getPagingHorizontal = function () {
                return this._pagingHorizontal;
            };

            Pager.prototype.setPagingHorizontal = function (value) {
                if (this._pagingHorizontal == value)
                    return;
                this._pagingHorizontal = value;
                if (this._pagingHorizontal)
                    this.onScrollLeft.add(this.checkPageHorizontal, this);
                else
                    this.onScrollLeft.remove(this.checkPageHorizontal);
            };

            Pager.prototype.getPageHeight = function () {
                return this._pageHeight;
            };

            Pager.prototype.getPageWidth = function () {
                return this._pageWidth;
            };

            Pager.prototype.getPageHorizontal = function () {
                return this._pageHorizontal;
            };

            Pager.prototype.setPageHorizontal = function (value, time) {
                if (typeof time === "undefined") { time = 0; }
                TweenMax.to(this, time, { setScrollLeft: Math.round(value) * this._pageWidth });
            };

            Pager.prototype.getPageVertical = function () {
                return this._pageVertical;
            };

            Pager.prototype.setPageVertical = function (value, time) {
                if (typeof time === "undefined") { time = 0; }
                TweenMax.to(this, time, { setScrollTop: Math.round(value) * this._pageHeight });
            };

            Pager.prototype.startDrag = function () {
                TweenMax.killTweensOf(this);
            };

            Pager.prototype.endDrag = function () {
                if (!this.getEnabled())
                    return;

                if (this._pagingVertical) {
                    var dy = this.getOriginY() - this.getPageY();
                    if (Math.abs(dy) < 15)
                        TweenMax.to(this, 0.7, {
                            setScrollTop: this.getPageVertical() * this.getPageHeight()
                        });
                    else
                        TweenMax.to(this, 0.7, {
                            setScrollTop: this.getDeltaY() > 0 ? this.getPreviousPageTop() : this.getNextPageTop()
                        });
                }
                if (this._pagingHorizontal) {
                    TweenMax.to(this, 0.5, {
                        setScrollLeft: this.getDeltaX() > 0 ? this.getPreviousPageLeft() : this.getNextPageLeft()
                    });
                }
            };

            Pager.prototype.handleMouseWheelEnd = function () {
                _super.prototype.handleMouseWheelEnd.call(this);

                if (this._pagingVertical) {
                    TweenMax.to(this, 0.5, {
                        setScrollTop: this.getLastMouseWheelDelta() < 0 ? this.getPreviousPageTop() : this.getNextPageTop()
                    });
                }

                if (this._pagingHorizontal) {
                    TweenMax.to(this, 0.5, {
                        setScrollLeft: this.getLastMouseWheelDelta() < 0 ? this.getPreviousPageLeft() : this.getNextPageLeft()
                    });
                }
            };

            Pager.prototype.getPreviousPageTop = function () {
                return this.getScrollTop() - (this.getScrollTop() % this._pageHeight);
            };

            Pager.prototype.getNextPageTop = function () {
                return this.getScrollTop() + (this._pageHeight - (this.getScrollTop() % this._pageHeight));
            };

            Pager.prototype.getPreviousPageLeft = function () {
                return this.getScrollLeft() - (this.getScrollLeft() % this._pageWidth);
            };

            Pager.prototype.getNextPageLeft = function () {
                return this.getScrollLeft() + (this._pageWidth - (this.getScrollLeft() % this._pageWidth));
            };

            Pager.prototype.checkPageVertical = function () {
                var idx = Math.floor((this.getScrollTop() + this._pageHeight * 0.5) / this._pageHeight);
                if (idx != this._pageVertical) {
                    var oldPage = this._pageVertical;
                    this._pageVertical = idx;
                    this.onPageChange.dispatch(this._pageVertical, oldPage);
                }

                if (idx != this._lastReachedPageY) {
                    if (this.getScrollTop() % this._pageHeight <= 0.1) {
                        var oldReachedPageY = this._lastReachedPageY;
                        this._lastReachedPageY = idx;
                        this.onPageReached.dispatch(this._lastReachedPageY, oldReachedPageY);
                    }
                }
            };

            Pager.prototype.checkPageHorizontal = function () {
                var idx = Math.floor((this.getScrollLeft() + this._pageWidth * 0.5) / this._pageWidth);
                if (idx != this._pageHorizontal) {
                    var oldPage = this._pageHorizontal;
                    this._pageHorizontal = idx;
                    this.onPageChange.dispatch(this._pageHorizontal, oldPage);
                }

                if (idx != this._lastReachedPageX) {
                    if (this.getScrollLeft() % this._pageWidth <= 0.1) {
                        var oldReachedPageX = this._lastReachedPageX;
                        this._lastReachedPageX = idx;
                        this.onPageReached.dispatch(this._lastReachedPageX, oldReachedPageX);
                    }
                }
            };

            Pager.prototype.dispose = function () {
                this.onPageChange.dispose();
                this.onPageReached.dispose();
                this.onPageChange = null;
                this.onPageReached = null;
                _super.prototype.dispose.call(this);
            };
            return Pager;
        })(e5.input.Scroller);
        input.Pager = Pager;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (ui) {
        var Slider = (function () {
            function Slider(wrapper, value, min, max) {
                var _this = this;
                this.onChange = new e5.core.Signal();
                this._stepSize = 1;
                this._inverted = false;
                this._vertical = true;
                this._paddingBegin = 6;
                this._paddingEnd = 6;
                this._min = min;
                this._max = max;
                this._range = this._max - this._min;

                this.create();
                wrapper.append(this._widget);

                this._dragger = new e5.input.Dragger(this._thumb, true);
                this._dragger.preventTouchMove = true;
                this._dragger.preventMouseMove = true;
                this.resize();
                this.setValue(value);

                this._increase.click(function () {
                    return _this.handleClickIncrease();
                });
                this._decrease.click(function () {
                    return _this.handleClickDecrease();
                });
                this._trackLine.click(function (evt) {
                    return _this.handleClickTrackLine(evt);
                });
                this._dragger.onChangeEnd.add(this.handleChangeEndSlider, this);
            }
            Slider.prototype.resize = function () {
                if (this._vertical) {
                    var halfHeight = this._dragger.getTarget().height() * 0.5;
                    this._dragger.setMinLocalY(this._paddingBegin + halfHeight);
                    this._dragger.setMaxLocalY(this._track.height() - this._paddingEnd - halfHeight);
                } else {
                    var halfWidth = this._dragger.getTarget().width() * 0.5;
                    this._dragger.setMinLocalX(this._paddingBegin + halfWidth);
                    this._dragger.setMaxLocalX(this._track.width() - this._paddingEnd - halfWidth);
                }
            };

            Slider.prototype.getValue = function () {
                return this._value;
            };

            Slider.prototype.setValue = function (value) {
                value = e5.math.Calc.clamp(value, this._min, this._max);
                if (this._value == value)
                    return;
                this._value = value;
                this.update();
            };

            Slider.prototype.getInverted = function () {
                return this._inverted;
            };

            Slider.prototype.setInverted = function (value) {
                if (this._inverted == value)
                    return;
                this._inverted = value;
                this.update();
            };

            Slider.prototype.update = function () {
                var perc = this._inverted ? 1 - this.getPercentage() : this.getPercentage();
                this._dragger.setLocalY(this.getDraggerMin() + perc * this.getDraggerRange());
                this._decrease.toggleClass("disabled", this._value >= this._max);
                this._increase.toggleClass("disabled", this._value <= this._min);
            };

            Slider.prototype.getDraggerMin = function () {
                return this._vertical ? this._dragger.getMinLocalY() : this._dragger.getMinLocalX();
            };

            Slider.prototype.getDraggerMax = function () {
                return this._vertical ? this._dragger.getMaxLocalY() : this._dragger.getMaxLocalX();
            };

            Slider.prototype.getDraggerRange = function () {
                return this.getDraggerMax() - this.getDraggerMin();
            };

            Slider.prototype.getDraggerPosition = function () {
                return this._vertical ? this._thumb.position().top : this._thumb.position().left;
            };

            Slider.prototype.setPercentage = function (value) {
                this.setValue(this._min + value * this._range);
            };

            Slider.prototype.getPercentage = function () {
                return (this._value - this._min) / this._range;
            };

            Slider.prototype.setValueInternal = function (value) {
                if (this._value == value)
                    return;
                this.setValue(value);
                this.onChange.dispatch(this._value);
            };

            Slider.prototype.setPercentageInternal = function (value) {
                this.setValueInternal(this._min + value * this._range);
            };

            Slider.prototype.handleClickIncrease = function () {
                var off = this._inverted ? -this._stepSize : this._stepSize;
                this.setValueInternal(this.getValue() + off);
            };

            Slider.prototype.handleClickDecrease = function () {
                var off = this._inverted ? this._stepSize : -this._stepSize;
                this.setValueInternal(this.getValue() + off);
            };

            Slider.prototype.handleChangeEndSlider = function () {
                var perc = (this.getDraggerPosition() - this.getDraggerMin()) / this.getDraggerRange();
                if (this._inverted)
                    perc = 1 - perc;
                this.setPercentageInternal(perc);
            };

            Slider.prototype.handleClickTrackLine = function (evt) {
                var perc = (Math.round(evt.pageY - this._track.offset().top) - this.getDraggerMin()) / this.getDraggerRange();
                if (this._inverted)
                    perc = 1 - perc;
                this.setPercentageInternal(perc);
            };

            Slider.prototype.create = function () {
                this._widget = $("<div class='e5-slider' tabindex='10'></div>");
                this._track = $("<div class='e5-slider-track'></div>");
                this._widget.append(this._track);
                this._trackLine = $("<div class='e5-slider-track-line'></div>");
                this._track.append(this._trackLine);
                this._thumb = $("<div class='e5-slider-thumb'></div>");
                this._track.append(this._thumb);
                this._increase = $("<div class='e5-slider-button decrease'>-</div>");
                this._widget.append(this._increase);
                this._decrease = $("<div class='e5-slider-button zoom increase'>+</div>");
                this._widget.append(this._decrease);
            };
            return Slider;
        })();
        ui.Slider = Slider;
    })(e5.ui || (e5.ui = {}));
    var ui = e5.ui;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (ui) {
        var ScrollIndicator = (function () {
            function ScrollIndicator(scroller, container) {
                if (typeof container === "undefined") { container = null; }
                var _this = this;
                this.create();

                this._scroller = scroller;
                this._scroller.onResized.add(function () {
                    return _this.update();
                });
                this._scroller.onScrollTop.add(function () {
                    return _this.update();
                });

                if (container)
                    this.add(container);
            }
            ScrollIndicator.prototype.add = function (container) {
                container.append(this._widget);
                this.update();
            };

            ScrollIndicator.prototype.create = function () {
                this._widget = $("<div class='scroll_indicator'></div>");
                this._track = $("<div class='track'></div>");
                this._widget.append(this._track);
                this._thumb = $("<div class='thumb'></div>");
                this._track.append(this._thumb);
            };

            ScrollIndicator.prototype.update = function () {
                var th = this._track.height();

                var ratioY = this._scroller.getTarget().height() / this._scroller.getContentHeight();
                if (isNaN(ratioY))
                    ratioY = 0;
                ratioY = e5.math.Calc.clamp(ratioY, 0, 1);
                var newHeight = th * ratioY;

                var sr = this._scroller.getScrollTop() / this._scroller.getScrollTopMax();
                if (isNaN(sr))
                    sr = 0;
                sr = e5.math.Calc.clamp(sr, 0, 1);
                var newTop = (th - newHeight) * sr;

                this._widget.toggleClass("hidden", ratioY == 1);
                this._thumb[0].style.top = Math.round(newTop) + "px";
                this._thumb[0].style.height = Math.round(newHeight) + "px";
            };
            return ScrollIndicator;
        })();
        ui.ScrollIndicator = ScrollIndicator;
    })(e5.ui || (e5.ui = {}));
    var ui = e5.ui;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (ui) {
        var PageIndicator = (function () {
            function PageIndicator(holder, item, count, index, vertical) {
                if (typeof index === "undefined") { index = 0; }
                if (typeof vertical === "undefined") { vertical = true; }
                this._vertical = true;
                this._holder = holder;
                this._item = item;
                this._count = count;
                this._index = index;
                this._vertical = vertical;

                this.resize();
            }
            PageIndicator.prototype.getHolder = function () {
                return this._holder;
            };

            PageIndicator.prototype.getItem = function () {
                return this._item;
            };

            PageIndicator.prototype.getCount = function () {
                return this._count;
            };

            PageIndicator.prototype.getVertical = function () {
                return this._vertical;
            };

            PageIndicator.prototype.setVertical = function (value) {
                this._vertical = value;
            };

            PageIndicator.prototype.setCount = function (value, time) {
                if (typeof time === "undefined") { time = 0; }
                if (this._count == value)
                    return;
                this._count = value;

                this.refresh(time);
            };

            PageIndicator.prototype.getIndex = function () {
                return this._index;
            };

            PageIndicator.prototype.setIndex = function (value, time) {
                if (typeof time === "undefined") { time = 0; }
                if (this._index == value)
                    return;
                this._index = value;

                this.refresh(time);
            };

            PageIndicator.prototype.resize = function () {
                if (this._vertical) {
                    var h = this._holder.height() / this._count;
                    this._item.css("height", h + "px");
                    this._item.css("transform", "translateY(" + this._index * h + "px)");
                } else {
                    var w = this._holder.width() / this._count;
                    this._item.css("width", h + "px");
                    this._item.css("transform", "translateX(" + this._index * w + "px)");
                }
            };

            PageIndicator.prototype.refresh = function (time) {
                if (this._vertical) {
                    var h = this._holder.height() / this._count;
                    var posY = this._index * h;
                    TweenMax.to(this._item[0], time, { css: { transform: "translateY(" + posY + "px)" } });
                } else {
                    var w = this._holder.width() / this._count;
                    var posX = this._index * w;
                    TweenMax.to(this._item[0], time, { css: { transform: "translateX(" + posX + "px)" } });
                }
            };
            return PageIndicator;
        })();
        ui.PageIndicator = PageIndicator;
    })(e5.ui || (e5.ui = {}));
    var ui = e5.ui;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (ui) {
        var StickyScroller = (function () {
            function StickyScroller(list, containerClass, iconClass, globalLimitTop, globalLimitBottom, localLimitTop, localLimitBottom, syncMouseWheel) {
                if (typeof syncMouseWheel === "undefined") { syncMouseWheel = false; }
                var _this = this;
                this.list = list;
                this.containerClass = containerClass;
                this.iconClass = iconClass;
                this.globalLimitTop = globalLimitTop;
                this.globalLimitBottom = globalLimitBottom;
                this.localLimitTop = localLimitTop;
                this.localLimitBottom = localLimitBottom;
                this._scaleFix = 1;
                this._scaleFix = e5.core.Caps.pixelRatio;

                if (syncMouseWheel)
                    list.bind("mousewheel DOMMouseScroll", function (evt) {
                        return _this.handleMouseWheel(evt);
                    });
            }
            StickyScroller.prototype.handleMouseWheel = function (evt) {
                //prevent the default behaviour (scrolling)
                var originalEvent = evt.originalEvent;
                if (!originalEvent)
                    originalEvent = window.event;
                if (originalEvent.preventDefault)
                    originalEvent.preventDefault();
                originalEvent.returnValue = false;

                //TODO: implement it usable
                var target = evt.currentTarget;
                if (this.list[0].scrollHeight == this.list.outerHeight()) {
                    if (document.documentElement)
                        target = document.documentElement;
                    else
                        target = document.body;
                }

                //emulate the scrolling (do it manually)
                var delta = originalEvent.detail;
                if (!delta)
                    delta = originalEvent.wheelDelta / -40;
                target.scrollTop += delta * 16;

                //finally trigger a own  mousewheel and scroll event
                $(target).trigger("mousewheel DOMMouseScroll", originalEvent);
                $(target).trigger("scroll");
            };

            StickyScroller.prototype.getFirstVisibleElement = function (pageX, pageY) {
                var element = document.elementFromPoint(pageX + 10, pageY + 10);
                var firstWebsite = $(element).hasClass(this.containerClass) ? $(element) : $(element).parents("." + this.containerClass);
                var websites = $("." + this.containerClass + ":visible");
                var firstIndex = websites.index(firstWebsite);
                if (!firstIndex)
                    firstIndex = 0;
                if (firstWebsite.length <= 0)
                    return null;
                return firstWebsite;
            };

            StickyScroller.prototype.update = function () {
                var minHitTop = parseInt($("body").css("padding-top").replace(/[^-\d\.]/g, ''));
                var maxHitTop = Math.min(this.list.outerHeight(), $(window).innerHeight());
                var windowScrollTop = $(window).scrollTop();
                var scrollTop = windowScrollTop - this.list.position().top;
                var scrollBottom = scrollTop + maxHitTop + this.list.scrollTop();
                var listOff = this.list.offset();
                var hitTestPageX = listOff.left;
                var hitTestPageY = Math.max(listOff.top - windowScrollTop, minHitTop);
                var offsetTop = hitTestPageY + this.localLimitTop;

                var fstElement = this.getFirstVisibleElement(hitTestPageX * this._scaleFix, hitTestPageY * this._scaleFix);
                if (!fstElement) {
                    //console.log("NO FIRST ELEMENT FOUND", this._scaleFix);
                    return;
                }

                var websites = $("." + this.containerClass + ":visible");
                var firstIndex = websites.index(fstElement);
                websites = websites.slice(firstIndex);

                var iconClass = this.iconClass;
                var th = this;
                websites.each(function () {
                    var website = $(this);
                    var wh = website.outerHeight();
                    var topPos = website.position().top;
                    if (topPos > scrollBottom)
                        return false;

                    if (wh < 200)
                        return;

                    var icon = $("." + iconClass, website);
                    var localTopMin = th.localLimitTop;
                    var localTopMax = wh - (icon.outerHeight() + th.localLimitBottom);
                    var localTop = offsetTop - (website.offset().top - windowScrollTop);
                    if (localTop < localTopMin)
                        localTop = localTopMin;
                    else if (localTop > localTopMax)
                        localTop = localTopMax;

                    icon.css("top", "" + Math.round(localTop) + "px");
                    //icon.css("transform", "translateY(" + Math.round(localTop) + "px)");
                    //icon.css("transform", "translate3d(0px, " + Math.round(localTop) + "px, 0px)");
                });
            };
            return StickyScroller;
        })();
        ui.StickyScroller = StickyScroller;
    })(e5.ui || (e5.ui = {}));
    var ui = e5.ui;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (ui) {
        var Slideshow = (function () {
            function Slideshow(wrapper) {
                var _this = this;
                this.wrapper = wrapper;
                this.items = [];
                this._current = null;
                this._index = -1;
                this._state = "init";
                this._containerPadding = 5;
                this.minContainerWidth = 200;
                this.minContainerHeight = 200;
                this._hideTime = 0.3;
                this._showTime = 0.3;
                this._layoutTime = 0.3;
                this._appendToBody = false;
                this._holder = null;
                this._displayState = "normal";
                this.wrapper.addClass("e5_slideshow");
                this.wrapper.attr("tabindex", 0);
                this.create();
                this.resize();

                //this.displayState("fullscreen");
                this.wrapper.on("keydown", function (evt) {
                    return _this.handleKeyUp(evt);
                });
                $(window).bind("resize", function () {
                    return _this.resize();
                });
                this._prevBtn.click(function () {
                    return _this.prev();
                });
                this._nextBtn.click(function () {
                    return _this.next();
                });
                this._toggler.click(function () {
                    return _this.toggleFullscreen();
                });
                this._background.click(function () {
                    return _this.displayState("normal");
                });
            }
            Slideshow.prototype.create = function () {
                this._background = $("<div class='e5_slideshow_background'></div>");
                this.wrapper.append(this._background);

                this._container = $("<div class='e5_slideshow_container'></div>");
                this.wrapper.append(this._container);

                this._content = $("<div class='e5_slideshow_content'></div>");
                this._container.append(this._content);

                this._footer = $("<div class='e5_slideshow_footer'></div>");
                this._container.append(this._footer);

                this._mediaTitle = $("<div class='e5_slideshow_media_title'></div>");
                this._footer.append(this._mediaTitle);

                this._pageText = $("<div class='e5_slideshow_page_text'></div>");
                this._footer.append(this._pageText);

                this._toggler = $("<div class='e5_slideshow_control toggler'></div>");
                this._footer.append(this._toggler);

                this._prevBtn = $("<div class='e5_slideshow_control prev'></div>");
                this._container.append(this._prevBtn);

                this._nextBtn = $("<div class='e5_slideshow_control next'></div>");
                this._container.append(this._nextBtn);
            };

            Slideshow.prototype.resize = function () {
                this.layout(0);
            };

            Slideshow.prototype.updateSizes = function () {
                this.frameWidth = Math.min(this.wrapper.width(), $(window).width() - (this._containerPadding * 2));
                this.frameHeight = Math.min(this.wrapper.height(), Math.max($(window).height() - 60, 0));

                var maxContentWidth = this.frameWidth - (this._containerPadding * 2);
                var maxContentHeight = this.frameHeight - (this._containerPadding * 2);

                var contentScale = 1;
                this.contentWidth = this._current ? this._current.contentWidth : 100;
                if (this.contentWidth > maxContentWidth) {
                    contentScale = maxContentWidth / this.contentWidth;
                    this.contentWidth = maxContentWidth;
                }

                this.contentHeight = this._current ? this._current.contentHeight : 100;
                this.contentHeight *= contentScale;
                if (this.contentHeight > maxContentHeight)
                    this.contentHeight = maxContentHeight;

                this.containerWidth = this.contentWidth + this._containerPadding * 2;
                if (this.containerWidth < this.minContainerWidth)
                    this.containerWidth = this.minContainerWidth;

                this.containerHeight = this.contentHeight + this._containerPadding * 2;
                if (this.containerHeight < this.minContainerHeight)
                    this.containerHeight = this.minContainerHeight;
            };

            Slideshow.prototype.handleKeyUp = function (evt) {
                if (evt.keyCode == 37)
                    this.prev();
                else if (evt.keyCode == 39)
                    this.next();
                else if (evt.keyCode == 27)
                    this.displayState("normal");
            };

            Slideshow.prototype.toggleFullscreen = function () {
                if (this._displayState == "fullscreen")
                    this.displayState("normal");
                else
                    this.displayState("fullscreen");
            };

            Slideshow.prototype.displayState = function (state) {
                if (arguments.length == 0)
                    return this._displayState;
                if (this._displayState == state)
                    return;
                this._displayState = state;
                this.refreshDisplayState();
            };

            Slideshow.prototype.refreshDisplayState = function () {
                if (this._displayState == "fullscreen") {
                    this._holder = this.wrapper.parent();
                    if (this._appendToBody) {
                        $("body").append(this.wrapper);
                    }
                    $("body").addClass("e5slideshow_kill_overflow");
                    this.wrapper.addClass("full");
                    this.resize();
                } else if (this._displayState == "normal") {
                    $("body").removeClass("e5slideshow_kill_overflow");
                    this.wrapper.removeClass("full");
                    if (this._appendToBody && this._holder) {
                        this._holder.prepend(this.wrapper);
                    }
                    this.resize();
                }
            };

            Slideshow.prototype.next = function () {
                this.index(this._index + 1);
            };

            Slideshow.prototype.prev = function () {
                this.index(this._index - 1);
            };

            Slideshow.prototype.index = function (value) {
                if (arguments.length == 0)
                    return this._index;

                var l = this.items.length;
                if (l == 0) {
                    this._index = -1;
                    return;
                }

                if (value < 0)
                    value = l - 1;
                else if (value > (l - 1))
                    value = 0;
                this._index = value;

                this.openMedia(this.items[this._index]);
            };

            Slideshow.prototype.load = function (resources) {
                this.clear();
                var l = resources.length;

                this.wrapper.toggleClass("single_page", l == 1);
                for (var i = 0; i < l; ++i)
                    this.items.push(e5.ui.MediaFactory.create(resources[i]));

                //this.items.push(e5.ui.MediaFactory.create({ path: "", type: "map" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "http://videos-cdn.mozilla.net/brand/Mozilla_Firefox_Manifesto_v0.2_640.mp4", type: "video" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/para_navi_next_hover.png", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/ie8_message.jpg", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/website_icon_default.png", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/para_navi_next_hover.png", type: "image" }));
                this.index(0);
            };

            Slideshow.prototype.setContainerPadding = function (value) {
                this._containerPadding = value;
                this.resize();
            };
            Slideshow.prototype.openMedia = function (item) {
                var _this = this;
                if (this._current == item)
                    return;
                if (this._current)
                    this._current.onReady.clear();

                this._pageText.html("image " + (this._index + 1) + " of " + this.items.length + "");

                //this._mediaTitle.html("Dasdfasdf asdf asdf asdf");
                this._current = item;
                if (this._current && !this._current.created) {
                    this._current.create();
                    this._current.created = true;
                }

                this.hide(function () {
                    return _this.onCompleteHide();
                });
                this.wrapper.focus();
            };

            Slideshow.prototype.onCompleteHide = function () {
                if (this._current.onReady.getDispatched())
                    this.onReadyItem();
                else
                    this._current.onReady.add(this.onReadyItem, this);
            };

            Slideshow.prototype.onReadyItem = function () {
                var _this = this;
                this._content.empty();
                this._content.append(this._current.element);
                this.layout(this._layoutTime, function () {
                    return _this.show();
                });
            };

            Slideshow.prototype.layout = function (time, onComplete) {
                this.updateSizes();
                this._content.css({
                    width: this.contentWidth + "px",
                    height: this.contentHeight + "px",
                    top: Math.round((this.containerHeight - this.contentHeight) * 0.5) - this._containerPadding + "px"
                });
                var top = (this.frameHeight - this.containerHeight) * 0.5;
                var tween = {
                    css: {
                        width: this.containerWidth + "px",
                        height: this.containerHeight + "px",
                        top: top + "px"
                    }
                };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._container, time, tween);
                if (this._current)
                    this._current.resize();
            };

            Slideshow.prototype.appendToBody = function (append) {
                if (arguments.length == 0)
                    return this._appendToBody;
                if (this._appendToBody == append)
                    return;
                this._appendToBody = append;
                this.refreshDisplayState();
            };

            Slideshow.prototype.show = function (onComplete) {
                this.wrapper.removeClass("progress");
                var tween = { css: { opacity: 1 } };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._content, this._showTime, tween);
            };

            Slideshow.prototype.hide = function (onComplete) {
                this.wrapper.addClass("progress");
                var tween = { css: { opacity: 0 } };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._content, this._hideTime, tween);
            };

            Slideshow.prototype.clear = function () {
                var l = this.items.length;
                if (l == 0)
                    return;
                for (var i = 0; i < l; ++i)
                    this.items[i].dispose();
                this.items.splice(0, l);
                this._content.empty();
            };
            return Slideshow;
        })();
        ui.Slideshow = Slideshow;

        var MediaFactory = (function () {
            function MediaFactory() {
            }
            MediaFactory.create = function (resource) {
                var cls = e5.ui.MediaFactory._typeClasses[resource.type];
                if (!cls) {
                    console.log("NO MEDIA CLASS FOUND FOR TYPE:", resource.type);
                    return;
                }
                return new cls(resource);
            };

            MediaFactory.addClass = function (type, cls) {
                e5.ui.MediaFactory._typeClasses[type] = cls;
            };

            MediaFactory.removeClass = function (type) {
                delete e5.ui.MediaFactory._typeClasses[type];
            };
            MediaFactory._typeClasses = {};
            return MediaFactory;
        })();
        ui.MediaFactory = MediaFactory;

        var MediaElement = (function () {
            function MediaElement(resource) {
                this.resource = resource;
                this.onReady = new e5.core.Signal();
                this.contentWidth = 0;
                this.contentHeight = 0;
                this.created = false;
            }
            MediaElement.prototype.create = function () {
            };

            MediaElement.prototype.resize = function () {
            };

            MediaElement.prototype.dispose = function () {
                if (this.element) {
                    this.element.remove();
                    this.element = null;
                }
                this.onReady.dispose();
            };
            return MediaElement;
        })();
        ui.MediaElement = MediaElement;

        var ImageElement = (function (_super) {
            __extends(ImageElement, _super);
            function ImageElement(resource) {
                _super.call(this, resource);
                this.create();
                this.created = true;
            }
            ImageElement.prototype.create = function () {
                var _this = this;
                this.element = $("<img src='" + this.resource.path + "'></img>");
                this.element.addClass("e5_slideshow_media");
                this.element.bind("load", function (evt) {
                    return _this.handleImageLoaded(evt);
                });
                this.image = this.element[0];
            };

            ImageElement.prototype.handleImageLoaded = function (evt) {
                if (e5.core.Caps.isMSIE)
                    $("body").append(this.element);
                this.contentWidth = this.image.width;
                this.contentHeight = this.image.height;
                $(this.image).remove();
                this.onReady.dispatch();
            };
            return ImageElement;
        })(e5.ui.MediaElement);
        ui.ImageElement = ImageElement;
        e5.ui.MediaFactory.addClass("image", e5.ui.ImageElement);

        var VideoElement = (function (_super) {
            __extends(VideoElement, _super);
            function VideoElement(resource) {
                _super.call(this, resource);
            }
            VideoElement.prototype.create = function () {
                var _this = this;
                var sources = "";
                var fileNames = this.resource.path.split(";");
                var l = fileNames.length;
                for (var i = 0; i < l; ++i) {
                    var path = fileNames[i];
                    if (!path)
                        continue;
                    var extension = e5.text.Text.ext(path);
                    var type = "video/";
                    if (extension == "mp4")
                        type += "mp4";
                    else if (extension == "webm")
                        type += "webm";
                    else if (extension == "ogg")
                        type += "ogg";
                    else
                        continue;
                    sources += "<source src='" + path + "' type='" + type + "' />";
                }
                this.element = $("<video controls='controls'>" + sources + "</video>");
                this.element.addClass("e5_slideshow_media");
                this.element.bind("loadedmetadata", function (evt) {
                    return _this.handleVideoLoaded(evt);
                });
                this.video = this.element[0];
            };

            VideoElement.prototype.handleVideoLoaded = function (evt) {
                this.contentWidth = this.video.videoWidth;
                this.contentHeight = this.video.videoHeight;
                this.onReady.dispatch();
            };
            return VideoElement;
        })(e5.ui.MediaElement);
        ui.VideoElement = VideoElement;
        e5.ui.MediaFactory.addClass("video", e5.ui.VideoElement);
    })(e5.ui || (e5.ui = {}));
    var ui = e5.ui;
})(e5 || (e5 = {}));
var engage;
(function (engage) {
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager(currentLanguageCode) {
                if (typeof currentLanguageCode === "undefined") { currentLanguageCode = 'de'; }
                this.currentLanguageCode = currentLanguageCode;
                this.onComplete = new e5.core.Signal();
                this.onError = new e5.core.Signal();
                this.tables = [
                    'best_practice',
                    'best_practice_contact',
                    'best_practice_description',
                    'best_practice_media',
                    'best_practice_technology',
                    'best_practice_topic',
                    'best_practice_influence',
                    'contact',
                    'description',
                    'media',
                    'technology',
                    'influence',
                    'topic',
                    'ui_label',
                    'page',
                    'page_media',
                    'menu'];
                this._loadFromWeb = true;
            }
            BaseDataManager.prototype.loadFromWeb = function () {
                this._loadFromWeb = true;
                this.load(engage.model.Ressource.CLOUD_DATA_REQUEST);
            };

            BaseDataManager.prototype.loadFromDisk = function () {
                this._loadFromWeb = false;
                this.load(engage.model.Ressource.CLOUD_DATA_OFFLINE);
            };

            BaseDataManager.prototype.load = function (url) {
                var _this = this;
                var setting = {};
                setting.url = url;
                setting.dataType = "json";
                setting.crossDomain = true;
                setting.success = function (data) {
                    return _this.handleDataSuccess(data);
                };
                setting.error = function (xhr, status, error) {
                    return _this.handleDataError(xhr, status, error);
                };
                $.ajax(setting);
            };

            BaseDataManager.prototype.handleDataError = function (xhr, status, error) {
                this.onError.dispatch(this._loadFromWeb, status, error);
            };

            BaseDataManager.prototype.handleDataSuccess = function (data) {
                this.data = data;
                this.resolve();
                this.finalize();
                this.onComplete.dispatch();
            };

            BaseDataManager.prototype.resolve = function () {
                var l = this.tables.length;
                for (var i = 0; i < l; ++i) {
                    if (!this.data[this.tables[i]])
                        this.data[this.tables[i]] = [];
                }
                for (var i = 0; i < l; ++i) {
                    this['resolve_' + this.tables[i]]();
                }
            };
            BaseDataManager.prototype.finalize = function () {
            };
            BaseDataManager.prototype.resolveByLang = function (table, tar) {
                var sourceId = tar.id;
                var ary = this.data[table + '_locale'];
                var l = ary.length;
                for (var languageId = 1; languageId < 3; ++languageId) {
                    var langCode = languageId == 1 ? 'de' : 'en';
                    for (var i = 0; i < l; ++i) {
                        var item = ary[i];
                        var lang = '';
                        var id = '';
                        if ('number' == typeof item[table])
                            id = item[table];
                        else
                            id = item[table].id;
                        if (id != sourceId)
                            continue;
                        if ('number' == typeof item.language)
                            lang = item.language;
                        else
                            lang = item.language.id;

                        if (lang == languageId) {
                            tar[langCode] = item;
                            break;
                        }
                    }
                }
                if (tar.de && !tar.en)
                    tar.en = tar.de;
                else if (tar.en && !tar.de)
                    tar.de = tar.en;
                tar.trans = tar[this.currentLanguageCode];
            };
            BaseDataManager.prototype.resolveById = function (table, id) {
                return this.resolveByAttr(table, 'id', id);
            };
            BaseDataManager.prototype.resolveByAttr = function (table, attr, value) {
                var ary = this.data[table];
                var l = ary.length;
                for (var i = 0; i < l; ++i)
                    if (ary[i][attr] == value)
                        return ary[i];
                return null;
            };
            BaseDataManager.prototype.resolve_best_practice = function () {
                var item;
                var l = this.data.best_practice.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice[i];
                }
            };
            BaseDataManager.prototype.resolve_best_practice_contact = function () {
                var item;
                var l = this.data.best_practice_contact.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_contact[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.contact = this.resolveById('contact', item.contact);
                }
            };
            BaseDataManager.prototype.resolve_best_practice_description = function () {
                var item;
                var l = this.data.best_practice_description.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_description[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.description = this.resolveById('description', item.description);
                }
            };
            BaseDataManager.prototype.resolve_best_practice_media = function () {
                var item;
                var l = this.data.best_practice_media.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_media[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.media = this.resolveById('media', item.media);
                }
            };
            BaseDataManager.prototype.resolve_best_practice_technology = function () {
                var item;
                var l = this.data.best_practice_technology.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_technology[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.technology = this.resolveById('technology', item.technology);
                }
            };
            BaseDataManager.prototype.resolve_best_practice_topic = function () {
                var item;
                var l = this.data.best_practice_topic.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_topic[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.topic = this.resolveById('topic', item.topic);
                }
            };
            BaseDataManager.prototype.resolve_best_practice_influence = function () {
                var item;
                var l = this.data.best_practice_influence.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.best_practice_influence[i];
                    item.best_practice = this.resolveById('best_practice', item.best_practice);
                    item.influence = this.resolveById('influence', item.influence);
                }
            };
            BaseDataManager.prototype.resolve_page = function () {
                var item;
                var l = this.data.page.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.page[i];
                }
            };
            BaseDataManager.prototype.resolve_page_media = function () {
                var item;
                var l = this.data.page_media.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.page_media[i];
                    item.page = this.resolveById('page', item.page);
                    item.media = this.resolveById('media', item.media);
                }
            };
            BaseDataManager.prototype.resolve_menu = function () {
                var item;
                var l = this.data.menu.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.menu[i];
                    item.page = this.resolveById('page', item.page);
                }
            };
            BaseDataManager.prototype.resolve_contact = function () {
                var item;
                var l = this.data.contact.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.contact[i];
                }
            };
            BaseDataManager.prototype.resolve_description = function () {
                var item;
                var l = this.data.description.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.description[i];
                }
            };
            BaseDataManager.prototype.resolve_media = function () {
                var item;
                var l = this.data.media.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.media[i];
                }
            };
            BaseDataManager.prototype.resolve_technology = function () {
                var item;
                var l = this.data.technology.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.technology[i];
                }
            };
            BaseDataManager.prototype.resolve_topic = function () {
                var item;
                var l = this.data.topic.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.topic[i];
                }
            };
            BaseDataManager.prototype.resolve_influence = function () {
                var item;
                var l = this.data.influence.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.influence[i];
                }
            };
            BaseDataManager.prototype.resolve_ui_label = function () {
                var item;
                var l = this.data.ui_label.length;
                for (var i = 0; i < l; ++i) {
                    item = this.data.ui_label[i];
                }
            };
            return BaseDataManager;
        })();
        model.BaseDataManager = BaseDataManager;
    })(engage.model || (engage.model = {}));
    var model = engage.model;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (model) {
        var DataManager = (function (_super) {
            __extends(DataManager, _super);
            function DataManager() {
                _super.call(this);
                this.TERMTIME_BEGIN = 1990;
                this.TERMTIME_END = 2018;
                this.loadFromWeb();
            }
            DataManager.prototype.finalize = function () {
                //resolve labals
                this._labels = {};
                var l = this.data.ui_label.length;
                for (var i = 0; i < l; ++i) {
                    var label = this.data.ui_label[i];
                    this._labels[label.key] = label.value;
                }

                //TODO: NOT FINAL
                var l = this.data.media.length;
                for (var i = 0; i < l; ++i) {
                    var media = this.data.media[i];
                    media.path = engage.model.Ressource.MEDIA_PATH + media.path;
                }

                this.data.menu.sort(function (a, b) {
                    return a.order - b.order;
                });

                var l = this.data.page_media.length;
                for (var i = 0; i < l; ++i) {
                    var med = this.data.page_media[i].page.media;
                    if (!med)
                        med = [];
                    med.push(this.data.page_media[i].media);
                    this.data.page_media[i].page.media = med;
                }

                //sort filter elements
                this.data.topic.sort(this.sortOnOrder);
                this.data.technology.sort(this.sortOnOrder);
                this.data.influence.sort(this.sortOnOrder);

                //resolve matchings
                var bpMatchingTables = [
                    ["contacts", this.data.best_practice_contact, "best_practice", "contact"],
                    ["descriptions", this.data.best_practice_description, "best_practice", "description"],
                    ["media", this.data.best_practice_media, "best_practice", "media"],
                    ["technologies", this.data.best_practice_technology, "best_practice", "technology"],
                    ["topics", this.data.best_practice_topic, "best_practice", "topic"],
                    ["influences", this.data.best_practice_influence, "best_practice", "influence"]
                ];

                //console.log(this.data.best_practice_influence);
                //add custom best_practice properties
                var placeholderURL = engage.model.Ressource.ASSET_PATH + "/code-engage-map-placeholder.jpg";
                var bp;
                l = this.data.best_practice.length;
                for (var i = 0; i < l; ++i) {
                    bp = this.data.best_practice[i];

                    if (bp.summary) {
                        var txt;
                        try  {
                            txt = $(bp.summary).text();
                            bp.subTitle = txt.substring(0, 60);
                        } catch (err) {
                            bp.subTitle = "";
                        }
                    } else
                        bp.subTitle = "";

                    bp.hovered = false;
                    bp.inMapBounds = true;
                    bp.itemOrder = 0;
                    bp.filters = [];

                    var dateString = bp.termtime_start + "";
                    var dateParts = dateString.split("-");
                    bp.termtime_start = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
                    bp.termtimeBeginMask = bp.termtime_start.getTime();

                    var dateString = bp.termtime_end + "";
                    var dateParts = dateString.split("-");
                    bp.termtime_end = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
                    bp.termtimeEndMask = bp.termtime_end.getTime();

                    bp.termtimeRangeMask = bp.termtimeEndMask - bp.termtimeBeginMask;
                    bp.termtimeRangeCenterMask = bp.termtimeBeginMask + bp.termtimeRangeMask * 0.5;

                    for (var j = 0; j < bpMatchingTables.length; ++j) {
                        var mat = bpMatchingTables[j];
                        bp[mat[0]] = this.resolveMatchings(mat[1], mat[2], mat[3], bp);
                        //                    if(mat[0] == "influences")
                        //                        console.log(mat[1], mat[2], mat[3], bp);
                    }

                    var mainImage = null;
                    if (bp.media.length > 0) {
                        var m = bp.media.length;
                        for (var j = 0; j < m; ++j) {
                            if (bp.media[j].type != "image")
                                continue;
                            mainImage = bp.media[j];
                            bp.mainImagePath = bp.media[j].path;
                            break;
                        }
                    }
                    if (!bp.mainImagePath)
                        bp.mainImagePath = placeholderURL;
                    if (!bp.media_preview) {
                        bp.media_preview = mainImage;
                    } else {
                        var prevId = bp.media_preview;
                        bp.media_preview = this.data.media.id(prevId);
                    }

                    if (bp.media_preview)
                        bp.previewImagePath = bp.media_preview.path;
                    else
                        bp.previewImagePath = placeholderURL;

                    var descr = "";
                    if (bp.descriptions.length > 0) {
                        var des = bp.descriptions[0];
                        descr += des.conditions_for_transfer + " ";
                        descr += des.context_and_challenges + " ";
                        descr += des.descriptive_details + " ";
                        descr += des.factors_for_success + " ";
                        descr += des.factors_with_local_context + " ";
                        descr += des.financing_issues + " ";
                        descr += des.implementation_modalities + " ";
                        descr += des.objectives + " ";
                        descr += des.points_monitored + " ";
                        descr += des.results_and_prospects + " ";
                    }

                    //set the basic search string contents
                    bp.searchString = bp.title + " " + descr + " " + bp.subTitle + " " + bp.location + " " + bp.summary;

                    //add related technology titles to search string
                    var bpTechs = bp.technologies;
                    var m = bpTechs.length;
                    for (var j = 0; j < m; ++j)
                        bp.searchString += " " + bpTechs[j].title;

                    //add related topic titles to search string
                    var bpTopics = bp.topics;
                    var m = bpTopics.length;
                    for (var j = 0; j < m; ++j)
                        bp.searchString += " " + bpTopics[j].title;

                    //add related influences
                    var bpInfluences = bp.topics;
                    var m = bpInfluences.length;
                    for (var j = 0; j < m; ++j)
                        bp.searchString += " " + bpInfluences[j].title;

                    //transform to lowercase for easier matching
                    bp.searchString = bp.searchString.toLowerCase();
                }

                //CREATE SOME DUMMY DATA AND BINDINGS
                var l = this.data.best_practice.length;
                for (var i = 0; i < l; ++i) {
                    var bp = this.data.best_practice[i];
                    //var neLng = 49.04296875;
                    //var neLat = 62.06273325884654;
                    //var swLng = -33.57421875;
                    //var swLat = 33.65120829920497;
                    //var lngSpan = neLng - swLng;
                    //var latSpan = neLat - swLat;
                    //bp.latitude = swLat + latSpan * (Math.random() * 0.9 + 0.1);
                    //bp.longitude = swLng + lngSpan * (Math.random() * 0.6 + 0.4);
                    //var m = this.data.topic.length;
                    //for (var j = 0; j < m; ++j)
                    //{
                    //    if (Math.random() < 0.25)
                    //        bp.topics.push(this.data.topic[j]);
                    //}
                    //var m = this.data.technology.length;
                    //for (var j = 0; j < m; ++j)
                    //{
                    //    if (Math.random() < 0.25)
                    //        bp.technologies.push(this.data.technology[j]);
                    //}
                    //var m = this.data.influence.length;
                    //for (var j = 0; j < m; ++j)
                    //{
                    //    if (Math.random() < 0.25)
                    //        bp.influences.push(this.data.influence[j]);
                    //}
                }

                //TODO: throw error if length over 32bits
                var l = this.data.topic.length;
                for (var i = 0; i < l; ++i)
                    this.data.topic[i].filterFlag = Math.pow(2, i);
                var l = this.data.technology.length;
                for (var i = 0; i < l; ++i)
                    this.data.technology[i].filterFlag = Math.pow(2, i);
                var l = this.data.influence.length;
                for (var i = 0; i < l; ++i)
                    this.data.influence[i].filterFlag = Math.pow(2, i);

                //create the filter mask for each category
                var l = this.data.best_practice.length;
                for (var i = 0; i < l; ++i) {
                    var bp = this.data.best_practice[i];

                    bp.termtimeEndMask = 0;
                    bp.termtimeBeginMask = 0;

                    if (bp.budget < 500000)
                        bp.budgetMask = 1;
                    else if (bp.budget < 1000000)
                        bp.budgetMask = 2;
                    else if (bp.budget < 50000000)
                        bp.budgetMask = 4;
                    else
                        bp.budgetMask = 8;

                    bp.topicMask = 0;
                    var m = bp.topics.length;
                    for (var j = 0; j < m; ++j)
                        bp.topicMask |= bp.topics[j].filterFlag;

                    bp.technologyMask = 0;
                    var m = bp.technologies.length;
                    for (var j = 0; j < m; ++j)
                        bp.technologyMask |= bp.technologies[j].filterFlag;

                    bp.influenceMask = 0;
                    var m = bp.influences.length;
                    for (var j = 0; j < m; ++j)
                        bp.influenceMask |= bp.influences[j].filterFlag;
                }
            };

            DataManager.prototype.resolveMatchings = function (matchings, equalField, targetField, value) {
                var res = [];

                var l = matchings.length;
                for (var i = 0; i < l; ++i) {
                    var matching = matchings[i];
                    if (matching[equalField] == value)
                        res.push(matching[targetField]);
                }
                return res;
            };

            DataManager.prototype.sortOnOrder = function (a, b) {
                return a.order - b.order;
            };

            DataManager.prototype.getPageByKey = function (key) {
                var l = this.data.page.length;
                for (var i = 0; i < l; ++i) {
                    if (this.data.page[i].key == key)
                        return this.data.page[i];
                }
            };
            DataManager.prototype.label = function (key) {
                var lab = this._labels[key];
                if (lab)
                    return lab;
                return "";
            };
            return DataManager;
        })(engage.model.BaseDataManager);
        model.DataManager = DataManager;
    })(engage.model || (engage.model = {}));
    var model = engage.model;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (model) {
        var FilterHandler = (function () {
            function FilterHandler(app) {
                this.app = app;
                this.onFilterApplied = new e5.core.Signal();
                this.topic = 0;
                this.technology = 0;
                this.influence = 0;
                this.budget = 0;
                this.search = "";
                this._filterProperties = [
                    "topic",
                    "technology",
                    "influence",
                    "budget",
                    "search"];
                e5.core.Player.setEnabled(true);
                e5.core.Player.onTick.add(this.checkForFilterChange, this);

                var l = this._filterProperties.length;
                for (var i = 0; i < l; ++i) {
                    var property = this._filterProperties[i];
                    this["_" + property] = this[property];
                }
            }
            FilterHandler.prototype.apply = function () {
                var best_practices = this.app.manager.data.best_practice;
                var l = best_practices.length;

                var st = this.search.toLowerCase();

                var filterCount = 0;

                for (var i = 0; i < l; ++i) {
                    var bp = best_practices[i];

                    //true means that the marker is visible
                    var isFiltered = true;
                    if (isFiltered && this.topic)
                        isFiltered = (bp.topicMask & this.topic) == this.topic;
                    if (isFiltered && this.technology)
                        isFiltered = (bp.technologyMask & this.technology) == this.technology;
                    if (isFiltered && this.influence)
                        isFiltered = (bp.influenceMask & this.influence) == this.influence;
                    if (isFiltered && this.budget)
                        isFiltered = (bp.budgetMask & this.budget) > 0;
                    if (isFiltered && this.search)
                        isFiltered = bp.searchString.indexOf(st) >= 0;

                    if (isFiltered)
                        filterCount++;

                    var m = bp.filters.length;
                    for (var j = 0; j < m; ++j)
                        bp.filters[j].setFiltered(isFiltered);
                }

                //if no bestPractice results, set/unset the no_filter_results class on the project list
                $("body").toggleClass("no_filter_results", filterCount == 0);

                this.onFilterApplied.dispatch();
            };

            FilterHandler.prototype.toggleFilter = function (filterPropery, filterFlag) {
                if (this[filterPropery] & filterFlag)
                    this.unsetFilter(filterPropery, filterFlag);
                else
                    this.setFilter(filterPropery, filterFlag);
            };

            FilterHandler.prototype.clearFilterProperty = function (filterPropery) {
                this[filterPropery] = 0;
            };

            FilterHandler.prototype.setFilter = function (filterPropery, filterFlag) {
                this[filterPropery] |= filterFlag;
            };

            FilterHandler.prototype.unsetFilter = function (filterPropery, filterFlag) {
                this[filterPropery] -= filterFlag;
            };

            FilterHandler.prototype.checkForFilterChange = function () {
                var changed = false;
                var l = this._filterProperties.length;
                for (var i = 0; i < l; ++i) {
                    var property = this._filterProperties[i];
                    if (this["_" + property] != this[property])
                        changed = true;
                    this["_" + property] = this[property];
                }
                if (changed)
                    this.apply();
            };
            return FilterHandler;
        })();
        model.FilterHandler = FilterHandler;
    })(engage.model || (engage.model = {}));
    var model = engage.model;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var LineHandler = (function () {
            function LineHandler(app, wrapper) {
                this.app = app;
                this.wrapper = wrapper;
                this._visible = false;
                this._active = [];
                this._buffer = [];
                for (var i = 0; i < 5; ++i) {
                    var line = $("<div class='line'></div>");
                    line.css("transition", "height 0.4s");
                    this.wrapper.append(line);
                    this._buffer.push(line);
                }
            }
            LineHandler.prototype.drawSingle = function (start, end) {
                //TODO: try to skip this clearing step
                this.clear();

                var st = start.getAnchor();
                var en = end.getAnchor();
                this.drawLine(st.x, st.y, en.x, en.y, start.getAnchorRadius(), end.getAnchorRadius());
            };

            LineHandler.prototype.drawMulti = function (startX, startY, endAnchors, offsetStart) {
                if (typeof offsetStart === "undefined") { offsetStart = 0; }
                //TODO: try to skip this clearing step
                this.clear();

                var l = endAnchors.length;
                for (var i = 0; i < l; ++i) {
                    var end = endAnchors[i].getAnchor();
                    this.drawLine(startX, startY, end.x, end.y, offsetStart, endAnchors[i].getAnchorRadius());
                }
            };

            LineHandler.prototype.drawLine = function (startX, startY, endX, endY, offsetStart, offsetEnd) {
                if (typeof offsetStart === "undefined") { offsetStart = 0; }
                if (typeof offsetEnd === "undefined") { offsetEnd = 0; }
                if (endX < 0 || startX < 0 || endX > this.wrapper.width() || startX > this.wrapper.width())
                    return;

                //set the filter list opaque if the endPosition overlays it
                if (this.app.filterList) {
                    var maxX = this.app.filterList.wrapper.width() - (this.app.filterList.filterItem.width() + 15);
                    var minY = this.app.filterList.filterItem.height() + 25;

                    //clamp, otherwise the filter_list will be opaque by elements in the project_list too
                    //it should handle only anchor-endings on the map (from any where to the map)
                    minY = e5.math.Calc.clamp(minY, 0, this.app.filterList.wrapper.height());
                    if (endX > maxX && endY < minY)
                        this.app.filterList.opaque(true);
                }

                var dx = endX - startX;
                var dy = endY - startY;
                var dist = Math.sqrt(dx * dx + dy * dy);

                if (offsetEnd || offsetStart) {
                    if (offsetStart) {
                        var sc = offsetStart / dist;
                        startX += dx * sc;
                        startY += dy * sc;
                    }
                    if (offsetEnd) {
                        var sc = offsetEnd / dist;
                        endX -= dx * sc;
                        endY -= dy * sc;
                    }
                    dx = endX - startX;
                    dy = endY - startY;
                    dist = Math.sqrt(dx * dx + dy * dy);
                }

                var theta = Math.atan2(-dy, dx);
                var angle = theta * 180 / Math.PI;
                angle = theta * 180 / Math.PI;
                angle = (360 - angle % 360) - 90;

                var line = this.retrieveLine();
                line.css({
                    height: dist + "px",
                    transform: "translate(" + Math.round(startX) + "px, " + Math.round(startY) + "px) rotate(" + angle + "deg)"
                });
            };

            LineHandler.prototype.retrieveLine = function () {
                var line;
                if (this._buffer.length > 0)
                    line = this._buffer.shift();
                else {
                    line = $("<div class='line'></div>");
                    line.css("transition", "height 0.4s");
                    this.wrapper.append(line);
                }

                line.removeClass("buffered");

                this._active.push(line);
                return line;
            };

            LineHandler.prototype.clear = function () {
                if (this.app.filterList)
                    this.app.filterList.opaque(false);
                var l = this._active.length;
                for (var i = 0; i < l; ++i) {
                    var line = this._active[i];
                    line.css("height", "0px");
                    line.addClass("buffered");
                    this._buffer.push(line);
                }
                this._active.splice(0, l);
            };
            return LineHandler;
        })();
        map.LineHandler = LineHandler;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var MapElement = (function (_super) {
            __extends(MapElement, _super);
            function MapElement(resource) {
                _super.call(this, resource);
            }
            MapElement.prototype.create = function () {
                this.element = $("<div class='map'></div>");
                this.element.addClass("e5_slideshow_media");
                this.contentWidth = 600;
                this.contentHeight = 400;
                this.element.css("max-height", "100%");
                this.element.width(this.contentWidth);
                this.element.height(this.contentHeight);

                this.map = new engage.map.MiniMap(this.element);
                this.map.handleClick = false;
                this.map.centerPosition(true);
                this.map.map.scrollWheelZoom.disable();
                this.map.map.dragging.disable();

                if (this.resource.info) {
                    var info = this.resource.info;
                    this.map.setPosition(info.latitude, info.longitude, true);
                } else
                    console.log("NO INFO GIVEN");

                this.onReady.dispatch();
            };

            MapElement.prototype.resize = function () {
                this.map.resize();
            };

            MapElement.prototype.dispose = function () {
                this.map.dispose();
                this.map = null;
                _super.prototype.dispose.call(this);
            };
            return MapElement;
        })(e5.ui.MediaElement);
        map.MapElement = MapElement;
        e5.ui.MediaFactory.addClass("map", engage.map.MapElement);
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var MapMarker = (function () {
            function MapMarker(app, map, data, layer, position) {
                this.app = app;
                this.map = map;
                this.data = data;
                this.layer = layer;
                this.position = position;
                this._visible = true;
                this._filtered = false;
                this._hovered = false;
                this._open = false;
                if (!MapMarker._iconURLsResolved) {
                    MapMarker._iconSettingDefault.iconUrl = engage.model.Ressource.ASSET_PATH + "/code-marker-icon.png";
                    MapMarker._iconSettingOpen.iconUrl = engage.model.Ressource.ASSET_PATH + "/code-marker-icon-open.png";
                    MapMarker._iconSettingEngageDefault.iconUrl = engage.model.Ressource.ASSET_PATH + "/code-marker-engage.png";
                    MapMarker._iconSettingEngageOpen.iconUrl = engage.model.Ressource.ASSET_PATH + "/code-marker-engage-open.png";
                    MapMarker._iconURLsResolved = true;
                }

                this.data.marker = this;
                this.data.filters.push(this);

                this.init();
            }
            MapMarker.prototype.init = function () {
                var _this = this;
                this._iconDefault = new L.Icon(engage.map.MapMarker._iconSettingDefault);
                this._iconOpen = new L.Icon(engage.map.MapMarker._iconSettingOpen);

                //TODO: basic setup
                this.marker = new L.Marker(this.position);
                this.marker.data = this.data;

                if (this.marker.data.is_engage == 1) {
                    this._iconDefault = new L.Icon(engage.map.MapMarker._iconSettingEngageDefault);
                    this._iconOpen = new L.Icon(engage.map.MapMarker._iconSettingEngageOpen);
                } else {
                    this._iconDefault = new L.Icon(engage.map.MapMarker._iconSettingDefault);
                    this._iconOpen = new L.Icon(engage.map.MapMarker._iconSettingOpen);
                }

                //this.marker.bindPopup("<b>"+this.data.title+"</b>", { offset: new L.Point(12, 0) });
                this.marker.setIcon(this._iconDefault);
                this.marker.on("mouseover", function (evt) {
                    return _this.handleMouseOver(evt);
                });
                this.marker.on("mouseout", function (evt) {
                    return _this.handleMouseOut(evt);
                });
                this.marker.on("click", function (evt) {
                    return _this.handleClick(evt);
                });

                //put it on the layer
                this.setFiltered(true);
            };

            MapMarker.prototype.handleMouseOver = function (evt) {
                this.setHovered(true);

                //resort project list here
                this.app.projectList.scrollIntoView(this.data.listItem);

                //its resortet -> draw the line
                this.app.lineHandler.drawSingle(this, this.data.listItem);
            };

            MapMarker.prototype.handleClick = function (evt) {
                this.app.projectPreview.open(this.data);
            };

            MapMarker.prototype.handleMouseOut = function (evt) {
                this.app.lineHandler.clear();
                this.setHovered(false);
            };

            MapMarker.prototype.getAnchor = function () {
                var visibleOne = this.layer.getVisibleParent(this.marker);
                var pixPos = this.map.latLngToContainerPoint(visibleOne.getLatLng());
                pixPos.x += 1;
                pixPos.y += 5;
                return pixPos;
            };

            MapMarker.prototype.getAnchorRadius = function () {
                return this.isClustered() ? 25 : 0;
            };

            MapMarker.prototype.isClustered = function () {
                return this.layer.getVisibleParent(this.marker) !== this.marker;
            };

            MapMarker.prototype.setVisible = function (value) {
                if (this._visible == value)
                    return;
                this._visible = value;

                this.data.inMapBounds = this._visible;
                this.data.listItem.visual.toggleClass("out_of_view", !this._visible);
            };

            MapMarker.prototype.getVisible = function () {
                return this._visible;
            };

            MapMarker.prototype.setOpen = function (value) {
                if (this._open == value)
                    return;
                this._open = value;

                if (this._open)
                    this.marker.setIcon(this._iconOpen);
                else
                    this.marker.setIcon(this._iconDefault);
            };

            MapMarker.prototype.getOpen = function () {
                return this._open;
            };

            MapMarker.prototype.setFiltered = function (value) {
                if (this._filtered == value)
                    return;
                this._filtered = value;

                if (this._filtered)
                    this.layer.addLayer(this.marker);
                else
                    this.layer.removeLayer(this.marker);
                this.data.listItem.setFiltered(this._filtered);
            };

            MapMarker.prototype.getFiltered = function () {
                return this._filtered;
            };

            MapMarker.prototype.setHovered = function (value) {
                if (this._hovered == value)
                    return;
                this._hovered = value;
                this.data.hovered = this._hovered;
            };

            MapMarker.prototype.getHovered = function () {
                return this._hovered;
            };
            MapMarker._iconSettingDefault = {
                iconUrl: engage.model.Ressource.ASSET_PATH + "/code-marker-icon.png",
                className: "marker_icon",
                iconSize: new L.Point(20, 28),
                iconAnchor: new L.Point(9, 23)
            };

            MapMarker._iconSettingOpen = {
                iconUrl: engage.model.Ressource.ASSET_PATH + "/code-marker-icon-open.png",
                className: "marker_icon",
                iconSize: new L.Point(20, 28),
                iconAnchor: new L.Point(9, 23)
            };

            MapMarker._iconSettingEngageDefault = {
                iconUrl: engage.model.Ressource.ASSET_PATH + "/code-marker-engage.png",
                className: "marker_icon",
                iconSize: new L.Point(30, 45),
                iconAnchor: new L.Point(14, 36)
            };

            MapMarker._iconSettingEngageOpen = {
                iconUrl: engage.model.Ressource.ASSET_PATH + "/code-marker-engage-open.png",
                className: "marker_icon",
                iconSize: new L.Point(30, 45),
                iconAnchor: new L.Point(14, 36)
            };

            MapMarker._iconURLsResolved = false;
            return MapMarker;
        })();
        map.MapMarker = MapMarker;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var MapHandler = (function () {
            function MapHandler(app, wrapper) {
                this.app = app;
                this.wrapper = wrapper;
                this._markers = [];
                this.create();
            }
            MapHandler.prototype.create = function () {
                var _this = this;
                //a position in germany (sommerloch)
                var initialPosition = new L.LatLng(51.53534, 7.760203);

                var map = $("<div class='map'></div>");
                this.wrapper.append(map);

                //create the map
                this._map = new L.Map(map[0]);
                this._map.setView(initialPosition, 4);
                this._map.scrollWheelZoom.disable();
                this._map.touchZoom.disable();
                this._map.dragging.enabled();
                this._map.zoomControl.removeFrom(this._map);

                //this._map.zoomControl.setPosition("topright");
                //this._map["zoomSlider"].setPosition("topright");
                //set the max bounds. it will fade back into the bounds
                //if the user pans or zooms out of the given bounds
                //var maxBounds = new L.LatLngBounds(
                //    new L.LatLng(6.710991655433229, -58.65624999999999),
                //    new L.LatLng(75.21198251594369, 108.57812499999999));
                var maxBounds = new L.LatLngBounds(new L.LatLng(20.138470312451155, -97.20703125), new L.LatLng(72.86793049861396, 111.97265625));
                this._map.setMaxBounds(maxBounds);

                //add the map layer
                var tileLayerAttr = {
                    attribution: ' Tiles: &copy; Esri arcgisonline.com',
                    minZoom: 4,
                    maxZoom: 10
                };

                this._baseLayer = new L.TileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', tileLayerAttr);
                this._map.addLayer(this._baseLayer);

                //add a layer holding all markers
                //to get the clustering effect, just replaced LayerGroup with MarkerClusterGroup
                this._markerLayer = new L.MarkerClusterGroup({
                    iconCreateFunction: function (cluster) {
                        return _this.createClusterIcon(cluster);
                    },
                    spiderfyOnMaxZoom: true,
                    showCoverageOnHover: false,
                    zoomToBoundsOnClick: true,
                    maxClusterRadius: 35
                });

                var th = this;
                this._markerLayer.on("clustermouseover", function (e) {
                    var cluster = e.layer;
                    th.handleHoverCluster(cluster, true);
                });

                this._markerLayer.on("clustermouseout", function (e) {
                    var cluster = e.layer;
                    th.handleHoverCluster(cluster, false);
                });

                //create some markers to test
                //positions them randomly on the current map-clipping
                var best_practices = this.app.manager.data.best_practice;
                var l = best_practices.length;
                for (var i = 0; i < l; ++i) {
                    var bp = best_practices[i];
                    var markerPos = new L.LatLng(bp.latitude, bp.longitude);
                    bp.latitude = markerPos.lat;
                    bp.longitude = markerPos.lng;

                    var mapMarker = new engage.map.MapMarker(this.app, this._map, bp, this._markerLayer, markerPos);
                    this._markers.push(mapMarker);
                }

                //finally put the marker-layer on top of the map
                this._map.addLayer(this._markerLayer);

                this.refreshItemOrder();

                this._map.on("zoomend", function () {
                    return _this.refreshItemOrder();
                });

                //why not on resize? it crashes sometimes!
                this._map.on("moveend zoomend", function () {
                    return _this.handleMapChange();
                });

                this._zoomSlider = new engage.map.ZoomSlider(this._map, this.wrapper);
                //$("body").keyup(() => this.printBounds());
            };

            MapHandler.prototype.getMap = function () {
                return this._map;
            };

            MapHandler.prototype.printBounds = function () {
                var bnds = this._map.getBounds();
                var southWest = bnds.getSouthWest();
                var northEast = bnds.getNorthEast();
                var str = "new L.LatLngBounds(";
                str += "new L.LatLng(" + southWest.lat + "," + southWest.lng + "),";
                str += "new L.LatLng(" + northEast.lat + "," + northEast.lng + "));";
                console.log(str);
            };

            MapHandler.prototype.refreshItemOrder = function () {
                var zoom = this._map.getZoom();
                var clusters = this._markerLayer["_topClusterLevel"];
                var storage = [];
                this.walkRecursively(clusters, storage, zoom);

                //reset itemOrder the longitude value
                var best_practices = this.app.manager.data.best_practice;
                var l = best_practices.length;
                for (var i = 0; i < l; ++i) {
                    var bp = best_practices[i];
                    bp.itemOrder = bp.longitude;
                }

                //overwrite clustered itemOrder with longitude
                //of the cluster NOT the marker itself
                var l = storage.length;
                for (var i = 0; i < l; ++i) {
                    var markerInCluster = storage[i].getAllChildMarkers();
                    var m = markerInCluster.length;
                    var latLng = storage[i].getLatLng();
                    for (var j = 0; j < m; ++j) {
                        var marker = markerInCluster[j];
                        var bp = marker.data;
                        bp.itemOrder = latLng.lng;
                    }
                }
            };

            MapHandler.prototype.moveTo = function (best_practice) {
                this._map.panTo(best_practice.marker.position, { animate: false });
            };

            MapHandler.prototype.walkRecursively = function (target, storage, zoom) {
                if (target._zoom > zoom)
                    return;
                if (target._zoom == zoom)
                    storage.push(target);
                else
                    for (var i = 0; i < target._childClusters.length; ++i)
                        this.walkRecursively(target._childClusters[i], storage, zoom);
            };

            MapHandler.prototype.handleMapChange = function () {
                this.app.lineHandler.clear();

                var bnds = this._map.getBounds();
                var l = this._markers.length;
                for (var i = 0; i < l; ++i) {
                    var marker = this._markers[i];
                    marker.setVisible(bnds.contains(marker.position));
                }

                //resort project list here
                if (this.app.projectList)
                    this.app.projectList.sort();
            };

            MapHandler.prototype.handleHoverCluster = function (cluster, hovered) {
                var markers = cluster.getAllChildMarkers();
                var l = markers.length;
                var anchorEnds = [];

                for (var i = 0; i < l; ++i) {
                    var leafletMarker = markers[i];
                    var marker = leafletMarker.data.marker;
                    marker.setHovered(hovered);
                    anchorEnds.push(marker.data.listItem);
                }

                //resort here because the hovered property
                //(see: top) could be important for sorting-order
                this.app.projectList.sort();

                if (hovered) {
                    //get the most left item in the project list
                    //and scroll to it
                    var mostLeftData = null;
                    var idx = Number.MAX_VALUE;
                    for (var i = 0; i < l; ++i) {
                        var leafletMarker = markers[i];
                        var marker = leafletMarker.data.marker;
                        var cmp = marker.data.listItem.index();
                        if (cmp < idx) {
                            idx = cmp;
                            mostLeftData = marker.data;
                        }
                    }
                    if (mostLeftData)
                        this.app.projectList.scrollIntoLeft(mostLeftData.listItem);

                    //finally draw all lines from the given cluster
                    //to each item in project list
                    var geoPos = cluster.getLatLng();
                    var pixPos = this._map.latLngToContainerPoint(geoPos);
                    this.app.lineHandler.drawMulti(pixPos.x, pixPos.y, anchorEnds, 25);
                } else
                    this.app.lineHandler.clear();
            };

            MapHandler.prototype.resize = function () {
                this._map.invalidateSize();
            };

            //SOURCE: http://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-custom.html
            MapHandler.prototype.getRandomLatLng = function (map) {
                var bounds = map.getBounds(), southWest = bounds.getSouthWest(), northEast = bounds.getNorthEast(), lngSpan = northEast.lng - southWest.lng, latSpan = northEast.lat - southWest.lat;
                console.log("ne", northEast.lat, northEast.lng);
                console.log("se", southWest.lat, southWest.lng);

                return new L.LatLng(southWest.lat + latSpan * (Math.random() * 0.9 + 0.1), southWest.lng + lngSpan * (Math.random() * 0.6 + 0.4));
            };

            MapHandler.prototype.createClusterIcon = function (cluster) {
                var count = cluster.getChildCount();
                var markersInCluster = cluster.getAllChildMarkers();
                var countLabel = '<div class="count">' + count + '</div>';
                var icon = new L.DivIcon({ html: '<div class="marker_cluster">' + countLabel + '</div>' });
                return icon;
            };
            return MapHandler;
        })();
        map.MapHandler = MapHandler;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var FilterList = (function () {
            function FilterList(app, wrapper) {
                var _this = this;
                this.app = app;
                this.wrapper = wrapper;
                this._opaque = false;
                this._search = null;
                this._clear = null;
                this.create();

                var self = this;
                $(".uncheck_btn", this.wrapper).click(function () {
                    self.handleClickUncheck($(this));
                });
                $(".filter_item", this.wrapper).click(function () {
                    self.handleClickFilterItem($(this));
                });
                $(".filter_header", this.wrapper).click(function () {
                    self.handleClickHeader($(this));
                });
                $(".filter_expander", this.wrapper).click(function () {
                    self.handleClickExpander($(this));
                });
                this._clear.click(function () {
                    return _this.handleClickClear();
                });
                this._search.bind("change keyup", function () {
                    return _this.handleChangeSearch();
                });
                this.app.filterHandler.onFilterApplied.add(this.handleFilterApplied, this);
                this.handleFilterApplied();
                $(window).bind("resize", function () {
                    return _this.handleResize();
                });
                this.handleResize();
            }
            FilterList.prototype.handleResize = function () {
                $(".e5map .filter_list").css("max-height", ($(".main_container").height() - $(".filter_list").position().top) + "px");
            };

            FilterList.prototype.handleChangeSearch = function () {
                this.app.filterHandler.search = this._search.val();
            };

            FilterList.prototype.handleClickUncheck = function (uncheck_btn) {
                //TODO
            };

            FilterList.prototype.handleClickClear = function () {
                this._search.val("");
                this.app.filterHandler.search = "";
            };

            FilterList.prototype.handleClickFilterItem = function (filter_item) {
                var filterProperty = filter_item.attr("data-category");
                var filterFlag = parseInt(filter_item.attr("data-flag"));
                this.app.filterHandler.toggleFilter(filterProperty, filterFlag);
            };

            FilterList.prototype.handleClickHeader = function (filter_header) {
                var main_container = filter_header.parents(".main_container");
                main_container.toggleClass("collapsed");
                this.app.mapHandler.resize();
            };

            FilterList.prototype.handleClickExpander = function (filter_expander) {
                $(".filter", this.wrapper).toggleClass("collapsed");
            };

            FilterList.prototype.handleFilterApplied = function () {
                var filter = this.app.filterHandler;
                this._clear.toggleClass("visible", filter.search != "");
                $(".filter_item", this.wrapper).each(function () {
                    var item = $(this);
                    var filterProperty = item.attr("data-category");
                    var filterMask = filter[filterProperty];
                    var hasSelection = false;
                    var filterFlag = parseInt(item.attr("data-flag"));
                    if (filterMask & filterFlag) {
                        item.addClass("checked");
                        hasSelection = true;
                    } else
                        item.removeClass("checked");
                });
            };

            FilterList.prototype.create = function () {
                var m = this.app.manager;
                var l;

                //TODO put in title
                var uncheck_btn = "<div class='uncheck_btn'></div>";

                var res = "<div class='filter collapsed'>";
                res += "<div class='filter_expander'></div>";
                res += '<div class="search_container"><input class="search_box" placeholder="SEARCH..." maxlength ="30" /><div class="search_icon"></div><div class="clear_btn"></div></div>';
                res += "<div class='filter_header'>" + m.label("filter_title") + "</div>";
                res += "<div class='filter_list'>";

                //add main topics
                res += "<div class='filter_title topic'>" + m.label("filter_main_topic") + "</div>";
                var topics = m.data.topic;
                l = topics.length;
                for (var i = 0; i < l; ++i)
                    res += "<div class='filter_item' data-category='topic' data-flag='" + topics[i].filterFlag + "'>" + topics[i].title + "</div>";

                //add technologies
                res += "<div class='filter_title technology'>" + m.label("filter_technology") + "</div>";
                var technologies = m.data.technology;
                l = technologies.length;
                for (var i = 0; i < l; ++i)
                    res += "<div class='filter_item' data-category='technology' data-flag='" + technologies[i].filterFlag + "'>" + technologies[i].title + "</div>";

                //add influences
                res += "<div class='filter_title influence'>" + m.label("filter_influence") + "</div>";
                var influences = m.data.influence;
                l = influences.length;
                for (var i = 0; i < l; ++i)
                    res += "<div class='filter_item' data-category='influence' data-flag='" + influences[i].filterFlag + "'>" + influences[i].title + "</div>";

                //add budget
                //res += "<div class='filter_title'>" + m.label("filter_budget") + " " + postfix + "</div>";
                //res += "<div class='filter_item' data-flag='1' data-category='budget'>0 - 500.000</div>";
                //res += "<div class='filter_item' data-flag='2' data-category='budget'>500.00 - 1.000.000</div>";
                //res += "<div class='filter_item' data-flag='4' data-category='budget'>1.000.000 - 50.000.000</div>";
                //res += "<div class='filter_item' data-flag='8' data-category='budget'>more than 50.000.000</div>";
                res += "</div>"; //end filter_list

                res += "</div>"; //end filter

                var list = $(res);
                this.wrapper.append(list);

                this._clear = $(".clear_btn", this.wrapper);
                this._search = $(".search_box", this.wrapper);
                this.filterItem = $(".filter", this.wrapper);
            };

            FilterList.prototype.opaque = function (value) {
                if (arguments.length == 0)
                    return this._opaque;
                if (this._opaque == value)
                    return;
                this._opaque = value;
                if (this._opaque)
                    this.filterItem.addClass("opaque");
                else
                    this.filterItem.removeClass("opaque");
            };
            return FilterList;
        })();
        map.FilterList = FilterList;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var ProjectListItem = (function () {
            function ProjectListItem(app, wrapper, data) {
                var _this = this;
                this.app = app;
                this.wrapper = wrapper;
                this._filtered = true;
                this._hovered = false;
                this._open = false;
                this._data = data;
                this._data.filters.push(this);
                this._data.listItem = this;

                this.visual = $("<div class='bp_item'></div>");
                this.visual.data("best_practice", this._data);
                var background = $("<div class='bp_background'></div>");
                background.css("background-image", "url(" + this._data.previewImagePath + ")");
                this.visual.append(background);
                var title = $("<div class='title'>" + this._data.title + "<br/></div>");
                title.attr("data-sub-title", this._data.subTitle);
                background.append(title);

                this.wrapper.append(this.visual);

                this.visual.bind("mouseenter", function (evt) {
                    return _this.handleMouseOver(evt);
                });
                this.visual.bind("mouseleave", function (evt) {
                    return _this.handleMouseOut(evt);
                });
                this.visual.bind("click", function (evt) {
                    return _this.handleClick(evt);
                });
            }
            ProjectListItem.prototype.handleClick = function (evt) {
                if (!this._data.inMapBounds) {
                    this.app.mapHandler.moveTo(this._data);
                    this.app.lineHandler.drawSingle(this, this._data.marker);
                } else
                    this.app.projectPreview.open(this._data);
            };

            ProjectListItem.prototype.getAnchor = function () {
                var pos = this.visual.position();
                pos.left += this.visual.width() * 0.5;
                pos.top += this.app.mapHandler.wrapper.height();
                return new L.Point(pos.left, pos.top);
            };

            ProjectListItem.prototype.getAnchorRadius = function () {
                return 0;
            };

            ProjectListItem.prototype.index = function () {
                return this.visual.index();
            };

            ProjectListItem.prototype.setOpen = function (value) {
                if (this._open == value)
                    return;
                this._open = value;

                if (this._open)
                    this.visual.addClass("checked");
                else
                    this.visual.removeClass("checked");
            };

            ProjectListItem.prototype.getOpen = function () {
                return this._open;
            };

            ProjectListItem.prototype.setFiltered = function (value) {
                if (this._filtered == value)
                    return;
                this._filtered = value;

                if (this._filtered)
                    this.visual.removeClass("hidden");
                else
                    this.visual.addClass("hidden");
            };

            ProjectListItem.prototype.getFiltered = function () {
                return this._filtered;
            };

            ProjectListItem.prototype.handleMouseOver = function (evt) {
                if (this._hovered)
                    return;
                this._hovered = true;
                if (this._data.inMapBounds)
                    this.app.lineHandler.drawSingle(this, this._data.marker);
            };

            ProjectListItem.prototype.handleMouseOut = function (evt) {
                if (!this._hovered)
                    return;
                this._hovered = false;
                if (!this._data.inMapBounds)
                    return;
                this.app.lineHandler.clear();
            };
            return ProjectListItem;
        })();
        map.ProjectListItem = ProjectListItem;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var ProjectList = (function () {
            function ProjectList(app, wrapper) {
                var _this = this;
                this.app = app;
                this.wrapper = wrapper;
                this.onChangeItemPositions = new e5.core.Signal();
                this._scrollIntoPaddingLeft = 15;
                this._scrollIntoPaddingRight = 15;
                this._lockSorting = false;
                this._missedSorting = false;
                this._sortEnabled = true;
                this.create();
                this.wrapper.bind("mouseenter", function () {
                    return _this.handleMouseEnterWrapper();
                });
                this.wrapper.bind("mouseleave", function () {
                    return _this.handleMouseLeaveWrapper();
                });
                var self = this;
                $(".list_expander", this.wrapper).click(function () {
                    self.handleClickExpander($(this));
                });
                this.content.scroll(function () {
                    return _this.scrollChange();
                });
                this._prevBtn.click(function () {
                    return _this.handleClickPrev();
                });
                this._nextBtn.click(function () {
                    return _this.handleClickNext();
                });
                this.app.filterHandler.onFilterApplied.add(this.scrollChange, this);
            }
            ProjectList.prototype.create = function () {
                //for engage-app
                this.wrapper.addClass("collapsed");

                this.content = $("<div class='project_list'></div>");
                this.wrapper.append(this.content);
                var shadow = $("<div class='shadow'></div>");
                this.wrapper.append(shadow);
                var list_expander = $("<div class='list_expander'></div>");
                this.wrapper.append(list_expander);
                this._prevBtn = $("<div class='navi_btn prev'></div>");
                this.wrapper.append(this._prevBtn);
                this._nextBtn = $("<div class='navi_btn next'></div>");
                this.wrapper.append(this._nextBtn);

                var best_practices = this.app.manager.data.best_practice;
                var l = best_practices.length;
                for (var i = 0; i < l; ++i) {
                    var bp = best_practices[i];
                    var item = new engage.map.ProjectListItem(this.app, this.content, bp);
                }
            };

            ProjectList.prototype.handleClickExpander = function (list_expander) {
                this.wrapper.toggleClass("collapsed");
            };

            ProjectList.prototype.handleClickPrev = function () {
                TweenMax.to(this, 0.5, { setScrollLeft: this.getScrollLeft() - (this.content.width() - 300) });
            };

            ProjectList.prototype.handleClickNext = function () {
                TweenMax.to(this, 0.5, { setScrollLeft: this.getScrollLeft() + (this.content.width() - 300) });
            };

            ProjectList.prototype.hasOverflowLeft = function () {
                return this.getScrollLeft() > 0;
            };

            ProjectList.prototype.hasOverflowRight = function () {
                var maxScrollLeft = this.content[0].scrollWidth - this.content[0].clientWidth;
                return this.getScrollLeft() < maxScrollLeft;
            };

            ProjectList.prototype.scrollChange = function () {
                this._prevBtn.toggleClass("hidden", !this.hasOverflowLeft());
                this._nextBtn.toggleClass("hidden", !this.hasOverflowRight());
                this.onChangeItemPositions.dispatch();
            };

            ProjectList.prototype.handleMouseEnterWrapper = function () {
                this._lockSorting = true;
            };

            ProjectList.prototype.handleMouseLeaveWrapper = function () {
                if (!this._sortEnabled)
                    return;
                this._lockSorting = false;
                if (this._missedSorting) {
                    this.sort();
                    this.scrollToFirstVisibleElement();
                }
                this._missedSorting = false;
            };

            ProjectList.prototype.scrollIntoLeft = function (item) {
                var xPos = item.visual.position().left;
                xPos += this.content.scrollLeft() - this._scrollIntoPaddingLeft;
                this.setScrollLeft(xPos);
            };

            ProjectList.prototype.scrollIntoRight = function (item) {
                var xPos = item.visual.position().left;
                xPos += this.content.scrollLeft() - (this.content.width() - item.visual.width() + this._scrollIntoPaddingRight);
                this.setScrollLeft(xPos);
            };

            ProjectList.prototype.scrollIntoView = function (item) {
                var xPos = item.visual.position().left;
                if (xPos < 0)
                    this.scrollIntoLeft(item);
                else if (xPos > (this.content.width() - item.visual.width()))
                    this.scrollIntoRight(item);
                else
                    return;
            };

            ProjectList.prototype.scrollToFirstVisibleElement = function () {
                this.setScrollLeft(0);
            };

            ProjectList.prototype.getScrollLeft = function () {
                return this.content.scrollLeft();
            };

            ProjectList.prototype.setScrollLeft = function (value) {
                this.content.scrollLeft(value);
                this.scrollChange();
            };

            ProjectList.prototype.getSortEnabled = function () {
                return this._sortEnabled;
            };

            ProjectList.prototype.setSortEnabled = function (value) {
                if (this._sortEnabled == value)
                    return;
                this._sortEnabled = value;

                //just resort
                if (!this._sortEnabled)
                    $(".bp_item", this.content).sortElements(this.sortByName);
                else
                    $(".bp_item", this.content).sortElements(this.sortItems);
            };

            ProjectList.prototype.sort = function () {
                if (this._lockSorting) {
                    this._missedSorting = true;
                    return;
                }
                $(".bp_item", this.content).sortElements(this.sortItems);
                this.scrollChange();
            };

            ProjectList.prototype.sortItems = function (a, b) {
                var bpA = $(a).data("best_practice");
                var bpB = $(b).data("best_practice");

                if (bpA.inMapBounds != bpB.inMapBounds)
                    return bpA.inMapBounds ? -1 : 1;
                if (bpA.itemOrder != bpB.itemOrder)
                    return bpA.itemOrder - bpB.itemOrder;
                return bpA.title.localeCompare(bpB.title);
            };

            ProjectList.prototype.sortByName = function (a, b) {
                var bpA = $(a).data("best_practice");
                var bpB = $(b).data("best_practice");
                return bpA.title.localeCompare(bpB.title);
            };
            return ProjectList;
        })();
        map.ProjectList = ProjectList;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var MiniMap = (function () {
            function MiniMap(wrapper) {
                this.wrapper = wrapper;
                this.onChange = new e5.core.Signal();
                this.handleClick = true;
                this._centerPosition = false;
                this.create();
            }
            MiniMap.prototype.create = function () {
                var _this = this;
                //a position in germany (sommerloch)
                this.position = new L.LatLng(49.87644, 7.760203);

                var map = $("<div class='map'></div>");
                this.wrapper.append(map);

                //create the map
                this.map = new L.Map(map[0]);
                this.map.setView(this.position, 5);
                this.map.zoomControl.setPosition("topright");

                //add the map layer
                var tileLayerAttr = {
                    minZoom: 2,
                    maxZoom: 14
                };

                this._baseLayer = new L.TileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', tileLayerAttr);
                this.map.addLayer(this._baseLayer);

                //add a layer holding all markers
                this._markerLayer = new L.LayerGroup();

                this._marker = new L.Marker(this.position);

                var iconSetting = {};
                iconSetting.iconUrl = engage.model.Ressource.ASSET_PATH + "/code-marker-icon-open.png";
                iconSetting.iconSize = new L.Point(20, 28);
                iconSetting.className = "marker_icon";
                iconSetting.iconAnchor = new L.Point(9, 23);
                var markerIcon = new L.Icon(iconSetting);
                this._marker.setIcon(markerIcon);

                this._markerLayer.addLayer(this._marker);

                //finally put the marker-layer on top of the map
                this.map.addLayer(this._markerLayer);

                this.map.on("click", function (evt) {
                    return _this.handleClickMap(evt);
                });
            };

            MiniMap.prototype.handleClickMap = function (evt) {
                if (!this.handleClick)
                    return;
                this.position = evt.latlng;
                this._marker.setLatLng(this.position);
                this.onChange.dispatch();
            };

            MiniMap.prototype.handleMapResizeZoomEnd = function () {
                this.map.panTo(this.position);
            };

            MiniMap.prototype.setPosition = function (lat, lng, panTo) {
                if (typeof panTo === "undefined") { panTo = false; }
                this.position = new L.LatLng(lat, lng);
                this._marker.setLatLng(this.position);
                if (panTo)
                    this.map.panTo(this.position);
            };

            MiniMap.prototype.resize = function () {
                this.map.invalidateSize(false);
                this._baseLayer.redraw();
                //TODO: leaflet invalidate renderer
                //            console.log(this.map);
                //            var z = this.map.getZoom();
                //            this.map.setZoom(++z);
                //            this.map.setZoom(--z);
            };

            MiniMap.prototype.centerPosition = function (value) {
                var _this = this;
                if (arguments.length == 0)
                    return this._centerPosition;
                if (this._centerPosition == value)
                    return;
                this._centerPosition = value;
                if (this._centerPosition)
                    this.map.on("resize zoomend", function () {
                        return _this.handleMapResizeZoomEnd();
                    });
                else
                    this.map.off("resize zoomend");
            };

            MiniMap.prototype.dispose = function () {
                this.wrapper.remove();
                this.onChange.dispose();
                this.wrapper = null;
                this.onChange = null;
                this.position = null;
                this.map = null;
                this._baseLayer = null;
                this._markerLayer = null;
                this._marker = null;
            };
            return MiniMap;
        })();
        map.MiniMap = MiniMap;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var ZoomSlider = (function (_super) {
            __extends(ZoomSlider, _super);
            function ZoomSlider(map, wrapper) {
                var _this = this;
                _super.call(this, wrapper, map.getZoom(), map.getMinZoom(), map.getMaxZoom());
                this.setInverted(true);
                this._map = map;
                this._map.on("zoomend", function () {
                    return _this.handleZoomEndMap();
                });
                this.onChange.add(this.handleChangeSlider, this);
            }
            ZoomSlider.prototype.handleChangeSlider = function () {
                this._map.setZoom(Math.round(this.getValue()));
            };

            ZoomSlider.prototype.handleZoomEndMap = function () {
                this.setValue(this._map.getZoom());
            };
            return ZoomSlider;
        })(e5.ui.Slider);
        map.ZoomSlider = ZoomSlider;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (map) {
        var ProjectPreview = (function () {
            function ProjectPreview(app, wrapper) {
                var _this = this;
                this.app = app;
                this.wrapper = wrapper;
                this._descriptionProperties = [
                    "context_and_challenges",
                    "objectives",
                    "descriptive_details",
                    "results_and_prospects",
                    "implementation_modalities",
                    "financing_issues",
                    "factors_for_success",
                    "factors_with_local_context",
                    "points_monitored",
                    "conditions_for_transfer"];
                this._defaultDocumentTitle = "ENGAGE - Best Practice";
                this._data = null;
                this._isOpen = false;
                this.onPreviewOpen = new e5.core.Signal();
                this.wrapper.addClass("closed");
                this.create();

                this._history = new e5.control.History();
                this.handleHashChange();

                this._closeBtn.click(function () {
                    return _this.handleClickClose();
                });
                this._expandBtn.click(function () {
                    return _this.handleClickExpand();
                });
                this._fitzel.click(function () {
                    return _this.handleClickFitzel();
                });
                this._printBtn.click(function () {
                    return _this.handleClickPrint();
                });
                this._minimizeBtn.click(function () {
                    return _this.handleClickMinimize();
                });
                this._history.onHashChange.add(this.handleHashChange, this);
                this.app.projectList.onChangeItemPositions.add(this.handleChangeProjectList, this);
            }
            ProjectPreview.prototype.getIsOpen = function () {
                return this._isOpen;
            };

            ProjectPreview.prototype.getSlideshow = function () {
                return this._slideshow;
            };
            ProjectPreview.prototype.handleHashChange = function () {
                var hash = this._history.getHash();
                if (!hash || hash == "home") {
                    this.close();
                    return;
                }
                var sepIndex = hash.indexOf("/");
                var num = hash.substring(0, sepIndex);
                var bp = this.app.manager.data.best_practice.id(parseInt(num));
                if (bp)
                    this.open(bp);
            };

            ProjectPreview.prototype.handleClickMinimize = function () {
                this.wrapper.toggleClass("minimized");
                this._slideshow.resize();
            };

            ProjectPreview.prototype.handleClickPrint = function () {
                window.print();
            };

            ProjectPreview.prototype.handleChangeProjectList = function () {
                if (!this._isOpen)
                    return;
                this.updateFitzel();
            };

            ProjectPreview.prototype.updateFitzel = function () {
                if (!this._data)
                    return;

                var left = this._data.listItem.visual.offset().left;
                left -= this.app.projectList.content.offset().left;
                var hw = this._data.listItem.visual.width() * 0.5;
                left += hw - 25;

                var max = this.wrapper.width() - 120;
                var min = 10;
                left = e5.math.Calc.clamp(left, min, max);

                if (left == max) {
                    this._fitzel.removeClass("left");
                    this._fitzel.addClass("right");
                } else if (left == min) {
                    this._fitzel.removeClass("right");
                    this._fitzel.addClass("left");
                } else {
                    this._fitzel.removeClass("left");
                    this._fitzel.removeClass("right");
                }

                this._fitzel.css("left", left + "px");
            };

            ProjectPreview.prototype.handleClickFitzel = function () {
                this.app.projectList.scrollIntoView(this._data.listItem);
            };

            ProjectPreview.prototype.handleClickClose = function () {
                this.close();
            };

            ProjectPreview.prototype.handleClickExpand = function () {
                if (this.wrapper.hasClass("expanded"))
                    this.wrapper.removeClass("expanded");
                else
                    this.wrapper.addClass("expanded");
            };

            ProjectPreview.prototype.create = function () {
                //top
                this._topContent = $("<div class='top_content'></div>");
                this.wrapper.append(this._topContent);
                this._fitzel = $("<div class='fitzel'></div>");
                this._topContent.append(this._fitzel);
                this._closeBtn = $("<div class='btn close'></div>");
                this._topContent.append(this._closeBtn);
                this._minimizeBtn = $("<div class='btn minimize'></div>");
                this._topContent.append(this._minimizeBtn);
                this._printBtn = $("<div class='btn print'></div>");
                this._topContent.append(this._printBtn);

                //left
                this._leftContent = $("<div class='left_content'></div>");
                this.wrapper.append(this._leftContent);

                var slide = $("<div></div>");
                this._leftContent.append(slide);
                this._slideshow = new e5.ui.Slideshow(slide);

                //right
                this._rightContent = $("<div class='right_content'></div>");
                this.wrapper.append(this._rightContent);
                this._title = $("<div class='title'></div>");
                this._rightContent.append(this._title);
                this._summary = $("<div class='summary'></div>");
                this._rightContent.append(this._summary);

                //bottom
                this._bottomContent = $("<div class='bottom_content'></div>");
                this.wrapper.append(this._bottomContent);

                //bottom > footer
                this._footer = $("<div class='footer'></div>");
                this._bottomContent.append(this._footer);
                this._expandBtn = $("<div class='btn expand'></div>");
                this._footer.append(this._expandBtn);

                //bottom > description
                this._description = $("<div class='description'></div>");
                this._bottomContent.append(this._description);

                this._quick = $("<div class='quick'></div>");
                this._description.append(this._quick);

                this._longVersion = $("<div class='longversion'></div>");

                var l = this._descriptionProperties.length;
                for (var i = 0; i < l; ++i) {
                    var key = this._descriptionProperties[i];
                    var titleString = this.app.manager.label("description_" + key);
                    var title = $("<div class='title' data-key='" + key + "'></div>");
                    title.text(titleString);
                    this._longVersion.append(title);
                    var text = $("<div class='text' data-key='" + key + "'></div>");
                    this._longVersion.append(text);
                }
                this._description.append(this._longVersion);
            };

            ProjectPreview.prototype.updateDocumentTitle = function () {
                if (this._isOpen && this._data)
                    window.document.title = this._defaultDocumentTitle + " - " + this._data.title;
                else
                    window.document.title = this._defaultDocumentTitle;
            };

            ProjectPreview.prototype.close = function () {
                this.wrapper.addClass("closed");
                this.wrapper.removeClass("expanded");
                if (this._data) {
                    this._data.listItem.setOpen(false);
                    this._data.marker.setOpen(false);
                    this._data = null;
                }
                this._isOpen = false;
                this._slideshow.displayState("normal");

                this._history.setHash("");
                this.updateDocumentTitle();
            };

            ProjectPreview.prototype.open = function (bp, scrollInView) {
                if (typeof scrollInView === "undefined") { scrollInView = true; }
                //HASENFUSS
                scrollInView = false;

                var wasClosed = !this._isOpen;
                this._isOpen = true;
                bp.listItem.setOpen(true);
                bp.marker.setOpen(true);
                this.wrapper.removeClass("minimized");

                if (this._data == bp) {
                    if (scrollInView)
                        this.scrollIn();
                    return;
                }
                if (this._data) {
                    this._data.listItem.setOpen(false);
                    this._data.marker.setOpen(false);
                }
                this._data = bp;

                if (!this._data) {
                    this.close();
                    return;
                }

                this.updateDocumentTitle();
                this._history.setHash(this._data.id + "/");

                this.updateFitzel();

                this.wrapper.removeClass("closed");
                if (wasClosed)
                    this._slideshow.resize();

                var meds = this._data.media.slice(0);
                meds.unshift({ type: "map", info: { latitude: bp.latitude, longitude: bp.longitude } });
                this._slideshow.load(meds);

                this._title.text(bp.title);
                this._summary.html(bp.summary);

                if (scrollInView)
                    this.scrollIn();

                this.setDescription();
                this.onPreviewOpen.dispatch();
            };

            ProjectPreview.prototype.setDescription = function () {
                //create the html of the quick ("quick-info") container
                var q = "<h2>Facts</h2>";
                if (this._data.topics.length > 0) {
                    q += "<h3 class='title'>Topics</h3>";
                    var topics = this._data.topics;
                    var l = topics.length;
                    for (var i = 0; i < l; ++i)
                        q += "<div class='text'>" + topics[i].title + "</div>";
                }
                q += "<h3 class='title'>Country</h3>";
                q += "<div class='text'>" + this._data.country + "</div>";
                q += "<h3 class='title'>Location</h3>";
                q += "<div class='text'>" + this._data.location + "</div>";

                if (this._data.contacts.length > 0) {
                    q += "<h2>Contact details</h2>";
                    var l = this._data.contacts.length;
                    for (var i = 0; i < l; ++i) {
                        var contact = this._data.contacts[i];
                        q += "<h3 class='title'>Contact person</h3>";
                        q += "<div class='text'>" + contact.structure + "</div>";
                        q += "<div class='text'>" + contact.name + "</div>";
                        q += "<div class='text'>" + contact.street + " " + contact.house_number + "</div>";
                        q += "<div class='text'>" + contact.zip + " " + contact.city + "</div>";
                        q += "<div class='text'>" + contact.phone + "</div>";
                        q += "<a class='text' href='mailto:" + contact.mail + "'>" + contact.mail + "</a>";
                        var url = contact.web.indexOf("http") < 0 ? "http://" + contact.web : contact.web;
                        q += "<a class='text' href='" + url + "'>" + contact.web + "</a>";
                    }
                }
                this._quick.html(q);

                //if there is no description ->
                //hide all descrition items
                if (this._data.descriptions.length == 0) {
                    var l = this._descriptionProperties.length;
                    for (var i = 0; i < l; ++i) {
                        var key = this._descriptionProperties[i];
                        var text = $(".text[data-key=" + key + "]", this.wrapper);
                        text.addClass("hidden");
                        var title = $(".title[data-key=" + key + "]", this.wrapper);
                        title.addClass("hidden");
                    }
                    return;
                }

                //refresh the text items
                var des = this._data.descriptions[0];
                var l = this._descriptionProperties.length;
                for (var i = 0; i < l; ++i) {
                    var key = this._descriptionProperties[i];
                    var text = $(".text[data-key=" + key + "]", this.wrapper);
                    var title = $(".title[data-key=" + key + "]", this.wrapper);
                    text.html(des[key]);
                    var isEmpty = !des[key];
                    text.toggleClass("hidden", isEmpty);
                    title.toggleClass("hidden", isEmpty);
                }
            };

            ProjectPreview.prototype.scrollIn = function () {
                var tw = { top: $(window).scrollTop() };
                TweenMax.to(tw, 0.3, {
                    top: 400, onUpdate: function () {
                        window.scrollTo(0, tw.top);
                    }
                });
                //if (this.wrapper[0].scrollIntoView)
                //    this.wrapper[0].scrollIntoView();
            };
            return ProjectPreview;
        })();
        map.ProjectPreview = ProjectPreview;
    })(engage.map || (engage.map = {}));
    var map = engage.map;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (admin) {
        var FindBox = (function () {
            function FindBox(backend, wrapper) {
                var _this = this;
                this.backend = backend;
                this.wrapper = wrapper;
                this.onChange = new e5.core.Signal();
                this.data = null;
                this._placeholder = "select best practice...";
                this.create();
                this._select.bind("change keyup", function () {
                    return _this.handleChange();
                });
            }
            FindBox.prototype.handleChange = function () {
                if (this._select.val() != "0") {
                    this._defaultOption.remove();
                    this.data = $("option[value='" + this._select.val() + "']").data("vo");
                    this.onChange.dispatch();
                }
            };

            FindBox.prototype.create = function () {
                var bps = this.backend.manager.data.best_practice;
                var l = bps.length;

                this._defaultOption = $("<option value='0'>" + this._placeholder + "</select>");

                this._select = $("<select></select>");
                this._select.append(this._defaultOption);
                for (var i = 0; i < l; ++i) {
                    var bp = bps[i];
                    var opt = $("<option value=" + bp.id + ">" + bp.id + " | " + bp.title + "</option>");
                    opt.data("vo", bp);
                    this._select.append(opt);
                }
                this.wrapper.append(this._select);
            };
            return FindBox;
        })();
        admin.FindBox = FindBox;
    })(engage.admin || (engage.admin = {}));
    var admin = engage.admin;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (admin) {
        var PanelBestPractices = (function () {
            function PanelBestPractices(backend) {
                this.backend = backend;
                //FOR TEST ONLY
                this._fields = [
                    "id",
                    "title",
                    "summary",
                    "latitude",
                    "longitude",
                    "budget",
                    "country",
                    "location",
                    "termtime_start",
                    "termtime_end"
                ];
                this.wrapper = $("#panel");
                this.wrapper.addClass("panel_best_practice");
                this.create();
            }
            PanelBestPractices.prototype.handleChangeFindBox = function () {
            };

            PanelBestPractices.prototype.create = function () {
                var l = this._fields.length;
                for (var i = 0; i < l; ++i)
                    this.addInput(this._fields[i], "");

                var map = $("<div class='map'></div>");
                this.wrapper.append(map);
                this._map = new engage.map.MiniMap(map);
                this._map.onChange.add(this.handleChangeMap, this);
            };

            PanelBestPractices.prototype.handleChangeMap = function () {
                var pos = this._map.position;
                $("#latitude").val(pos.lat);
                $("#longitude").val(pos.lng);
            };

            PanelBestPractices.prototype.addInput = function (id, type) {
                var lab = $("<div>" + id + "</div>");
                this.wrapper.append(lab);
                var inp = $("<textarea id='" + id + "' class='field'></textarea>");
                this.wrapper.append(inp);
            };

            PanelBestPractices.prototype.open = function (bp) {
                var l = this._fields.length;
                for (var i = 0; i < l; ++i) {
                    var fld = this._fields[i];
                    var val = bp[fld];
                    $("#" + fld).val(val);
                }
                this._map.setPosition(bp.latitude, bp.longitude);
            };
            return PanelBestPractices;
        })();
        admin.PanelBestPractices = PanelBestPractices;
    })(engage.admin || (engage.admin = {}));
    var admin = engage.admin;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (admin) {
        var Backend = (function () {
            function Backend() {
                this.panel = null;
                this.manager = new engage.model.DataManager();
                this.manager.onComplete.add(this.handleComplete, this);
            }
            Backend.prototype.handleComplete = function () {
                $("body").removeClass("progress");
                this.panel = new engage.admin.PanelBestPractices(this);
            };
            return Backend;
        })();
        admin.Backend = Backend;
    })(engage.admin || (engage.admin = {}));
    var admin = engage.admin;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (admin) {
        var FilterPanel = (function () {
            function FilterPanel() {
                var _this = this;
                this._query = null;
                this._dataURL = "gateway.php";
                this._wrapper = $("#admin-panel");
                this._data = new engage.model.DataManager();
                this._data.onComplete.add(this.handleComplete, this);

                $(".panel_bar_item.save").click(function () {
                    return _this.save();
                });
            }
            FilterPanel.prototype.save = function () {
                if (!this._query) {
                    alert("NOTHING TO SAVE");
                    return;
                }

                $("body").addClass("progress");
                $.post(this._dataURL, { data: this._query }, function (response) {
                    //console.log("DATA SAVED READY");
                    //console.log(response);
                    window.location.reload();
                });
            };

            FilterPanel.prototype.handleComplete = function () {
                this.create();
            };

            FilterPanel.prototype.create = function () {
                var res = "<div>";
                var bps = this._data.data.best_practice;
                var l = bps.length;
                for (var i = 0; i < l; ++i) {
                    var bp = bps[i];

                    res += "<div class='bp-item'>";
                    res += "<div class='bp-title'>[" + bp.id + "] " + bp.title + "</div>";
                    res += this.createCheckboxes(bp);
                    res += "</div>";
                }

                res += "</div>";

                this._wrapper.append(res);

                var th = this;
                $(".checkbox").click(function () {
                    var ch = $(this);
                    ch.toggleClass("checked");
                    th.refreshQuery();
                });
            };

            FilterPanel.prototype.refreshQuery = function () {
                var added = [];
                var removed = [];

                $(".checkbox.checked[data-checked='0']").each(function () {
                    var ch = $(this);
                    added.push({
                        bp: ch.attr("data-bp-id"),
                        filterId: ch.attr("data-filter-id"),
                        filterCategory: ch.attr("data-filter-category")
                    });
                });

                $(".checkbox[data-checked='1']").each(function () {
                    var ch = $(this);
                    if (ch.hasClass("checked"))
                        return;
                    removed.push({
                        bp: ch.attr("data-bp-id"),
                        filterId: ch.attr("data-filter-id"),
                        filterCategory: ch.attr("data-filter-category")
                    });
                });

                if (added.length == 0 && removed.length == 0) {
                    //nothing to save
                    this._query = null;
                } else
                    this._query = JSON.stringify({ added: added, removed: removed });
            };

            FilterPanel.prototype.createCheckboxes = function (bp) {
                var boxes = "";

                //add main topics
                boxes += "<div class='bp-category'>";
                var allTops = this._data.data.topic;
                var l = allTops.length;
                for (var i = 0; i < l; ++i) {
                    var topic = allTops[i];
                    var checked = bp.topics.indexOf(topic) >= 0;
                    boxes += this.createCheckbox(topic.id, "topic", bp, checked, topic.title);
                }
                boxes += "</div>";

                //add technologies
                boxes += "<div class='bp-category'>";
                var allTechs = this._data.data.technology;
                var l = allTechs.length;
                for (var i = 0; i < l; ++i) {
                    var tech = allTechs[i];
                    var checked = bp.technologies.indexOf(tech) >= 0;
                    boxes += this.createCheckbox(tech.id, "technology", bp, checked, tech.title);
                }
                boxes += "</div>";

                //add influences
                boxes += "<div class='bp-category'>";
                var allInflus = this._data.data.influence;
                var l = allInflus.length;
                for (var i = 0; i < l; ++i) {
                    var influ = allInflus[i];
                    var checked = bp.influences.indexOf(influ) >= 0;
                    boxes += this.createCheckbox(influ.id, "influence", bp, checked, influ.title);
                }
                boxes += "</div>";

                return boxes;
            };

            FilterPanel.prototype.createCheckbox = function (filterId, filterTable, bp, checked, title) {
                var box = "<div class='checkbox " + (checked ? "checked" : "") + "' data-filter-category='" + filterTable + "' data-filter-id='" + filterId + "' data-bp-id='" + bp.id + "' data-checked='" + (checked ? "1" : "0") + "'>" + title + "</div>";
                return box;
            };
            return FilterPanel;
        })();
        admin.FilterPanel = FilterPanel;
    })(engage.admin || (engage.admin = {}));
    var admin = engage.admin;
})(engage || (engage = {}));

$(window).ready(function () {
    if ($("#admin-panel").length > 0)
        new engage.admin.FilterPanel();
});
var engage;
(function (engage) {
    var Application = (function () {
        function Application(wrapper) {
            this.wrapper = wrapper;
            this.wrapper.addClass("e5map");
            this.wrapper.addClass("loading");

            this.manager = new engage.model.DataManager();
            this.manager.onComplete.add(this.handleComplete, this);
        }
        Application.prototype.handleComplete = function () {
            this.wrapper.removeClass("loading");

            //create the container/wrapper in the right order
            //indepentently from component creation order
            var main_container = $("<div class='main_container'></div>");
            this.wrapper.append(main_container);
            var list_container = $("<div class='list_container'></div>");
            this.wrapper.append(list_container);
            var map_lines = $("<div class='map_lines'></div>");
            this.wrapper.append(map_lines);
            var project_preview = $("<div class='project_preview'></div>");
            this.wrapper.append(project_preview);

            //create the components
            this.filterHandler = new engage.model.FilterHandler(this);
            this.lineHandler = new engage.map.LineHandler(this, map_lines);
            this.projectList = new engage.map.ProjectList(this, list_container);
            this.mapHandler = new engage.map.MapHandler(this, main_container);
            this.filterList = new engage.map.FilterList(this, main_container);
            this.projectPreview = new engage.map.ProjectPreview(this, project_preview);
        };
        return Application;
    })();
    engage.Application = Application;
})(engage || (engage = {}));

$(window).ready(function () {
    var wrapper = $("#map_holder.web");
    if (wrapper.length > 0)
        new engage.Application(wrapper);
});
var engage;
(function (engage) {
    (function (model) {
        var PublishType = (function () {
            function PublishType() {
            }
            PublishType.RELEASE = "release";
            PublishType.DEBUG_AS_APP = "debugAsApp";
            PublishType.DEBUG_AS_WEB = "debugAsWeb";
            return PublishType;
        })();
        model.PublishType = PublishType;
    })(engage.model || (engage.model = {}));
    var model = engage.model;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (menu) {
        var MenuHandler = (function () {
            function MenuHandler(app, container) {
                this.app = app;
                this.container = container;
                this.create();
            }
            MenuHandler.prototype.create = function () {
                var menu = this.app.manager.data.menu;
                var l = menu.length;
                var item;
                var self = this;
                for (var i = 0; i < l; ++i) {
                    var imgURL = engage.model.Ressource.ASSET_PATH + "/" + menu[i].icon_url;
                    item = $('<div class="menu_item" data-type="' + menu[i].page.type + '" data-key="' + menu[i].page.key + '" data-label="' + menu[i].label + '"><img src="' + imgURL + '"/></div>');
                    this.container.append(item);
                    item.bind('click', function () {
                        self.handleClickItem($(this));
                    });
                }
            };
            MenuHandler.prototype.handleClickItem = function (item) {
                if (this.selectedItem == item)
                    return;
                this.selectItem(item);
            };
            MenuHandler.prototype.setSelectedMap = function () {
                var item = $("[data-type='map']");
                if (!item || this.selectedItem == item)
                    return;
                this.selectItem(item);
            };
            MenuHandler.prototype.setSelectedPage = function (key) {
                var item = $("[data-type='page'][data-key='" + key + "']");
                if (!item || this.selectedItem == item)
                    return;
                this.selectItem(item);
            };
            MenuHandler.prototype.selectItem = function (item) {
                if (this.selectedItem)
                    this.selectedItem.removeClass("selected");
                this.selectedItem = item;
                this.selectedItem.addClass("selected");
                var type = this.selectedItem.attr("data-type");
                if (type == "map") {
                    this.app.openMap();
                } else if (type == "page") {
                    var key = this.selectedItem.attr("data-key");
                    this.app.openPage(key);
                } else if (type == "people") {
                    var key = this.selectedItem.attr("data-key");
                    this.app.openPeople(key);
                }
            };
            return MenuHandler;
        })();
        menu.MenuHandler = MenuHandler;
    })(engage.menu || (engage.menu = {}));
    var menu = engage.menu;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (page) {
        var PageHandler = (function () {
            function PageHandler(app, container) {
                this.app = app;
                this.container = container;
                this.create();
            }
            PageHandler.prototype.create = function () {
                var media = $("<div class='media'></div>");
                this.container.append(media);
                this.mediaSlide = new e5.ui.Slideshow(media);
                this.mediaSlide.minContainerHeight = 10;
                this.mediaSlide.setContainerPadding(0);

                this.title = $("<h1></h1>");
                this.container.append(this.title);

                this.text = $("<div class='page_text'></div>");
                this.container.append(this.text);

                var self = this;
                this.container.on('click', '.langBtn', function () {
                    self.handleClickItem($(this));
                });
            };
            PageHandler.prototype.load = function (key) {
                if (this._key == key)
                    return;
                this._key = key;
                if (this.app.manager.getPageByKey(this._key).media)
                    this.mediaSlide.load(this.app.manager.getPageByKey(this._key).media);
                this.title.text(this.app.manager.label("page_title_" + this._key));
                this.text.html(this.app.manager.label("page_text_" + this._key));
                this.container.scrollTop();
            };
            PageHandler.prototype.handleClickItem = function (item) {
                var lang = item.attr("data-lang");
                if (this._lang == lang)
                    return;
                this._lang = lang;
                this.changeLang(lang);
            };
            PageHandler.prototype.changeLang = function (lang) {
                this.title.text(this.app.manager.label("page_title_" + this._key + lang));
                this.text.html(this.app.manager.label("page_text_" + this._key + lang));
            };
            return PageHandler;
        })();
        page.PageHandler = PageHandler;
    })(engage.page || (engage.page = {}));
    var page = engage.page;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (page) {
        var PeoplePage = (function () {
            function PeoplePage(app) {
                this.app = app;
                this.init();
            }
            PeoplePage.prototype.init = function () {
                var _this = this;
                this.element = $("<div class='people_container'></div>");
                $("#content").append(this.element);

                this.btnTakeImage = $("<div class='take_image'>TAKE AN IMAGE</div>");
                this.element.append(this.btnTakeImage);

                this.camera = new engage.media.CameraUtil();

                this.btnTakeImage.bind("click", function (evt) {
                    return _this.handleClickTakeImage();
                });
            };

            PeoplePage.prototype.handleClickTakeImage = function () {
                this.camera.takePicture();
                return false;
            };
            return PeoplePage;
        })();
        page.PeoplePage = PeoplePage;
    })(engage.page || (engage.page = {}));
    var page = engage.page;
})(engage || (engage = {}));
var engage;
(function (engage) {
    (function (media) {
        var CameraUtil = (function () {
            function CameraUtil() {
            }
            CameraUtil.prototype.takePicture = function () {
                var _this = this;
                if (!navigator.camera) {
                    $(".take_image").text("camera not found");
                    return;
                }

                $(".take_image").text("try taking picture");
                navigator.camera.getPicture(function (img) {
                    return _this.onSuccess(img);
                }, function (msg) {
                    return _this.onFail(msg);
                }, {
                    quality: 20,
                    targetWidth: 1024,
                    targetHeight: 768,
                    sourceType: navigator.camera.PictureSourceType.CAMERA,
                    destinationType: navigator.camera.DestinationType.FILE_URI,
                    encodingType: navigator.camera.EncodingType.JPEG,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                });
            };

            CameraUtil.prototype.onSuccess = function (imageData) {
                //            image.attr("src", "data:image/jpeg;base64," + imageData);
                //            var image = $('<img></img>');
                //            image.attr("src", imageData);
                //            image.css("position","absolute");
                //            image.css("top","0");
                //            image.css("left","0");
                //            $(window).append(image);
                $(".take_image").text("take a picture success");
            };

            CameraUtil.prototype.onFail = function (message) {
                //alert("failed: " + message);
                //            alert("take a picture failed");
                $(".take_image").text("take a picture failed");
            };
            return CameraUtil;
        })();
        media.CameraUtil = CameraUtil;
    })(engage.media || (engage.media = {}));
    var media = engage.media;
})(engage || (engage = {}));
var engage;
(function (engage) {
    var MobileApplication = (function (_super) {
        __extends(MobileApplication, _super);
        function MobileApplication(wrapper) {
            $.support.cors = true;

            var publishType = engage.model.PublishType.RELEASE;

            if (publishType == engage.model.PublishType.RELEASE) {
                engage.model.Ressource.ASSET_PATH = "engage-app/assets";
                engage.model.Ressource.MEDIA_PATH = "http://www.engage-interreg.eu/assets/best_practice/";
                engage.model.Ressource.CLOUD_DATA_REQUEST = "http://engage-interreg.eu/engage-map/php/Service.php?operation=export&out=json";
            } else if (publishType == engage.model.PublishType.DEBUG_AS_APP) {
                engage.model.Ressource.ASSET_PATH = "engage-app/assets";
                engage.model.Ressource.MEDIA_PATH = "http://www.engage-interreg.eu/assets/best_practice/";
                engage.model.Ressource.CLOUD_DATA_REQUEST = "data.init.json";
            } else if (publishType == engage.model.PublishType.DEBUG_AS_WEB) {
                engage.model.Ressource.ASSET_PATH = "/eventfive/web/engage-app/assets";
                engage.model.Ressource.MEDIA_PATH = "http://www.engage-interreg.eu/assets/best_practice/";
                engage.model.Ressource.CLOUD_DATA_REQUEST = "/eventfive/web/engage-map/php/Service.php?operation=export&out=json";
            }

            _super.call(this, wrapper);

            this.manager.onError.add(this.onErrorLoadData, this);
        }
        MobileApplication.prototype.onErrorLoadData = function (loadFromWeb, status, error) {
            if (loadFromWeb)
                this.manager.loadFromDisk();
            else {
                //TODO: some user notification like, ERROR LOADING DATA
                alert("Sorry error loading data.");
            }
        };

        MobileApplication.prototype.handleComplete = function () {
            var _this = this;
            document.addEventListener("backbutton", function (e) {
                e.preventDefault();
                navigator["app"].exitApp();
            }, false);

            $("body").addClass("map");
            _super.prototype.handleComplete.call(this);
            $("body").removeClass("map");

            this.projectPreview.getSlideshow().appendToBody(true);

            this.mapHandler.getMap().touchZoom.enable();
            this.projectList.setSortEnabled(false);

            var page_container = $("<div class='page_container'></div>");
            $("#content").append(page_container);
            this.page = new engage.page.PageHandler(this, page_container);

            var menu_container = $("<div class='menu'></div>");
            $("body").append(menu_container);
            this.menu = new engage.menu.MenuHandler(this, menu_container);

            this.closeProjectPreview = $("<div class='close_project_preview'></div>");
            $("#content").append(this.closeProjectPreview);
            this.closeProjectPreview.bind("click", function () {
                _this.handleCloseProjektPreview();
            });
            this.projectPreview.onPreviewOpen.add(this.handlePreviewOpen, this);

            var self = this;
            $("body").on('click', 'a', function (e) {
                self.handleClickLink($(this), e);
            });

            //this.menu.setSelectedPage("about");
            this.menu.setSelectedMap();
            if (this.projectPreview.getIsOpen())
                this.handlePreviewOpen();

            this.people = new engage.page.PeoplePage(this);

            //TODO: dirty hack
            $(window).bind("keyboardresize", function () {
                $("body").scrollTop(0);
            });
            this._wid = $("#content").width();
            this._hei = $("#content").height();
            e5.core.Player.setEnabled(true);
            e5.core.Player.onTick.add(this.handleTick, this);
        };

        MobileApplication.prototype.handleTick = function () {
            var win = $("#content");
            if (win.width() != this._wid || win.height() != this._hei) {
                this._wid = win.width();
                this._hei = win.height();
                $(window).trigger("keyboardresize");
            }
        };

        MobileApplication.prototype.openMap = function () {
            if (this.projectPreview.getIsOpen())
                this.closeProjectPreview.show();
            else
                this.closeProjectPreview.hide();
            $("body").removeClass("people page");
            $("body").addClass("map");
        };
        MobileApplication.prototype.openPage = function (key) {
            this.closeProjectPreview.hide();
            $("body").removeClass("people map");
            $("body").addClass("page");
            this.page.load(key);
        };
        MobileApplication.prototype.openPeople = function (key) {
            this.closeProjectPreview.hide();
            $("body").removeClass("map page");
            $("body").addClass("people");
        };
        MobileApplication.prototype.handleClickLink = function (link, e) {
            window.open(link.attr("href"), '_system');
            e.preventDefault();
        };
        MobileApplication.prototype.handleCloseProjektPreview = function () {
            this.projectPreview.close();
            this.closeProjectPreview.hide();
            $("body").removeClass("preview_open");
        };
        MobileApplication.prototype.handlePreviewOpen = function () {
            this.closeProjectPreview.show();
            $("body").addClass("preview_open");
        };
        return MobileApplication;
    })(engage.Application);
    engage.MobileApplication = MobileApplication;
})(engage || (engage = {}));

$(window).ready(function () {
    var wrapper = $("#map_holder.mobile");
    if (wrapper.length > 0)
        new engage.MobileApplication(wrapper);
});
