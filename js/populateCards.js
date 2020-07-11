const portflioGrid = document.querySelector('#portfolio .grid');
const labGrid = document.querySelector('#lab .grid');

const projectsUrl = '/projects.json';

const getProjects = async url => {
  try {
    const response = await fetch(url);
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error(error);
    return {
      jobs: [],
      lab: []
    };
  }
}

const CardComponent = item => {
  const card = document.createElement('a');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const span = document.createElement('span');

  card.setAttribute('href', item.url);
  card.setAttribute('target', '_blank');
  card.setAttribute('rel', 'noopener noreferrer');
  card.setAttribute('class', 'card');

  img.setAttribute('src', item.image_url);
  img.setAttribute('alt', item.title);

  span.textContent = item.title;

  figcaption.appendChild(span);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  card.appendChild(figure)

  return card;

  /** Result:
   * 
   *  <a
   *   href="${item.url}"
   *   target="_blank"
   *   rel="noopener noreferrer"
   *   class="card"
   *  >
   *   <figure>
   *     <img src="${item.image_url}" alt="${item.title}" />
   *     <figcaption>
   *       <span>${item.title}</span>
   *     </figcaption>
   *   </figure>
   *  </a>
   */

}

const populateCards = async () => {
  const { jobs, lab } = await getProjects(projectsUrl);

  jobs.forEach(jobItem => portflioGrid.appendChild(CardComponent(jobItem)));
  lab.forEach(labItem => labGrid.appendChild(CardComponent(labItem)));
}

populateCards();
