import reflex as rx
import link_bio.styles.styles as Styles
from link_bio.styles.styles import Size as Size

def link_button(title: str, body: str,image:str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=Size.LARGE.value,
                    height=Size.LARGE.value,
                    margin=Size.MEDIUM.value
                ),
                rx.vstack(
                rx.text(title, style=Styles.buttom_title_style),
                rx.text(body, style=Styles.buttom_body_style),
                align_items="start",
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
                ),
                width="100%"
            )
        ),
        href=url,
        is_external= True,
        width="100%"
    )