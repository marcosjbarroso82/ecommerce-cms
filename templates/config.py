CONFIGS = [
    {
        "name": "venedor",
        "display_name": "Venedor",
        "config": {
            "header": {
                "default": "_header1.html",
                "type": "option",
                "widget": "radio",
                "options": (
                    ("_header1.html", "Header 1"),
                    ("_header2.html", "Header 2"),
                    ("_header3.html", "Header 3"),
                    ("_header4.html", "Header 4"),
                    ("_header5.html", "Header 5"),
                    ("_header7.html", "Header 6"),
                    ("_header7.html", "Header 7"),
                )
            },
            "content": {
                "default": "fullwidth",
                "type": "option",
                "widget": "radio",
                "options": (
                    ("boxed", "Boxed"),
                    ("fullwidth", "Full With")
                )
            },
            "color": {
                "default": "blue",
                "type": "option",
                "widget": "radio",
                "options": (
                    ("blue", _("Blue")),
                    ("blueorange", _("Blue & Orange")),
                    ("blueorange2", _("Blue & orange 2")),
                    ("brown", _("Brown")),
                    ("browngreen", _("Brown & green")),
                    ("green", _("Green")),
                    ("green2", _("Green 2")),
                    ("orange", _("Orange")),
                    ("pink", _("Pink"))
                )
            },

            }
    },
    {
        "name": "boostrap",
        "display_name": "Base Bootstrap",
        "config": {}
    }

] 
