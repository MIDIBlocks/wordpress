# Setup
The following steps will get you a [WordPress](https://localwp.com/) theme up and running that's functionally similar to ours at https://midiblocks.com

## Dependencies
- Install [Impreza Theme](https://themeforest.net/item/impreza-retina-responsive-wordpress-theme/6434280)
- Active Custom Post Type UI, WP Bakery, and Custom Post Type (CPT) UI by going to `/wp-admin/admin.php?page=us-addons`
  - Import `./setup/cptui-export.json` into CPT UI here: `/wp-admin/admin.php?page=cptui_tools`
- Install the [PRO versino of Advanced Custom Fields](https://advancedcustomfields.com/) - Then import `./setup/acf-export.json` by going to `/wp-admin/edit.php?post_type=acf-field-group&page=acf-tools`

## Shortcodes
### `[midiblocks-app]`
Creates a fullscreen Midiblocks [programmable MIDI interface](https://github.com/midiblocks/midiblocks).

- Blocks are stored in the `block` CPT