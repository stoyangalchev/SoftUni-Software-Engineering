import { detailsView } from "./details.js";

const homeSection = document.getElementById('homeView');
homeSection.querySelector('div.topic-title').addEventListener('click', detailsView);
const form = homeSection.querySelector('form');
form.addEventListener('submit', onSubmit);
homeSection.querySelector('[name="cancel"]').addEventListener('click', onCencel);
const container = homeSection.querySelector('.topic-container');

homeSection.remove()

export async function homeView(event) {
    event?.preventDefault();

    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    const post = await response.json();

    container.replaceChildren(...Object.values(post).map(createPostReview));

    document.getElementById('main').replaceChildren(homeSection);
}

 function createPostReview(post) {

    const divTopicNameWrapper = document.createElement('div');
    divTopicNameWrapper.className = 'topic-name-wrapper';

    const divTopicName = document.createElement('div');
    divTopicName.className = 'topic-name';

    const a = document.createElement('a');
    a.id = post._id;
    a.href = '/details';
    a.className = 'normal';

    const h2 = document.createElement('h2');
    h2.textContent = post.topicName;
    a.appendChild(h2);

    const divColumns = document.createElement('div');
    divColumns.className = 'columns';

    const pDate = document.createElement('p');
    pDate.textContent = 'Date: ';

    const time = document.createElement('time');
    time.textContent = post.dataCreated;
    pDate.appendChild(time);

    const divNickName = document.createElement('div');
    divNickName.className = 'nick-name';

    const p2 = document.createElement('p');
    p2.textContent = 'Username: ';

    const spanEl = document.createElement('span');
    spanEl.textContent = post.userName;

    p2.appendChild(spanEl);
    divNickName.appendChild(p2);
    divColumns.appendChild(pDate);
    divColumns.appendChild(divNickName);
    divTopicName.appendChild(a);
    divTopicName.appendChild(divColumns);
    divTopicNameWrapper.appendChild(divTopicName);

    return divTopicNameWrapper;
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const topicName = formData.get('topicName');
    const userName = formData.get('username');
    const postText = formData.get('postText');
    const submitBtn = formData.get('submit');

    const data = {
        topicName,
        userName,
        postText,
        dataCreated: new Date(),
    };

    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {

        if (Object.values(data).some(field => field === '')) {
            throw new Error('The field is empty');
        }

        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, option);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }
        form.reset();
        homeView();
    } catch (err) {
        alert(err.message);
    }
}

function onCencel() {
    form.reset();
}