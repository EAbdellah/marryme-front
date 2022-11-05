export interface SingleService {
  serviceID: number
  type: string
  nom: string
  address: Address
  formules: Formule[]
  fermetures: Fermeture[]
}

export interface Address {
  adressID: number
  pays: string
  ville: string
  codePostal: number
  rue: string
  numero: string
  box: string
}

export interface Formule {
  formuleID: number
  nom: string
  prix: number
  description: string
  isUniquePrix: boolean
  supFerrier: number
  supvendredi: number
  codePostal: any
  supDimanche: number
  supVeilleFerier: number
  supSamedi: number
  images: Image[]
  service: any
}

export interface Image {
  imageID: number
  photo: string
  service: any
}

export interface Fermeture {
  id: number
  date: string
  service: any[]
}
