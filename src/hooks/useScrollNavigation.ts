interface UseScrollNavigationProps {
  offset?: number;
}

export const useScrollNavigation = ({ offset = 80 }: UseScrollNavigationProps = {}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};

export default useScrollNavigation;