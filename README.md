# spotkeys

Gnome-shell extension that adds buttons for spotify player to the panel.

### Changelog
* v.2
  - Support Gnome 40.0
* v.1
  - First version

### Settings

To move buttons, replace ```_centerBox``` by ```_leftBox``` or ```_rightBox```, to change global position in top panel.
~/.local/share/gnome-shell/extensions/spotkeys@snhy/extension.js
```
function enable() {
  Main.panel._centerBox.insert_child_at_index(buttonNext, 1);
  Main.panel._centerBox.insert_child_at_index(buttonPause, 1);
  Main.panel._centerBox.insert_child_at_index(buttonPrev, 1);
}
```
