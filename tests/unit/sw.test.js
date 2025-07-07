/**
 * @jest-environment jsdom
 */

describe('Service Worker', () => {
  // Mock service worker API
  beforeEach(() => {
    // Mock the navigator.serviceWorker object
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn().mockImplementation(() => Promise.resolve({
          scope: '/'
        })),
        addEventListener: jest.fn()
      },
      configurable: true
    });
    
    // Mock console.log
    global.console.log = jest.fn();
  });
  
  test('should register service worker when supported', async () => {
    // Load the script.js file which contains the service worker registration
    require('../../script.js');
    
    // Trigger the load event to register the service worker
    window.dispatchEvent(new Event('load'));
    
    // Check if the service worker was registered
    expect(navigator.serviceWorker.register).toHaveBeenCalledWith('/sw.js');
  });
  
  test('should handle service worker registration errors', async () => {
    // Mock the register function to reject
    navigator.serviceWorker.register.mockImplementation(() => 
      Promise.reject(new Error('Registration failed'))
    );
    
    // Mock console.log
    global.console.log = jest.fn();
    
    // Load the script.js file which contains the service worker registration
    require('../../script.js');
    
    // Trigger the load event to register the service worker
    window.dispatchEvent(new Event('load'));
    
    // Wait for the promise to be rejected
    await new Promise(process.nextTick);
    
    // Check if the error was logged
    expect(console.log).toHaveBeenCalledWith(
      'SW registration failed: ', 
      expect.any(Error)
    );
  });
});