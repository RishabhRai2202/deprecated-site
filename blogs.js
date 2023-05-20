// JavaScript code for fetching and displaying blog thumbnails
const blogList = document.getElementById("blog-list");

// Fetch the Medium RSS feed
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rishabhrai02")
  .then(response => response.json())
  .then(data => {
    // Iterate over each blog and create a blog element with the thumbnail
    data.items.forEach(blog => {
      const blogElement = document.createElement("div");
      blogElement.classList.add("blog");

      const thumbnailLink = document.createElement("a");
      thumbnailLink.href = blog.link;
      thumbnailLink.target = "_blank";

      const thumbnail = document.createElement("img");
      thumbnail.src = blog.thumbnail;
      thumbnail.alt = blog.title;

      const title = document.createElement("h3");
      title.textContent = blog.title;

      thumbnailLink.appendChild(thumbnail);
      thumbnailLink.appendChild(title);
      blogElement.appendChild(thumbnailLink);
      blogList.appendChild(blogElement);
    });
  })
  .catch(error => {
    console.error("Error fetching blogs:", error);
  });
