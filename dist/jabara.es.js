
/**
 * @license
 * jabara.js v1.0.0
 * Released under the MIT License.
 */

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

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFiYXJhLmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvamFiYXJhLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgT3B0aW9ucyA9IHtcbiAgc2VsZWN0b3I6IHN0cmluZ1xuICBzcGVlZD86IG51bWJlciB8IHVuZGVmaW5lZFxuICBlYXNpbmc/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuXG5jb25zdCBqYWJyYTogKG9wdGlvbnM6IE9wdGlvbnMpID0+IHZvaWQgPSAoeyBzZWxlY3Rvciwgc3BlZWQgPSAxLjUsIGVhc2luZyA9ICdlYXNlLW91dCcgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcbiAgICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBpc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICghdGFyZ2V0RWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgSFRNTCBzdHJ1Y3R1cmUuJyk7XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBkaW1lbnNpb24gKiBzcGVlZDtcbiAgICAgIChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgdGFyZ2V0RWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2luZztcblxuICAgICAgdHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaXNFeHBhbmRlZCA/ICcwJyA6IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIGlzRXhwYW5kZWQgPSAhaXNFeHBhbmRlZDtcbiAgICAgICAgY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc0V4cGFuZGVkLnRvU3RyaW5nKCkpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqYWJyYTtcbiIsImltcG9ydCBqYWJhcmEgZnJvbSAnLi9qYWJhcmEnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGphYmFyYSxcbn07XG4iXSwibmFtZXMiOlsiamFiYXJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTSxLQUFLLEdBQStCLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsVUFBVSxFQUFFO0lBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVyRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87WUFDNUIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQkFBZ0MsQ0FBQztZQUNoRSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWlDLENBQUM7WUFFaEUsSUFBSSxDQUFDLGFBQWE7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBRW5GLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDN0MsTUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQyxPQUF1QixDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ25ELGFBQWEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxRQUFRLElBQUksQ0FBQztZQUN6RCxhQUFhLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztZQUV0RCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSztnQkFDN0MsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQTRCLENBQUM7Z0JBQ3pELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxTQUFTLElBQUksQ0FBQztnQkFDakUsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUN6QixhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQUE7U0FDSCxDQUFDLENBQUE7S0FDSDtBQUNILENBQUM7O0FDOUJELFlBQWU7WUFDYkEsS0FBTTtDQUNQOzs7OyJ9
