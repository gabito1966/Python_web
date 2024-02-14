import reflex as rx
import datetime
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color, TextColor

def footer() -> rx.Component:
    return rx.hstack(
        rx.image(
            src="LogoRojo_gg.PNG",
            width="4em",
            height="auto", 
            bg=Color.BACKGROUND.value),
        rx.text( f"Gabriel Garcia ©️ {datetime.date.today().year}"),
        margin_bottom=Size.SMALL.value,
        padding_bottom=Size.DEFAULT.value,
        padding_x=Size.BIG.value,
        bg=Color.BACKGROUND.value,
        color=TextColor.FOOTER.value,
        max_width=styles.MAX_WIDTH,
    )