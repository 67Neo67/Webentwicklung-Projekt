let posts = JSON.parse(localStorage.getItem('posts')) || [];
let editingIndex = null;

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const createBtn = document.getElementById("createBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", closeModal);
createBtn.addEventListener("click", addPost);

function closeModal() {
  modal.classList.add("hidden");
  clearForm();
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('author').value = '';
}

function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('de-DE');
}

function renderPosts() {
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '';

  posts.forEach((post, index) => {
    const div = document.createElement('div');
    div.className = 'post';

    let contentHTML = `
      <h3>${post.title}</h3>
      <div class="meta">von ${post.author} | ${formatDate(post.createdAt)}</div>
      <p>${post.content}</p>
      <div class="actions">
        <button onclick="startEdit(${index})">Bearbeiten</button>
        <button onclick="deletePost(${index})">Löschen</button>
      </div>
    `;

    if (editingIndex === index) {
      contentHTML += `
        <div class="edit-form">
          <input type="text" id="edit-title" value="${post.title}">
          <textarea id="edit-content">${post.content}</textarea>
          <input type="text" id="edit-author" value="${post.author}">
          <button onclick="saveEdit(${index})">Speichern</button>
          <button onclick="cancelEdit()">Abbrechen</button>
        </div>
      `;
    }

    div.innerHTML = contentHTML;
    postsDiv.appendChild(div);
  });
}

function addPost() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const author = document.getElementById('author').value;

  if (!title || !content || !author) {
    alert('Bitte alle Felder ausfüllen');
    return;
  }

  posts.push({ 
    title, 
    content, 
    author, 
    createdAt: new Date().toISOString()
  });

  savePosts();
  renderPosts();
  closeModal();
}

function deletePost(index) {
  if (confirm("Post wirklich löschen?")) {
    posts.splice(index, 1);
    savePosts();
    renderPosts();
  }
}

function startEdit(index) {
  editingIndex = index;
  renderPosts();
}

function cancelEdit() {
  editingIndex = null;
  renderPosts();
}

function saveEdit(index) {
  const newTitle = document.getElementById('edit-title').value;
  const newContent = document.getElementById('edit-content').value;
  const newAuthor = document.getElementById('edit-author').value;

  if (!newTitle || !newContent || !newAuthor) {
    alert('Bitte alle Felder ausfüllen');
    return;
  }

  posts[index] = {
    title: newTitle,
    content: newContent,
    author: newAuthor,
    createdAt: posts[index].createdAt
  };

  editingIndex = null;
  savePosts();
  renderPosts();
}

renderPosts();
