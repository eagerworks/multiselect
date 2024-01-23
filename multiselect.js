export const multiselect = () => {
  return {
    options: [],
    selected: [],
    show: false,
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    select(optionIndex) {
      if (!this.options[optionIndex].selected) {
        this.options[optionIndex].selected = true;
        this.selected.push(optionIndex);
      } else {
        this.remove(optionIndex);
      }
    },
    remove(optionIndex) {
      this.selected.splice(this.selected.lastIndexOf(optionIndex), 1);
      this.options[optionIndex].selected = false
    },
    loadOptions() {
      const options = this.$refs.hiddenSelect.options;
      for (let i = 0; i < options.length; i++) {
        let selected = options[i].getAttribute("selected") != null;

        this.options.push({
          value: options[i].value,
          text: options[i].innerText,
          selected: selected
        });

        if (selected) { this.selected.push(i); }
      }
    }
  }
}
