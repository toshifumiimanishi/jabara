
/**
 * @license
 * Jabara.js v1.0.0
 * Released under the MIT License.
 */

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Jabra = function Jabra(_ref) {
  var selector = _ref.selector,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1.5 : _ref$speed,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? 'ease-out' : _ref$easing;
  var elements = document.querySelectorAll(selector);

  if (elements.length) {
    _toConsumableArray(elements).forEach(function (element) {
      var isExpanded = false;
      var triggerElement = element.firstElementChild;
      var targetElement = triggerElement.nextElementSibling;
      if (!targetElement) throw new Error('There is a problem with the HTML structure.');
      var dimension = targetElement.scrollHeight;
      var duration = dimension * speed;
      element.style.overflow = 'hidden';
      targetElement.style.height = '0';
      targetElement.style.transitionDuration = "".concat(duration, "ms");
      targetElement.style.transitionTimingFunction = easing;
      triggerElement.addEventListener('click', function (event) {
        var currentTarget = event.currentTarget;
        targetElement.style.height = isExpanded ? '0' : "".concat(dimension, "px");
        isExpanded = !isExpanded;
        currentTarget.setAttribute('aria-expanded', isExpanded.toString());
      });
    });
  }
};

var index = {
  init: Jabra
};

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFiYXJhLmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvamFiYXJhLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgT3B0aW9ucyA9IHtcbiAgc2VsZWN0b3I6IHN0cmluZ1xuICBzcGVlZD86IG51bWJlciB8IHVuZGVmaW5lZFxuICBlYXNpbmc/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgSmFicmE6IChvcHRpb25zOiBPcHRpb25zKSA9PiB2b2lkID0gKHsgc2VsZWN0b3IsIHNwZWVkID0gMS41LCBlYXNpbmcgPSAnZWFzZS1vdXQnIH0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRyaWdnZXJFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSBIVE1MIHN0cnVjdHVyZS4nKTtcblxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IGRpbWVuc2lvbiAqIHNwZWVkO1xuICAgICAgKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgICAgdGFyZ2V0RWxlbWVudC5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNpbmc7XG5cbiAgICAgIHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGlzRXhwYW5kZWQgPyAnMCcgOiBgJHtkaW1lbnNpb259cHhgO1xuICAgICAgICBpc0V4cGFuZGVkID0gIWlzRXhwYW5kZWQ7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNFeHBhbmRlZC50b1N0cmluZygpKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSmFicmE7XG4iLCJpbXBvcnQgSmFiYXJhIGZyb20gJy4vamFiYXJhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBKYWJhcmEsXG59O1xuIl0sIm5hbWVzIjpbIkphYnJhIiwic2VsZWN0b3IiLCJzcGVlZCIsImVhc2luZyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc0V4cGFuZGVkIiwidHJpZ2dlckVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRhcmdldEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJFcnJvciIsImRpbWVuc2lvbiIsInNjcm9sbEhlaWdodCIsImR1cmF0aW9uIiwic3R5bGUiLCJvdmVyZmxvdyIsImhlaWdodCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImluaXQiLCJKYWJhcmEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxLQUFLLEdBQStCLFNBQXBDQSxLQUFvQztNQUFHQyxnQkFBQUE7d0JBQVVDO01BQUFBLGdDQUFRO3lCQUFLQztNQUFBQSxrQ0FBUztBQUMzRSxNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJMLFFBQTFCLENBQWpCOztBQUVBLE1BQUlHLFFBQVEsQ0FBQ0csTUFBYixFQUFxQjtBQUNuQix1QkFBSUgsUUFBSixFQUFjSSxPQUFkLENBQXNCLFVBQUNDLE9BQUQ7QUFDcEIsVUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHRixPQUFPLENBQUNHLGlCQUEvQjtBQUNBLFVBQU1DLGFBQWEsR0FBR0YsY0FBYyxDQUFDRyxrQkFBckM7QUFFQSxVQUFJLENBQUNELGFBQUwsRUFBb0IsTUFBTSxJQUFJRSxLQUFKLENBQVUsNkNBQVYsQ0FBTjtBQUVwQixVQUFNQyxTQUFTLEdBQUdILGFBQWEsQ0FBQ0ksWUFBaEM7QUFDQSxVQUFNQyxRQUFRLEdBQUdGLFNBQVMsR0FBR2QsS0FBN0I7QUFDQ08sTUFBQUEsT0FBdUIsQ0FBQ1UsS0FBeEIsQ0FBOEJDLFFBQTlCLEdBQXlDLFFBQXpDO0FBQ0RQLE1BQUFBLGFBQWEsQ0FBQ00sS0FBZCxDQUFvQkUsTUFBcEIsR0FBNkIsR0FBN0I7QUFDQVIsTUFBQUEsYUFBYSxDQUFDTSxLQUFkLENBQW9CRyxrQkFBcEIsYUFBNENKLFFBQTVDO0FBQ0FMLE1BQUFBLGFBQWEsQ0FBQ00sS0FBZCxDQUFvQkksd0JBQXBCLEdBQStDcEIsTUFBL0M7QUFFQVEsTUFBQUEsY0FBYyxDQUFDYSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDQyxLQUFEO0FBQ3ZDLFlBQU1DLGFBQWEsR0FBR0QsS0FBSyxDQUFDQyxhQUE1QjtBQUNBYixRQUFBQSxhQUFhLENBQUNNLEtBQWQsQ0FBb0JFLE1BQXBCLEdBQTZCWCxVQUFVLEdBQUcsR0FBSCxhQUFZTSxTQUFaLE9BQXZDO0FBQ0FOLFFBQUFBLFVBQVUsR0FBRyxDQUFDQSxVQUFkO0FBQ0FnQixRQUFBQSxhQUFhLENBQUNDLFlBQWQsQ0FBMkIsZUFBM0IsRUFBNENqQixVQUFVLENBQUNrQixRQUFYLEVBQTVDO0FBQ0QsT0FMRDtBQU1ELEtBcEJEO0FBcUJEO0FBQ0YsQ0ExQkQ7O0FDSkEsWUFBZTtBQUNiQyxFQUFBQSxJQUFJLEVBQUVDO0FBRE8sQ0FBZjs7OzsifQ==
