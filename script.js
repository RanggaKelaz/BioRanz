
function toggleSubMenu(id) {
  const menu = document.getElementById(id);
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function toggleMenu() {
  document.getElementById('adminMenu').classList.toggle('active');
}
function openAdminLogin() {
  document.getElementById('adminLogin').style.display = 'block';
}
function loginAdmin() {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  if (user === 'RanzOwn' && pass === 'RanzOwnn2') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    alert('Login gagal!');
  }
}
function addProduct() {
  alert('Tambah Produk (Fitur coming soon)');
}
function addChannel() {
  alert('Tambah Channel (Fitur coming soon)');
}
