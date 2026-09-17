const PROJECTS_KEY = 'haydarali_portfolio_projects'
const AUTH_KEY = 'haydarali_portfolio_admin_auth'

export function getProjects() {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Loyihalarni o\'qishda xatolik:', e)
    return []
  }
}

export function saveProjects(projects) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
    return true
  } catch (e) {
    console.error('Loyihalarni saqlashda xatolik:', e)
    return false
  }
}

export function addProject(project) {
  const projects = getProjects()
  const newProject = { ...project, id: Date.now().toString() }
  const updated = [newProject, ...projects]
  saveProjects(updated)
  return updated
}

export function updateProject(id, updates) {
  const projects = getProjects()
  const updated = projects.map((p) => (p.id === id ? { ...p, ...updates } : p))
  saveProjects(updated)
  return updated
}

export function deleteProject(id) {
  const projects = getProjects()
  const updated = projects.filter((p) => p.id !== id)
  saveProjects(updated)
  return updated
}

export function isAdminAuthed() {
  return sessionStorage.getItem(AUTH_KEY) === 'true'
}

export function setAdminAuthed(value) {
  if (value) {
    sessionStorage.setItem(AUTH_KEY, 'true')
  } else {
    sessionStorage.removeItem(AUTH_KEY)
  }
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Rasmni o\'qib bo\'lmadi'))
    reader.readAsDataURL(file)
  })
}