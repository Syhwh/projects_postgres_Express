const user = {
	getAllUsers: 'SELECT * FROM users',
	getOneUser: 'SELECT * FROM users WHERE user_id=$1',
	insertUser: 'INSERT INTO users(user_name, user_email, user_password) VALUES($1,$2,$3)',
	deleteUser: 'DELETE * FROM users WHERE user_id=$1'
}

const project = {
	getAllProjects: 'SELECT * FROM projects WHERE user_id=$1',
	getOneProject: 'SELECT * FROM projects WHERE project_id=$1',
	deleteProject: 'DELETE * FROM projects WHERE project_id=$1',
	createProject: 'INSERT INTO projects(project_name, user_id) VALUES($1,$2)'
}

const auth = {
	getEmail: 'SELECT user_email FROM users WHERE user_email=$1',
	getUserByEmail:'SELECT * FROM users WHERE user_email=$1'
}

module.exports = { user, project, auth }