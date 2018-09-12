# spotkeys

Gnome-shell extension that adds buttons for spotify player to the panel.

### Changelog

* v.1
  - First version

### Settings

To change buttons position in the right menu, replace ```2``` by ```0``` or ```1``` in
~/.local/share/gnome-shell/extensions/spotkeys@snhy/extension.js
```
function enable() {
    Main.panel._rightBox.insert_child_at_index(button3, 2);
    Main.panel._rightBox.insert_child_at_index(button2, 2);
    Main.panel._rightBox.insert_child_at_index(button1, 2);
}
```
Also you can replace ```_rightBox``` by ```_leftBox``` or ```_centerBox```, to change global position.
