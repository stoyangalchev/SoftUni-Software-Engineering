


// The listeners object will store the event names as keys and the listeners as values.
const listeners = {};

// The publish function will be called by the module that wants to publish an event.
const publish = (eventName, ...eventData) => {
  listeners[eventName]?.forEach((listener) => {
    listener(...eventData);
  });
};
// The publish function will be called by the module that wants to publish an event.
const subscribe = (eventName, eventListener) => {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(eventListener);

  return () => {
    listeners[eventName] = listeners[eventName].filter(
      (listener) => listener !== eventListener
    );
  }; 
};

// The eventBus object will be exported and used by the modules that want to publish or subscribe to events.
const eventBus = {
  publish,
  subscribe,
};

module.exports = eventBus;
