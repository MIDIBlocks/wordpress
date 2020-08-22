# Dependencies
- [Impreza Theme](https://themeforest.net/item/impreza-retina-responsive-wordpress-theme/6434280)
- [Advanced Custom Fields PRO](https://advancedcustomfields.com/)
- Custom post types (can be through [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/))
  - Dailies

# Setup
- Install Impreza, then install and activate this child theme
- Install Advanced Custom Fields and import `./wp-content/themes/Impreza-child/setup/acf-export.json`

# Shortcodes

## `[title-with-prefix]`
Displays a title, optionally with a prefix defined by a `title_prefix` custom field.

## `[daily-notes]`
Displays a list of `notes[]note` and their `notes[]timestamp`