import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.fonts import Font
from link_bio.components.title import title


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Gabriel García", size="xl",
                src="GG.png",
                bg=Color.CONTENT.value,
                color=TextColor.BODY.value,
                border="4px",
                border_color=Color.BASE.value,
                ),
            
            rx.vstack(
                rx.heading(
                    "GABRIEL JORGE GARCIA",
                    size="lg"),
                rx.text(
                    "gabrielgarcia0266@gmail.com",
                    margin_top=Size.ZERO.value,
                    color=TextColor.BODY.value,
                    margin_x=Size.DEFAULT.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        "https://github.com"
                    ),
                    link_icon(
                        "icons/linkedin.svg",
                        "https://linkedin.com"
                    ),
                    spacing=Size.BIG.value,
                ),
                align_items="start"
            ),
        ),
            rx.text(
                """Técnico en industrias Alimentarias, Profesor de tenis y Desarrollador Full Stack Jr. Tengo mas de 30 años de experiencia trabajando dentro de la industria alimenticia y decidi que era el mejor momento para poder realizar un gran cambio al pasar al mundo de la tecnologia informatica""",
                color=TextColor.BODY.value,
                font_size=Size.MEDIUM.value
            ),
            spacing=Size.BIG.value,
            align_items="start"
        )