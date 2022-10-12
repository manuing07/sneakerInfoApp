export interface SneakersReponse {
    ok:      boolean;
    msj:     string;
    sneaker: Sneaker[];
}

export interface Sneaker {
    _id:    string;
    marca:  string;
    modelo: string;
    imagen: string;
    precio: string;
    __v:    number;
}
