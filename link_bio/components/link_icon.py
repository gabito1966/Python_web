import reflex as rx
import link_bio.styles.styles as Styles
from link_bio.styles.styles import Size as Size

def link_icon(image:str, url:str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=Size.DEFAULT.value,
            height="auto",
        ),
        href=url,
        is_external=True
    )