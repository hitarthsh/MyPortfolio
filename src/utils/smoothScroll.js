import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const initSmoothScroll = () => {
  // Create smooth scrolling
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5, // Adjust this value to control smoothness (higher = smoother but slower)
    effects: true,
    normalizeScroll: true, // Prevents momentum scrolling on touch devices
  });
};

// Function to scroll to a specific element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    ScrollSmoother.get().scrollTo(element, true, 'center center');
  }
}; 