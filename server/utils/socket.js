import io from "socket.io";

export let io;
export const initializeSocket = (server) => {
  io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
