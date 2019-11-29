const search = {
  value: '',
  listeners: { onsubmit: [] },
  addListener(key, fn) {
    this.listeners[key].push(fn);
  },
  invoke(key) {
    for(let listener of this.listeners[key]) {
      listener(this.value);
    }
  }
}

export function handleSubmit(e) {
  e.preventDefault();
  search.invoke('onsubmit');
}

export function handleChange(e) {
  search.value = e.target.value;
}

export function addListener(key, fn) {
  search.addListener(key, fn);
}
