import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color, TextColor

def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("Gabriel", color=Color.BASE.value),
            rx.span("García", color=Color.BASE.value),
            rx.span("Dev", color=Color.BASE_OSCURA.value),
            style=styles.navbar_title_style
        ),
         rx.image(
            src="LogoRojo_gg.PNG", 
            width="3em", 
            height="auto", 
            bg=Color.CONTENT.value),
        position="sticky",
        bg=Color.CONTENT.value,
        color=TextColor.BODY.value ,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        width="100%",
        top="0"
    )