// Objeto com a definição do estilo para o tema lightTheme
const lightTheme = {
    color: "#0e14e",
    backgroundColor: "rgb(0,0,0,0.1)",
    button: {
      textColor: "#D3D4E6",
      borderColor: "#151A69",
      backgroundColor: "#151A69",
    },
  };
  
  // Objeto com a definição do estilo para o tema darkTheme
  const darkTheme = {
    color: "#D3D4E6",
    backgroundColor: "rgb(0,0,0,0.9)",
    button: {
      textColor: "white",
      borderColor: "#151A69",
      backgroundColor: "#151A69",
    },
  };
  
  // Exportando as definições de estilo (lightTheme e darkTheme)
  // no objeto themes, que será usado na props theme do 
  // componente auxiliar <ThemeProvider>
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
  };
  
  