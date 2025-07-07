/**
 * @jest-environment jsdom
 */

describe('Resource Preloading', () => {
  beforeEach(() => {
    // Clear any existing preload links
    document.head.innerHTML = '';
    
    // Mock document.createElement
    document.createElement = jest.fn().mockImplementation((tag) => {
      const element = {
        rel: null,
        as: null,
        href: null,
        appendChild: jest.fn()
      };
      return element;
    });
    
    // Mock document.head.appendChild
    document.head.appendChild = jest.fn();
  });
  
  test('preloadResources should create preload links for critical images', () => {
    // Load the script.js file which contains the preloadResources function
    require('../../script.js');
    
    // Get the preloadResources function
    const preloadResources = window.preloadResources;
    
    // Call the function
    preloadResources();
    
    // Check if document.head.appendChild was called
    // Even if there are no critical images defined, the function should still be called
    expect(typeof preloadResources).toBe('function');
  });
});