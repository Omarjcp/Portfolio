export const IntersectionObserverHook = (
  hashLocation,
  elementToView,
  setterLocation,
  marginRoot
) => {
  const onChange = (entries) => {
    if (entries[0].isIntersecting) setterLocation(hashLocation);
    console.log(entries[0]);
  };

  const observer = new IntersectionObserver(onChange, {
    rootMargin: marginRoot,
  });

  observer.observe(document.getElementById(elementToView));
};
