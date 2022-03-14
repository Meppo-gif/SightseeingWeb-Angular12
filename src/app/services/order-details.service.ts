import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //sightdetails

  sightDetails = [
    {
      id:1,
      sightName:"Brandenburger LandTag",
      sightDetails:"Der erste Landtag Brandenburg wurde 1946 in der Sowjetischen Besatzungszone gewählt. Der zweite Landtag wurde vor der Wahl 1950 in seiner Zusammensetzung festgeschrieben und bestand nur bis 1952. In seiner heutigen Form existiert er seit der Neubildung des Landes Brandenburg im Zuge der Wiedervereinigung.",
      sightPrice:300,
      sightImg: '../../../assets/img/Brandenburger Landtag von oben.jpg'
    },
    {
      id:2,
      sightName:"Friedenswarte BRB",
      sightDetails:"Die Friedenswarte wurde 1974 errichtet und zum 25. Jahrestag der DDR am 7.10.1974 eingeweiht. Sie ist 32,5 m hoch (bis zur oberen Dachkante), der äußere Turmdurchmesser beträgt 8 m. Über zwei getrennte Wendeltreppen für den Auf- und Abstieg mit jeweils 180 Stufen gelangt man zu den fünf verglasten und fünf freien Aussichtsplattformen.",
      sightPrice:250,
      sightImg:'../../../assets/img/Friedenswarte BRB.jpg'
    },
    {
      id:3,
      sightName:"Kathedrale Palma de Mallorca",
      sightDetails:"Nach der Befreiung von der Maurenherrschaft begann König Jaume I. mit dem Bau auf dem Platz einer islamischen Moschee, die Grundsteinlegung erfolgte 1230. Unter Jaume II., dem Sohn des Eroberers, wurde ab 1306 von der Hauptapsis her der eigentliche Bau der Kathedrale begonnen.",
      sightPrice:400,
      sightImg:'../../../assets/img/Kathedrale Palma de Mallorca.jpg'
    },
    {
      id:4,
      sightName:"Molli Bad Doberan",
      sightDetails:"1886 wurde der Schienenverkehr zwischen Bad Doberan und Heiligendamm aufgenommen. Immer mehr Menschen wollten das erste deutsche Seebad schnell erreichen, um baden zu gehen und sich zu vergnügen. 1910 kam die Streckenerweiterung.",
      sightPrice:350,
      sightImg:'../../../assets/img/Molli Bad Doberan.jpg'
    },
    {
      id:5,
      sightName:"New York Freiheitsstatue",
      sightDetails:"Die Geschichte der Insel geht bis in die frühen 1600er Jahre zurück. Über Jahrzehnte hinweg diente Liberty Island vielen Zwecken, wie z.B. als Drehscheibe für den Pelzhandel und als Land, um die Tausenden von Austern und Muscheln aufzunehmen, die von der Bucht an die Küste gespült wurden. Erfahren Sie mehr über das Land und seine Veränderungen.",
      sightPrice:600,
      sightImg:'../../../assets/img/New York Freiheitsstatue.jpg'
    },
    {
      id:6,
      sightName:"Teepott Warnemünde.jpg",
      sightDetails:"Der Teepott mit seiner Hyparschalenarchitektur ist eine weltbekannte Sehenswürdigkeit in Warnemünde, einen Ortsteil von Rostock. Die markante Dachkonstruktion stammt von dem Binzer Bauingenieur Ulrich Müther. Ulrich Müther konstruierte über 70 Schalen-Bauwerke (doppelt gekrümmte Beton-Schalentragwerke), und war ein wichtiger Repräsentant der sogenannten architektonischen Moderne.",
      sightPrice:200,
      sightImg:'../../../assets/img/Teepott Warnemünde.jpg'
    },
  ]
}
