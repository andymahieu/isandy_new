/**
 * @jest-environment jsdom
 */

// Load the script.js file to make functions available
require('../../script.js');

// Extract functions from the global scope
const debounce = window.debounce;
const throttle = window.throttle;

// Mock timers for testing debounce and throttle
jest.useFakeTimers();

describe('Performance Utility Functions', () => {
  describe('Debounce Function', () => {
    test('debounce should delay function execution', () => {
      // Create a mock function
      const mockFn = jest.fn();
      
      // Create a debounced version of the mock function
      const debouncedFn = debounce(mockFn, 1000);
      
      // Call the debounced function
      debouncedFn();
      
      // Function should not be called immediately
      expect(mockFn).not.toHaveBeenCalled();
      
      // Fast-forward time by 500ms
      jest.advanceTimersByTime(500);
      
      // Function should still not be called
      expect(mockFn).not.toHaveBeenCalled();
      
      // Fast-forward time to 1000ms
      jest.advanceTimersByTime(500);
      
      // Function should be called once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('debounce should reset timer on subsequent calls', () => {
      // Create a mock function
      const mockFn = jest.fn();
      
      // Create a debounced version of the mock function
      const debouncedFn = debounce(mockFn, 1000);
      
      // Call the debounced function
      debouncedFn();
      
      // Fast-forward time by 500ms
      jest.advanceTimersByTime(500);
      
      // Call the debounced function again
      debouncedFn();
      
      // Fast-forward time by another 500ms
      jest.advanceTimersByTime(500);
      
      // Function should not be called yet (only 500ms after the second call)
      expect(mockFn).not.toHaveBeenCalled();
      
      // Fast-forward time by another 500ms
      jest.advanceTimersByTime(500);
      
      // Function should be called once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('debounce should pass arguments to the original function', () => {
      // Create a mock function
      const mockFn = jest.fn();
      
      // Create a debounced version of the mock function
      const debouncedFn = debounce(mockFn, 1000);
      
      // Call the debounced function with arguments
      debouncedFn('test', 123);
      
      // Fast-forward time by 1000ms
      jest.advanceTimersByTime(1000);
      
      // Function should be called with the correct arguments
      expect(mockFn).toHaveBeenCalledWith('test', 123);
    });
  });
  
  describe('Throttle Function', () => {
    test('throttle should limit function execution', () => {
      // Create a mock function
      const mockFn = jest.fn();
      
      // Create a throttled version of the mock function
      const throttledFn = throttle(mockFn, 1000);
      
      // Call the throttled function
      throttledFn();
      
      // Function should be called immediately
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Call the throttled function again
      throttledFn();
      
      // Function should not be called again
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Fast-forward time by 1000ms
      jest.advanceTimersByTime(1000);
      
      // Call the throttled function again
      throttledFn();
      
      // Function should be called again
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
    
    test('throttle should maintain context and arguments', () => {
      // Create a mock function
      const mockFn = jest.fn();
      
      // Create a throttled version of the mock function
      const throttledFn = throttle(function(arg) {
        mockFn(this.value, arg);
      }, 1000);
      
      // Create an object with a value
      const obj = {
        value: 'test'
      };
      
      // Call the throttled function with context and arguments
      throttledFn.call(obj, 123);
      
      // Function should be called with the correct context and arguments
      expect(mockFn).toHaveBeenCalledWith('test', 123);
    });
  });
});