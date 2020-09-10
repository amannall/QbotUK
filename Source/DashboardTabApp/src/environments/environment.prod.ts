export const environment = {
    production: false,
    apiBaseUrl: "https://qbotimperial.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "2b897507-ee8c-4575-830b-4f8267c3d307",
        clientId: "cad086b8-a92d-4373-bdd2-88bf30b4db13",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
