const apiUrl = 'http://localhost/proyecto_crud/backend/index.php';
let editingProductId = null;

document.getElementById('productForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);

    await fetch(`${apiUrl}?action=create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price })
    });

    e.target.reset();
    loadProducts();
});

async function loadProducts() {
    const res = await fetch(`${apiUrl}?action=read`);
    const products = await res.json();

    const tbody = document.getElementById('productList');
    tbody.innerHTML = '';

    products.forEach(p => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="px-6 py-4">${p.name}</td>
            <td class="px-6 py-4">$${p.price}</td>
            <td class="px-6 py-4 space-x-2">
                <button onclick="showEditModal(${p.id}, '${p.name}', ${p.price})" class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Editar</button>
                <button onclick="deleteProduct(${p.id})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function deleteProduct(id) {
    await fetch(`${apiUrl}?action=delete&id=${id}`, { method: 'DELETE' });
    loadProducts();
}

function showEditModal(id, name, price) {
    editingProductId = id;
    document.getElementById('editName').value = name;
    document.getElementById('editPrice').value = price;
    document.getElementById('editModal').classList.remove('hidden');
    document.getElementById('editModal').classList.add('flex');
}

function closeModal() {
    document.getElementById('editModal').classList.add('hidden');
    document.getElementById('editModal').classList.remove('flex');
}

document.getElementById('saveEdit').addEventListener('click', async () => {
    const name = document.getElementById('editName').value;
    const price = parseFloat(document.getElementById('editPrice').value);

    await fetch(`${apiUrl}?action=update&id=${editingProductId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price })
    });

    closeModal();
    loadProducts();
});

loadProducts();
