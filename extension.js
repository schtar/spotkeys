const St = imports.gi.St;
const Main = imports.ui.main;
const Util = imports.misc.util;

const iconPrev = new St.Icon({
  icon_name: 'media-skip-backward-symbolic',
  style_class: 'system-status-icon'
});
const iconPause = new St.Icon({
  icon_name: 'media-playback-pause-symbolic',
  style_class: 'system-status-icon'
});
const iconNext = new St.Icon({
  icon_name: 'media-skip-forward-symbolic',
  style_class: 'system-status-icon'
});

let buttonPrev = new St.Button({ style_class: 'panel-button'});
let buttonPause = new St.Button({ style_class: 'panel-button'});
let buttonNext = new St.Button({ style_class: 'panel-button'});

function _pause() {
  Util.spawn(['/usr/bin/dbus-send', '--print-reply', '--dest=org.mpris.MediaPlayer2.spotify', '/org/mpris/MediaPlayer2', 'org.mpris.MediaPlayer2.Player.PlayPause']);
}

function _prev() {
  Util.spawn(['/usr/bin/dbus-send', '--print-reply', '--dest=org.mpris.MediaPlayer2.spotify', '/org/mpris/MediaPlayer2', 'org.mpris.MediaPlayer2.Player.Previous']);
}

function _next() {
  Util.spawn(['/usr/bin/dbus-send', '--print-reply', '--dest=org.mpris.MediaPlayer2.spotify', '/org/mpris/MediaPlayer2', 'org.mpris.MediaPlayer2.Player.Next']);
}

function init() {
  buttonPrev.set_child(iconPrev);
  buttonPrev.connect('button-press-event', _prev);

  buttonPause.set_child(iconPause);
  buttonPause.connect('button-press-event', _pause);

  buttonNext.set_child(iconNext);
  buttonNext.connect('button-press-event', _next);
}

function enable() {
  Main.panel._centerBox.insert_child_at_index(buttonNext, 1);
  Main.panel._centerBox.insert_child_at_index(buttonPause, 1);
  Main.panel._centerBox.insert_child_at_index(buttonPrev, 1);
}

function disable() {
  Main.panel._centerBox.remove_child(buttonPrev);
  Main.panel._centerBox.remove_child(buttonPause);
  Main.panel._centerBox.remove_child(buttonNext);
}
