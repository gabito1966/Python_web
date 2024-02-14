import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size

def links() -> rx.Component:
    return rx.vstack(
        title("About me"),
        link_button("Estudios",
                    "Carreras de grado",
                    "icons/graduation-cap-solid.svg" ,
                    "https://google.com"),
        
        link_button("Cursos",
                    "Cursos realizados",
                    "icons/book-solid.svg",
                    "https://google.com"
                ),
                    
        link_button("Experiencia",
                    "Experiencia Laboral",
                    "icons/address-card-solid.svg",
                    "https://google.com"
                ),
                    
        link_button("Linkedin",
                    "Mi pagina de Linkedin",
                    "icons/linkedin.svg",
                    "https://linkedin.com"
                ),
                    
        link_button("GitHub",
                    "Mis repositorios","icons/github.svg",
                    "https://github.com/gabito1966"
                ),
            width= "100%"
        )