export const IMPORT_URL = {
    BASE_URL: "https://api.musement.com/api/v3/",
    get CITIES () {
        return this.BASE_URL + "cities/"
    },
    get ACTIVITIES () {
        return this.BASE_URL + "activities"
    },
    get LISTS () {
        return this.BASE_URL + "lists/"
    }
}