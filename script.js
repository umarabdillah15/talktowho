function saveStory() {
    const storyInput = document.getElementById('storyInput');
    const storyText = storyInput.value.trim();

    if (storyText) {
        const storyList = document.getElementById('stories');
        const newStory = document.createElement('li');
        newStory.textContent = storyText;
        storyList.appendChild(newStory);

        // Clear the input after saving
        storyInput.value = '';
    } else {
        alert('Please write a story before saving.');
    }
}

// Fungsi untuk menampilkan cerita yang sudah disimpan
function loadStories() {
    const stories = JSON.parse(localStorage.getItem('stories')) || [];
    const storyList = document.getElementById('stories');
    storyList.innerHTML = ''; // Hapus cerita lama yang sudah ada

    // Tambahkan cerita yang sudah disimpan ke dalam list
    stories.forEach(story => {
        const newStory = document.createElement('li');
        newStory.textContent = story;
        storyList.appendChild(newStory);
    });
}

// Fungsi untuk menyimpan cerita
function saveStory() {
    const storyInput = document.getElementById('storyInput');
    const storyText = storyInput.value.trim();

    if (storyText) {
        const stories = JSON.parse(localStorage.getItem('stories')) || []; // Ambil cerita yang sudah ada
        stories.push(storyText); // Tambahkan cerita baru
        localStorage.setItem('stories', JSON.stringify(stories)); // Simpan cerita ke localStorage

        // Update tampilan cerita
        loadStories();

        // Kosongkan input setelah disimpan
        storyInput.value = '';
    } else {
        alert('Please write a story before saving.');
    }
}

// Panggil fungsi untuk load cerita saat halaman pertama kali dimuat
window.onload = loadStories;
