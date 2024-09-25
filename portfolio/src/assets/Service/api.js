import axios from "axios";

const api = "https://66e52bd55cc7f9b6273c8727.mockapi.io/kathir"

const getProject = () => axios.get($(api)/projects)
const addProject = (projectData) => axios.post($(api)/projects, projectData)
const editProject = (id, projectData) => axios.put($(api)/projects/$(id), projectData)
const deleteProject = (id) => axios.delete($(api)/projects/$(id))


export { getProject, addProject, editProject,deleteProject} 