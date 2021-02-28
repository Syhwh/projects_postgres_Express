const user = {
	getAllUsers: 'SELECT * FROM users',
	getOneUser: 'SELECT * FROM users WHERE user_id=$1',
	insertUser: 'INSERT INTO users(user_name, user_email, user_password) VALUES($1,$2,$3)',
	deleteUser: 'DELETE * FROM users WHERE user_id=$1'
}

const project = {
	getAllProjects: 'SELECT * FROM projects WHERE user_id=$1',
	getOneProject: 'SELECT * FROM projects WHERE project_id=$1',
	createProject: 'INSERT INTO projects(project_name, user_id) VALUES($1,$2)',
	deleteProject: 'DELETE * FROM projects WHERE project_id=$1',
	editProject: 'UPDATE projects SET project_name=$1 WHERE project_id=$2'
}

const task = {
	getAllTasks: 'SELECT * FROM tasks WHERE project_id=$1',
	getOneTask: 'SELECT * FROM tasks WHERE project_id=$1 AND task_id=$2',
	createTas: 'INSERT INTO tasks(task_name,task_description,project_id) VALUES($1, $2)',
	editTask: '',
	deleteTask: 'DELETE * FROM tasks WHERE project_id=$1 AND task_id=$2',
	updateTask: ''
}
const auth = {
	getEmail: 'SELECT user_email FROM users WHERE user_email=$1',
	getUserByEmail: 'SELECT * FROM users WHERE user_email=$1'
}

module.exports = { user, project, auth, task }