watch(
  () => {
    return props.name;
  },
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);
