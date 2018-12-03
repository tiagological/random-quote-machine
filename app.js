var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      quote: "",
      author: ""
    };
    _this.changeQuote = _this.changeQuote.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.changeQuote();
    }
  }, {
    key: "changeQuote",
    value: function changeQuote() {
      var _this2 = this;

      var COLORS = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#bfef45", "#42d4f4", "#000", "#ffd8b1", "#aaffc3"];

      var color = Math.floor(Math.random() * COLORS.length + 1);

      document.body.style.backgroundColor = COLORS[color];

      document.querySelector("html").style.color = COLORS[color];

      document.getElementById("new-quote").style.backgroundColor = COLORS[color];

      document.getElementById("tweet-quote-button").style.backgroundColor = COLORS[color];

      fetch("https://talaikis.com/api/quotes/random/").then(function (results) {
        return results.json();
      }).then(function (data) {
        return _this2.setState({
          quote: data.quote,
          author: data.author
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "quote-box" },
          React.createElement(
            "h3",
            { id: "text" },
            React.createElement("i", { "class": "fa fa-quote-left" }),
            " ",
            this.state.quote
          ),
          React.createElement(
            "p",
            { id: "author" },
            "- ",
            this.state.author
          ),
          React.createElement(
            "div",
            { id: "buttons" },
            React.createElement(
              "button",
              { id: "new-quote", onClick: this.changeQuote },
              "New Quote"
            ),
            React.createElement(
              "button",
              { id: "tweet-quote-button" },
              React.createElement(
                "a",
                {
                  id: "tweet-quote",
                  href: "https://twitter.com/intent/tweet?text=" + this.state.quote + " - " + this.state.author,
                  target: "_blank"
                },
                React.createElement("i", { id: "twitter-icon", "class": "fab fa-twitter" })
              )
            )
          )
        ),
        React.createElement(
          "div",
          { id: "footer" },
          "by",
          React.createElement(
            "a",
            { href: "https://tsmarques.com" },
            " TSMarques"
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));