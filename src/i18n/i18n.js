import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Home Page",
      home: "Home",
      about: "About",
      contact: "Contact",
      loading: "Loading...",
      created_at: "Created at",
      view_details: "View Details",
      show_more: "Show More",
      error: "Error",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a la página de inicio",
      home: "Hogar",
      about: "Acerca de",
      contact: "Contacto",
      loading: "Cargando...",
      created_at: "Creado en",
      view_details: "Ver detalles",
      show_more: "Ver más",
      error: "Error",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      submit: "Entregar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
