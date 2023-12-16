// Code: Pub sub pattern
const eventBus = require("./event-bus");

// User module
const unsubscribe = eventBus.subscribe("user-add", (user, age) => {
  console.log(`1 User added - ${user}, ${age}`);
});

eventBus.subscribe("user-add", (user) => {
  console.log(`2 User added - ${user}`);
});

eventBus.subscribe("user-remove", (user) => {
  console.log(`3 User Removed - ${user}`);
});
// Product module

eventBus.publish("user-remove", "Stefan");
eventBus.publish("user-add", "Stoyan", 30);

unsubscribe();
eventBus.publish("user-add", "Stoyan", 30);
