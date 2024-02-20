

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const postsList = document.getElementById('postsList');
        data.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.id}: ${post.title}`;
            postsList.appendChild(li);
        });
    });
