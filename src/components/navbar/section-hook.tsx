import { useEffect, useState } from 'react';

export function useSection() {
  const [currentSection, setCurrentSection] = useState('#')

  const listenScrollEvent = () => {
    const about = document.getElementById('about')!
    const features = document.getElementById('features')!
    const faqs = document.getElementById('faqs')!
    const scroll = window.scrollY + 5
    if (scroll < about.offsetTop) {
      setCurrentSection('#')
    }
    if (scroll >= about.offsetTop && scroll < features.offsetTop) {
      setCurrentSection('about')
    }
    if (scroll >= features.offsetTop && scroll < faqs.offsetTop) {
      setCurrentSection('features')
    }
    if (scroll >= faqs.offsetTop) {
      setCurrentSection('faqs')
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return {currentSection}
}