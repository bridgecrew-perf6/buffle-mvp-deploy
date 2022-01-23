import { API_URL } from "../config";
// --------------------------USER MANGEMENT ----------------------------------
//company admin
async function getCompanySpaceData() {
  try {
    const req = await fetch(`${API_URL}/user/space-data`, {
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    return { status: req.status, data: res?.payload };
  } catch {
    return { status: 400 };
  }
}
// signin
async function signin(payload) {
  try {
    const req = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await req.json();
    return { status: req.status, data: res };
  } catch {
    return { status: 400 };
  }
}
async function userStatus() {
  try {
    const req = await fetch(`${API_URL}/auth/status`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return { status: req.status };
  } catch {
    return 401;
  }
}
// logout
async function logout() {
  const req = await fetch(`${API_URL}/auth/logout`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  return { status: req.status };
}
// --------------------------------- NEXT BREAK-------------------
async function addNextBreak(startDate, endDate) {
  try {
    const req = await fetch(`${API_URL}/next-break/add`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        start: startDate,
        end: endDate,
      }),
    });
    const res = await req.json();
    return { status: req.status, data: res.payload };
  } catch {
    console.error("Error inside client next break!");
  }
}
async function getNextBreak() {
  try {
    const req = await fetch(`${API_URL}/next-break/get`, {
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const res = await req.json();
    return res;
  } catch {
    console.error("Error inside client next break!");
  }
}
async function deleteNextBreak() {
  try {
    const req = await fetch(`${API_URL}/next-break/delete`, {
      method: "DELETE",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return req.status;
  } catch {
    console.error("Error inside client next break! DELETE");
    return 400;
  }
}
// ------------------------------Feel-------------------
async function setUserFeel(payload) {
  const req = await fetch(`${API_URL}/user/feel`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      feel: payload,
    }),
  });
  return { status: req.status };
}
// ------------------------ projects-----------
async function getProject() {
  const req = await fetch(`${API_URL}/project/get`, {
    method: "GET",
    credentials: "include",
    mode: "cors",

    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const res = await req.json();
  return { status: req.status, data: res.payload };
}

async function createProject(project_name, desc) {
  const req = await fetch(`${API_URL}/project/new`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      name: project_name,
      description: desc,
    }),
  });
  return { status: req.status };
}
async function getProjectById(id) {
  const req = await fetch(`${API_URL}/project/getById?id=${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const res = await req.json();
  return { status: req.status, data: res.payload };
}

async function updateProject(id, name, desc) {
  const req = await fetch(`${API_URL}/project/update`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      projectId: id,
      name: name,
      description: desc,
    }),
  });
  return { status: req.status, data: req };
}

// ----------------------tasks--------------
async function createTask(task, type, duration) {
  const req = await fetch(`${API_URL}/task/new`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      name: task.name,
      projectId: task.p_id,
      type: type,
      duration: duration,
    }),
  });
  const resault = await req.json();
  return { status: req.status, data: resault.payload };
}
async function getTask() {
  const req = await fetch(`${API_URL}/task/get`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const res = await req.json();
  return { status: req.status, data: res.payload };
}
async function setProjectToItem(id, p_id) {
  const req = await fetch(`${API_URL}/task/update-task-project`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      taskId: id,
      projectId: p_id,
    }),
  });
  return { status: req.status };
}

async function updateTask(data) {
  const req = await fetch(`${API_URL}/task/update`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      taskId: data.id,
      name: data.name,
      date: data.date,
      type: data.type,
      description: data.description,
      startTime: data.taskTime,
    }),
  });
  return { status: req.status };
}

async function deleteTask(id) {
  const req = await fetch(`${API_URL}/task/delete?taskId=${id}`, {
    method: "DELETE",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  return { status: req.status };
}

async function updateTaskDate(id, date) {
  const req = await fetch(`${API_URL}/task/update-task-date`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      taskId: id,
      date: date,
    }),
  });
  return { status: req.status };
}
async function updateTaskProject(id, p_id) {
  const req = await fetch(`${API_URL}/task/update-task-project`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      taskId: id,
      projectId: p_id,
    }),
  });
  return { status: req.status };
}
// Hydration Reminder
async function getWaterHydration() {
  const req = await fetch(`${API_URL}/water_hydration/get`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const res = await req.json();
  return { status: req.status, data: res.payload };
}

async function createWaterHydration(data) {
  const req = await fetch(`${API_URL}/water_hydration/new`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      goal: data.dailyGoal,
      work: data.timer_1,
      reminder: data.timer_2,
    }),
  });
  return { status: req.status };
}

// ------------------- Important today----------
async function getImportantToday() {
  const req = await fetch(`${API_URL}/task/get-important`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const res = await req.json();
  return { status: req.status, data: res.payload };
}
async function updateTaskImportant(id, duration) {
  const req = await fetch(`${API_URL}/task/update-important`, {
    method: "PUT",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      taskId: id,
      moved: true,
      duration: duration,
      type: 1,
    }),
  });
  return { status: req.status };
}
export {
  getCompanySpaceData,
  signin,
  logout,
  userStatus,
  addNextBreak,
  getNextBreak,
  deleteNextBreak,
  setUserFeel,
  getProject,
  createProject,
  getProjectById,
  updateProject,
  createTask,
  getTask,
  getWaterHydration,
  createWaterHydration,
  setProjectToItem,
  updateTask,
  deleteTask,
  updateTaskDate,
  updateTaskProject,
  getImportantToday,
  updateTaskImportant,
};
