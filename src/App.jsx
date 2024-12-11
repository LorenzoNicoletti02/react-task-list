import "./App.css"

const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];

function App() {
  const filteredElem = tasks.filter(curCompleted => curCompleted.state === "completed");
  const otherElem = tasks.filter(curOther => curOther.state != "completed");

  // console.log(filteredElem);
  // console.log(otherElem);

  const listCompleted = filteredElem.map((curFilteredElem) => {
    return (
      <li key={curFilteredElem.id}>
        <h5>{curFilteredElem.title}</h5>
        <p>{curFilteredElem.priority}</p>
        <p>{curFilteredElem.estimatedTime}</p>
      </li>
    )
  })

  const listOther = otherElem.map((curOtherElem) => {
    return (
      <li key={curOtherElem.id}>
        <h5>{curOtherElem.title}</h5>
        <p>{curOtherElem.priority}</p>
        <p>{curOtherElem.estimatedTime}</p>
      </li>
    )
  })

  return (
    <>
      <h1>Task Manager</h1>

      <h3>Current Tasks (4)</h3>
      <ul>{listOther}</ul>

      <hr/>

      <h3>Completed Tasks (6)</h3>
      <ul>{listCompleted}</ul>
    </>
  )
}

export default App
