CONFIGS = [
    {
        "name": "custom",
        "display_name": "Custom",
        "config": {}
    },
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
                    ("blue", "Blue"),
                    ("blueorange", "Blue & Orange"),
                    ("blueorange2", "Blue & orange 2"),
                    ("brown", "Brown"),
                    ("browngreen", "Brown & green"),
                    ("green", "Green"),
                    ("green2", "Green 2"),
                    ("orange", "Orange"),
                    ("pink", "Pink")
                )
            },

            }
    }

]
