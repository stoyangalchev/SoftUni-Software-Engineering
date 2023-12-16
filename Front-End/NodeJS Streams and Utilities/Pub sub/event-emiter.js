//Events librray from nodeJS

const EventEmiter = require("events");

// The eventEmiter object will be exported and used by the modules that want to publish or subscribe to events.
const eventEmiter = new EventEmiter();

// User module
eventEmiter.on("user-add", (user, age) => {
  console.log(`1 User added - ${user}, ${age}`);
});

eventEmiter.on("user-add", (user) => {
  console.log(`2 User added - ${user}`);
});

eventEmiter.on("user-remove", (user) => {
  console.log(`3 User Removed - ${user}`);
});
// Product module

eventEmiter.emit("user-remove", "Stefan");
eventEmiter.emit("user-add", "Stoyan", 30);
