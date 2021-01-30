
/**
 * @license
 * Jabara.js v1.0.0
 * Released under the MIT License.
 */

var Jabara = (function () {
    'use strict';

    const Jabra = ({ selector, speed = 1.5, easing = 'ease-out' }) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            [...elements].forEach((element) => {
                let isExpanded = false;
                const triggerElement = element.firstElementChild;
                const targetElement = triggerElement.nextElementSibling;
                if (!targetElement)
                    throw new Error('There is a problem with the HTML structure.');
                const dimension = targetElement.scrollHeight;
                const duration = dimension * speed;
                element.style.overflow = 'hidden';
                targetElement.style.height = '0';
                targetElement.style.transitionDuration = `${duration}ms`;
                targetElement.style.transitionTimingFunction = easing;
                triggerElement.addEventListener('click', (event) => {
                    const currentTarget = event.currentTarget;
                    targetElement.style.height = isExpanded ? '0' : `${dimension}px`;
                    isExpanded = !isExpanded;
                    currentTarget.setAttribute('aria-expanded', isExpanded.toString());
                });
            });
        }
    };

    var index = {
        init: Jabra,
    };

    return index;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFiYXJhLmpzIiwic291cmNlcyI6WyIuLi9zcmMvamFiYXJhLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgT3B0aW9ucyA9IHtcbiAgc2VsZWN0b3I6IHN0cmluZ1xuICBzcGVlZD86IG51bWJlciB8IHVuZGVmaW5lZFxuICBlYXNpbmc/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgSmFicmE6IChvcHRpb25zOiBPcHRpb25zKSA9PiB2b2lkID0gKHsgc2VsZWN0b3IsIHNwZWVkID0gMS41LCBlYXNpbmcgPSAnZWFzZS1vdXQnIH0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRyaWdnZXJFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSBIVE1MIHN0cnVjdHVyZS4nKTtcblxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IGRpbWVuc2lvbiAqIHNwZWVkO1xuICAgICAgKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgICAgdGFyZ2V0RWxlbWVudC5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNpbmc7XG5cbiAgICAgIHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGlzRXhwYW5kZWQgPyAnMCcgOiBgJHtkaW1lbnNpb259cHhgO1xuICAgICAgICBpc0V4cGFuZGVkID0gIWlzRXhwYW5kZWQ7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNFeHBhbmRlZC50b1N0cmluZygpKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSmFicmE7XG4iLCJpbXBvcnQgSmFiYXJhIGZyb20gJy4vamFiYXJhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBKYWJhcmEsXG59O1xuIl0sIm5hbWVzIjpbIkphYmFyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU1BLE1BQU0sS0FBSyxHQUErQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLFVBQVUsRUFBRTtRQUN2RixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckQsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPO2dCQUM1QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQkFBZ0MsQ0FBQztnQkFDaEUsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLGtCQUFpQyxDQUFDO2dCQUV2RSxJQUFJLENBQUMsYUFBYTtvQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBRW5GLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzdDLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLE9BQXVCLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ25ELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDakMsYUFBYSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLFFBQVEsSUFBSSxDQUFDO2dCQUN6RCxhQUFhLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztnQkFFdEQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUs7b0JBQzdDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUE0QixDQUFDO29CQUN6RCxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUyxJQUFJLENBQUM7b0JBQ2pFLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3BFLENBQUMsQ0FBQTthQUNILENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQzs7QUM5QkQsZ0JBQWU7UUFDYixJQUFJLEVBQUVBLEtBQU07S0FDYjs7Ozs7Ozs7In0=
