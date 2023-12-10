const detailsSection = document.getElementById('detailsView');
detailsSection.remove();

const title = document.getElementById('details-title');
const userName = document.getElementById('details-username');
const time = document.getElementById('details-time');
const text = document.getElementById('details-content');

const form = detailsSection.querySelector('form');
form.addEventListener('submit', onSubmit);

const commentsList = document.getElementById('user-comment');

export function detailsView(event) {

    let target = event.target;

    if (target.tagName === 'H2') {
        target = target.parentElement;
    }

    if (target.tagName === 'A') { 754321=
        event.preventDefault();
        showPost()

        const postId = target.id;
        showPost(postId);
    }
}

async function showPost(postId) {

    try {

        const [response, commentsResponse] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`),
            fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`),
        ]);

        const [post, comments] = await Promise.all([
            response.json(),
            commentsResponse.json(),
        ]);

        commentsList.replaceChildren(...Object
            .values(comments)
            .filter(c => c.postId === postId)
            .map(createComments));

        if (response.statusText !== 'OK') {
            throw new Error();
        }
        form.id = postId;
        title.textContent = post.topicName;
        userName.textContent = post.userName;
        time.textContent = post.dataCreated;
        text.textContent = post.postText;


    } catch (err) {

    }

    document.getElementById('main').replaceChildren(detailsSection);

}

function createComments(comment) {

    const divWrapper = document.createElement('div');
    divWrapper.className = 'topic-name-wrapper';

    const divTopicName = document.createElement('div');
    divTopicName.className = 'topic-name';

    const p = document.createElement('p');
    p.textContent = `${comment.userName} commented on ${comment.dataCreated}`;

    const divPostContent = document.createElement('div');
    divPostContent.className = 'post-content';

    const p2 = document.createElement('p');
    p2.textContent = comment.text;

    divPostContent.appendChild(p2);
    divTopicName.appendChild(p);
    divTopicName.appendChild(divPostContent);
    divWrapper.appendChild(divTopicName);

    return divWrapper;
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const userName = formData.get('username').trim();
    const text = formData.get('postText').trim();
    const postId = form.id;

    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'applicaton/json',
        },
        body: JSON.stringify({ userName, text, postId, dataCreated: new Date() }),
    }

    try {

        if (userName === '' || text === '') {
            throw new Error('The field is empty');
        }
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, option);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        form.reset();

        showPost(postId);

    } catch (err) {
        alert(err.message);
    }

}