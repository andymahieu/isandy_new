/**
 * @jest-environment jsdom
 */

// Import the functions to test
// Since the functions are not exported in script.js, we need to make them available for testing
// We'll do this by adding them to the global window object in a test setup file

// Mock the DOM environment
document.body.innerHTML = `
  <div id="notification-container"></div>
`;

// Mock showNotification before loading the script
global.window.showNotification = jest.fn();

// Load the script.js file to make functions available
require('../../script.js');

// Extract functions from the global scope
const isValidEmail = window.isValidEmail;
const validateForm = window.validateForm;
const getNotificationIcon = window.getNotificationIcon;

describe('Email Validation', () => {
  test('isValidEmail should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('name.surname@domain.co.uk')).toBe(true);
    expect(isValidEmail('user123@gmail.com')).toBe(true);
    expect(isValidEmail('first-last@company.org')).toBe(true);
  });

  test('isValidEmail should reject invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('test')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test@example.')).toBe(false);
    expect(isValidEmail('test@exam ple.com')).toBe(false);
  });
});

describe('Form Validation', () => {
  test('validateForm should accept valid form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message with sufficient length.'
    };
    
    expect(validateForm(validData)).toBe(true);
  });

  test('validateForm should reject empty form data', () => {
    const emptyData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    expect(validateForm(emptyData)).toBe(false);
  });

  test('validateForm should reject form with short name', () => {
    const dataWithShortName = {
      name: 'J',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message with sufficient length.'
    };
    
    expect(validateForm(dataWithShortName)).toBe(false);
  });

  test('validateForm should reject form with invalid email', () => {
    const dataWithInvalidEmail = {
      name: 'John Doe',
      email: 'invalid-email',
      subject: 'Test Subject',
      message: 'This is a test message with sufficient length.'
    };
    
    expect(validateForm(dataWithInvalidEmail)).toBe(false);
  });

  test('validateForm should reject form with short subject', () => {
    const dataWithShortSubject = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Te',
      message: 'This is a test message with sufficient length.'
    };
    
    expect(validateForm(dataWithShortSubject)).toBe(false);
  });

  test('validateForm should reject form with short message', () => {
    const dataWithShortMessage = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Short'
    };
    
    expect(validateForm(dataWithShortMessage)).toBe(false);
  });
});

describe('Notification Icons', () => {
  test('getNotificationIcon should return correct icon for success', () => {
    expect(getNotificationIcon('success')).toBe('✓');
  });

  test('getNotificationIcon should return correct icon for error', () => {
    expect(getNotificationIcon('error')).toBe('✕');
  });

  test('getNotificationIcon should return correct icon for info (default)', () => {
    expect(getNotificationIcon('info')).toBe('ℹ');
  });

  test('getNotificationIcon should return info icon for unknown types', () => {
    expect(getNotificationIcon('unknown')).toBe('ℹ');
    expect(getNotificationIcon('')).toBe('ℹ');
  });
});