# Setup
The following steps will get you a [WordPress](https://localwp.com/) theme up and running that's functionally similar to ours at https://midiblocks.com

## Dependencies
- Install [Impreza Theme](https://themeforest.net/item/impreza-retina-responsive-wordpress-theme/6434280)
- Active Custom Post Type UI, WP Bakery, and Custom Post Type (CPT) UI by going to `/wp-admin/admin.php?page=us-addons`
  - Import `./setup/cptui-export.json` into CPT UI here: `/wp-admin/admin.php?page=cptui_tools`
- Install the [PRO versino of Advanced Custom Fields](https://advancedcustomfields.com/) - Then import `./setup/acf-export.json` by going to `/wp-admin/edit.php?post_type=acf-field-group&page=acf-tools`



---


# Shortcodes
## `[midiblocks-app]`
Creates a fullscreen Midiblocks [programmable MIDI interface](https://github.com/midiblocks/midiblocks).

- Blocks are stored in the `block` CPT



---



# Dev Notes
- [Explore the API](https://midiblocks.com/api)



---



# License: [MIT](https://opensource.org/licenses/MIT)

Copyright 2020 midiblocks

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.