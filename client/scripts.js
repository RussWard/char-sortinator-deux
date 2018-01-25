class Sortinator {
  constructor() {
    this.history = [];
  }

  renderHistory() {
    document.getElementById('history-list').innerHTML = null;
    this.history.forEach(item => {
      let node = document.createElement('div');
      node.innerHTML = item;
      document.getElementById('history-list').appendChild(node);
    })
  }

  submit(string) {
    let body = { string };
    fetch('/sort', {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type" : "application/json"
      })
    })
    .then(response => { return response.json() })
    .then(data => {
      this.history.push(data);
    })
    .then(() => {
      this.renderHistory();
    })
    .catch(err => console.log(err))
  }
}

const sortinator = new Sortinator();