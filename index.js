import expess from "express";
import * as TaskService from "./services/task.js";

const app = expess();
const port = 3000;
const host = "localhost";

app.use(expess.json());

app.get("/tasks", TaskService.getAllTask);
app.get("/tasks/:id", TaskService.getTaskById);
app.post("/tasks", TaskService.createTask);
app.put("/tasks", TaskService.updateTask);
app.delete("/tasks/:id", TaskService.deleteTaskById);

app.listen(port, host, () => {
  console.log(`server REST API berlajan di http://${host}:${port}`);
});
