export let isTouchDevice = false;

export default (context, inject) => {
  if (process.server) {
    return;
  }

  if ('ontouchstart' in (document.documentElement || {})) {
    document.body.classList.add('__device-touchdevice');
    isTouchDevice = true;
  }
}