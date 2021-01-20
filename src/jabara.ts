type Options = {
  selector: string
  speed?: number | undefined
  easing?: string | undefined
}


const jabra: (options: Options) => void = ({ selector, speed = 1.5, easing = 'ease-out' }) => {
  const elements = document.querySelectorAll(selector);

  if (elements.length) {
    [...elements].forEach((element) => {
      let isExpanded = false;
      const triggerElement = element.firstElementChild as HTMLElement;
      const targetElement = element.nextElementSibling as HTMLElement;

      if (!targetElement) throw new Error('There is a problem with the HTML structure.');

      const dimension = targetElement.scrollHeight;
      const duration = dimension * speed;
      (element as HTMLElement).style.overflow = 'hidden';
      targetElement.style.transitionDuration = `${duration}ms`;
      targetElement.style.transitionTimingFunction = easing;

      triggerElement.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget as HTMLElement;
        targetElement.style.height = isExpanded ? '0' : `${dimension}px`;
        isExpanded = !isExpanded;
        currentTarget.setAttribute('aria-expanded', isExpanded.toString());
      })
    })
  }
};

export default jabra;
