const speakers = [
  {
    imageLocation: './images/dipippo-bg.png',
    name: 'Ronald DiPippo',
    position: 'Professor emeritus, University of Massachusetts Dartmouth',
    description: 'Ron is a retired Chancellor Professor who was focused on geothermal Energy and has served as a consulting expert in 9 countries.',    
  },
  {
    imageLocation: './images/kurek-bg.png',
    name: 'Katarzyna A. Kurek',
    position: 'PhD, regional economist',
    description: 'Katarzyna is a geothermal enthusiast. She studies the impact of geothermal resources utilization on regional development including socio-economic aspects of geothermal energy development, geothermal communities projects and EU renewable energy policymaking.',
  },
  {
    imageLocation: './images/wen-bg.png',
    name: 'Wenzhuo Cao',
    position: 'Researcher at Imperial College London',
    description: 'Wen has expertise and experience in reservoir geomechanics, rock physics, engineering seismology and resource evaluation in geo-energy deployment and mineral resources exploitation.',
  },
  {
    imageLocation: './images/amanda-bg.png',
    name: 'Amanda Lonsdale',
    position: 'Expert in financial structuring, investing, and project development',
    description: 'She is an expert in geothermal project development and finance, having worked for developers, donors, and national governments to develop, structure, and finance projects in Asia, South America, the Caribbean, Europe, and East Africa.',
  },
  {
    imageLocation: './images/luis-bg.png',
    name: 'Luis Gutiérrez-Negrín',
    position: 'Geothermal division, Comision Federal de Electricidad (CFE)',
    description: 'Luis is a geologist retired from CFE, where he was in charge of different areas like the Geology Office, the Exploration Department, and the La Primavera geothermal field.',
  },
  {
    imageLocation: './images/helen-bg.png',
    name: 'Helen Robinson',
    position: 'PhD, University of Glasgow',
    description: 'Helen is a hydrogeologist. Her research has concentrated on the impacts of geothermal resource development on groundwater and surface water environments in sub-Saharan African, with a focus on the Menengai geothermal resource in Kenya.',
  },
];

function createElement(type, classes = null, text = null) {
  const element = document.createElement(type);
  if (classes) element.setAttribute('class', classes);
  if (text) element.textContent = text;  
  return element;
}

function addSpeaker(speaker) {

  const speakerInfo = createElement('div', 'flex speaker-info');
  speakerInfo.appendChild(createElement('h3', 'speaker-name', speaker.name));
  speakerInfo.appendChild(createElement('h4', 'speaker-pos', speaker.position));
  speakerInfo.appendChild(createElement('hr', 'line short-line'));
  speakerInfo.appendChild(createElement('p', 'speaker-desc', speaker.description));

  const speakerPhoto = createElement('img', 'speaker-size');
  speakerPhoto.src = speaker.imageLocation;
  speakerPhoto.alt = speaker.name + ' photo';
  speakerPhoto.title = speaker.name;

  const speakerBox = createElement('div', 'flex act-container speaker-cont');  
  speakerBox.appendChild(speakerPhoto);
  speakerBox.appendChild(speakerInfo);

  return speakerBox;
}

const speakSection = document.querySelector('#speakers');

const speakTitle = createElement('h2', 'program-subtitle speaker-sub', 'Featured Speakers');
speakSection.appendChild(speakTitle);

const speakLine = createElement('hr', 'line');
speakSection.appendChild(speakLine);

const speakCont = createElement('div', 'grid-program grid-speaker');
speakers.forEach((speaker) => {
  speakCont.appendChild(addSpeaker(speaker));
})
speakSection.appendChild(speakCont);




