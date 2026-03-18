export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 80; // Altura del menú fijo
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = 700; // Exactamente 700 milisegundos
  let start: number | null = null;

  // Función de easing para un movimiento suave y profesional (easeInOutQuart)
  const easeInOutQuart = (time: number, begin: number, change: number, duration: number) => {
    if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time + begin;
    return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
    
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, offsetPosition); // Asegura que termine exactamente en la posición
    }
  };

  requestAnimationFrame(animation);
};
