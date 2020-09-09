export const environment = {
    production: false,
    apiBaseUrl: "https://qbotimperial.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9e4d7ef0-9135-47fc-b4cd-a6cbc485e0bd",
        clientId: "bdd735c4-91e4-400c-a5ef-651ee712bdea",
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
