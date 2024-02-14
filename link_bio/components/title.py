import reflex as rx
import link_bio.styles.styles as Styles

def title(text: str) -> rx.Component:
    return rx.heading(
        text,
        size="lg",
        style=Styles.title_style
    )