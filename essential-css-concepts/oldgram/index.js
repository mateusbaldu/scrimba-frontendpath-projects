const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feed = document.querySelector(".feed")

function render(array) {
    let content = ""
    for (let i = 0 ; i < array.length ; i++) {
        content += `
            <section>
                <div class="post-header">
                    <img class="user-icon-img" src="${array[i].avatar}">
                    <div class="padding-left-20">
                        <p class="user-name font-weight-900">${array[i].name}</p>
                        <p class="user-location">${array[i].location}</p>
                    </div>
                </div>
                
                <img class="post-image" src=${array[i].post}>
                
                <div class="icons-container">
                    <button class="button-icon-heart" data-index="${i}"></button>
                    <button class="button-icon-comment"></button>
                    <button class="button-icon-dm"></button>
                </div>
                
                <p class="post-likes font-weight-900">${array[i].likes} likes</p>
                <p class="user-username-comment"><span class="font-weight-900">${array[i].username}</span> ${array[i].comment}</p>
        
            </section>
        `
    }
    feed.innerHTML = content
}

render(posts)

const likeBtns = document.querySelectorAll(".button-icon-heart")

likeBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
    const index = event.target.closest('button').dataset.index;
    posts[index].likes++
    render(posts)
    })
})
