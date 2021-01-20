
/**
 * @license
 * jabara.js v1.0.0
 * Released under the MIT License.
 */

var jabara = (function () {
    'use strict';

    const jabra = ({ selector, speed = 1.5, easing = 'ease-out' }) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            [...elements].forEach((element) => {
                let isExpanded = false;
                const triggerElement = element.firstElementChild;
                const targetElement = element.nextElementSibling;
                if (!targetElement)
                    throw new Error('There is a problem with the HTML structure.');
                const dimension = targetElement.scrollHeight;
                const duration = dimension * speed;
                element.style.overflow = 'hidden';
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
        jabara: jabra,
    };

    return index;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFiYXJhLmpzIiwic291cmNlcyI6WyIuLi9zcmMvamFiYXJhLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgT3B0aW9ucyA9IHtcbiAgc2VsZWN0b3I6IHN0cmluZ1xuICBzcGVlZD86IG51bWJlciB8IHVuZGVmaW5lZFxuICBlYXNpbmc/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuXG5jb25zdCBqYWJyYTogKG9wdGlvbnM6IE9wdGlvbnMpID0+IHZvaWQgPSAoeyBzZWxlY3Rvciwgc3BlZWQgPSAxLjUsIGVhc2luZyA9ICdlYXNlLW91dCcgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcbiAgICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBpc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICghdGFyZ2V0RWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgSFRNTCBzdHJ1Y3R1cmUuJyk7XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBkaW1lbnNpb24gKiBzcGVlZDtcbiAgICAgIChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgdGFyZ2V0RWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2luZztcblxuICAgICAgdHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaXNFeHBhbmRlZCA/ICcwJyA6IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIGlzRXhwYW5kZWQgPSAhaXNFeHBhbmRlZDtcbiAgICAgICAgY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc0V4cGFuZGVkLnRvU3RyaW5nKCkpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqYWJyYTtcbiIsImltcG9ydCBqYWJhcmEgZnJvbSAnLi9qYWJhcmEnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGphYmFyYSxcbn07XG4iXSwibmFtZXMiOlsiamFiYXJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0EsTUFBTSxLQUFLLEdBQStCLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsVUFBVSxFQUFFO1FBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Z0JBQzVCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdkIsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGlCQUFnQyxDQUFDO2dCQUNoRSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWlDLENBQUM7Z0JBRWhFLElBQUksQ0FBQyxhQUFhO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztnQkFFbkYsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDN0MsTUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEMsT0FBdUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDbkQsYUFBYSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLFFBQVEsSUFBSSxDQUFDO2dCQUN6RCxhQUFhLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztnQkFFdEQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUs7b0JBQzdDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUE0QixDQUFDO29CQUN6RCxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUyxJQUFJLENBQUM7b0JBQ2pFLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3BFLENBQUMsQ0FBQTthQUNILENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQzs7QUM5QkQsZ0JBQWU7Z0JBQ2JBLEtBQU07S0FDUDs7Ozs7Ozs7In0=
