// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("Hello", () => console.log("Somebody Said Hello"));
