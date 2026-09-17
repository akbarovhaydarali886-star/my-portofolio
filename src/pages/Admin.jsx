import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  isAdminAuthed,
  setAdminAuthed,
  fileToDataUrl,
} from '../utils/storage.js'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

const EMPTY_FORM = { title: '', description: '', link: '', image: '' }

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setAuthed(isAdminAuthed())
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAdminAuthed(true)
      setAuthed(true)
      setError('')
    } else {
      setError("Parol noto'g'ri")
    }
  }

  function handleLogout() {
    setAdminAuthed(false)
    setAuthed(false)
  }

  if (!authed) {
    return (
      <div className="admin-login">
        <form onSubmit={handleLogin} className="admin-login-card">
          <h1>Admin panel</h1>
          <p>Davom etish uchun parolni kiriting.</p>
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <p className="admin-error">{error}</p>}
          <button type="submit" className="btn btn-primary">Kirish</button>
          <Link to="/" className="admin-back">← Sahifaga qaytish</Link>
        </form>
        <AdminStyles />
      </div>
    )
  }

  return <AdminDashboard onLogout={handleLogout} />
}

function AdminDashboard({ onLogout }) {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setProjects(getProjects())
  }, [])

  function resetForm() {
    setForm(EMPTY_FORM)
    setImagePreview('')
    setEditingId(null)
  }

  async function handleImageChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const dataUrl = await fileToDataUrl(file)
      setForm((f) => ({ ...f, image: dataUrl }))
      setImagePreview(dataUrl)
    } catch (err) {
      alert("Rasmni yuklashda xatolik yuz berdi")
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) {
      alert("Loyiha nomini kiriting")
      return
    }
    setSaving(true)
    let updated
    if (editingId) {
      updated = updateProject(editingId, form)
    } else {
      updated = addProject(form)
    }
    setProjects(updated)
    resetForm()
    setSaving(false)
  }

  function handleEdit(project) {
    setForm({
      title: project.title,
      description: project.description || '',
      link: project.link || '',
      image: project.image || '',
    })
    setImagePreview(project.image || '')
    setEditingId(project.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDelete(id) {
    if (!confirm("Bu loyihani o'chirmoqchimisiz?")) return
    const updated = deleteProject(id)
    setProjects(updated)
    if (editingId === id) resetForm()
  }

  return (
    <div className="admin">
      <div className="container admin-header">
        <div>
          <h1>Loyihalarni boshqarish</h1>
          <p>Yangi loyiha qo'shing yoki mavjudlarini tahrirlang — kod yozish shart emas.</p>
        </div>
        <div className="admin-header-actions">
          <Link to="/" className="btn btn-ghost">Sahifani ko'rish</Link>
          <button onClick={onLogout} className="btn btn-ghost">Chiqish</button>
        </div>
      </div>

      <div className="container admin-grid">
        <form onSubmit={handleSubmit} className="admin-form">
          <h2>{editingId ? 'Loyihani tahrirlash' : "Yangi loyiha qo'shish"}</h2>

          <label>
            Loyiha nomi *
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="Masalan: Online do'kon sayti"
              required
            />
          </label>

          <label>
            Qisqa tavsif
            <textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Loyiha haqida 1-2 gap"
              rows={3}
            />
          </label>

          <label>
            Havola (link)
            <input
              type="url"
              value={form.link}
              onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              placeholder="https://..."
            />
          </label>

          <label>
            Rasm
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>

          {imagePreview && (
            <div className="admin-preview">
              <img src={imagePreview} alt="Oldindan ko'rish" />
            </div>
          )}

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {editingId ? 'Saqlash' : "Qo'shish"}
            </button>
            {editingId && (
              <button type="button" className="btn btn-ghost" onClick={resetForm}>
                Bekor qilish
              </button>
            )}
          </div>
        </form>

        <div className="admin-list">
          <h2>Loyihalar ({projects.length})</h2>
          {projects.length === 0 && <p className="admin-empty">Hali loyiha qo'shilmagan.</p>}
          {projects.map((p) => (
            <div key={p.id} className="admin-row">
              <div className="admin-row-thumb">
                {p.image ? <img src={p.image} alt={p.title} /> : <div className="admin-row-noimg" />}
              </div>
              <div className="admin-row-body">
                <strong>{p.title}</strong>
                {p.link && <span className="admin-row-link">{p.link}</span>}
              </div>
              <div className="admin-row-actions">
                <button onClick={() => handleEdit(p)} className="btn btn-ghost">Tahrirlash</button>
                <button onClick={() => handleDelete(p.id)} className="btn btn-ghost admin-danger">O'chirish</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdminStyles />
    </div>
  )
}

function AdminStyles() {
  return (
    <style>{`
      .admin-login {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--forest-deep);
        padding: 24px;
      }
      .admin-login-card {
        background: var(--snow);
        padding: 40px 32px;
        border-radius: var(--radius);
        width: 100%;
        max-width: 360px;
        text-align: center;
        animation: fade-in-up 0.6s both;
      }
      .admin-login-card h1 {
        font-size: 1.5rem;
        margin-bottom: 8px;
      }
      .admin-login-card p {
        color: var(--ink-soft);
        margin-bottom: 20px;
        font-size: 0.9rem;
      }
      .admin-login-card input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid var(--snow-dim);
        border-radius: var(--radius);
        margin-bottom: 12px;
        font-size: 1rem;
      }
      .admin-error {
        color: #b3261e;
        font-size: 0.85rem;
        margin-bottom: 12px !important;
      }
      .admin-login-card .btn {
        width: 100%;
        justify-content: center;
      }
      .admin-back {
        display: block;
        margin-top: 16px;
        font-size: 0.85rem;
        color: var(--ink-soft);
      }

      .admin {
        min-height: 100vh;
        background: var(--snow-dim);
        padding-bottom: 80px;
        animation: fade-in-up 0.5s both;
      }
      .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 16px;
        padding: 48px 0 32px;
      }
      .admin-header h1 {
        font-size: 1.8rem;
        margin-bottom: 6px;
      }
      .admin-header p {
        color: var(--ink-soft);
        margin: 0;
      }
      .admin-header-actions {
        display: flex;
        gap: 12px;
      }
      .admin-grid {
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 32px;
        align-items: start;
      }
      .admin-form, .admin-list {
        background: var(--snow);
        border-radius: var(--radius);
        padding: 28px;
        border: 1px solid rgba(11,33,24,0.08);
      }
      .admin-form h2, .admin-list h2 {
        font-size: 1.1rem;
        margin-bottom: 20px;
      }
      .admin-form label {
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--ink);
      }
      .admin-form input, .admin-form textarea {
        display: block;
        width: 100%;
        margin-top: 6px;
        padding: 10px 12px;
        border: 1px solid var(--snow-dim);
        border-radius: var(--radius);
        font-size: 0.95rem;
        font-family: inherit;
      }
      .admin-preview {
        margin-bottom: 16px;
        border-radius: var(--radius);
        overflow: hidden;
        aspect-ratio: 16/10;
        background: var(--snow-dim);
      }
      .admin-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .admin-form-actions {
        display: flex;
        gap: 12px;
      }
      .admin-empty {
        color: var(--ink-soft);
        font-size: 0.9rem;
      }
      .admin-row {
        display: grid;
        grid-template-columns: 64px 1fr auto;
        gap: 16px;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid var(--snow-dim);
      }
      .admin-row:last-child {
        border-bottom: none;
      }
      .admin-row-thumb {
        width: 64px;
        height: 48px;
        border-radius: 4px;
        overflow: hidden;
        background: var(--snow-dim);
      }
      .admin-row-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .admin-row-noimg {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%);
      }
      .admin-row-body {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .admin-row-link {
        font-size: 0.8rem;
        color: var(--ink-soft);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .admin-row-actions {
        display: flex;
        gap: 8px;
      }
      .admin-danger {
        color: #b3261e;
        border-color: #b3261e;
      }
      .admin-danger:hover {
        background: #b3261e;
        color: var(--snow);
      }
      @media (max-width: 900px) {
        .admin-grid {
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 560px) {
        .admin-row {
          grid-template-columns: 48px 1fr;
        }
        .admin-row-actions {
          grid-column: 1 / -1;
        }
      }
    `}</style>
  )
}