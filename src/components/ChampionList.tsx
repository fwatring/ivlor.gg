import React from 'react'
import './ChampionList.css'

interface Champion {
  image: string
  name: string
}

const champions: Array<Champion> = [
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Aatrox.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Aatrox',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ahri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ahri',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Akali.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Akali',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Akshan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Akshan',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Alistar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Amumu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Amumu',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Anivia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Anivia',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Annie.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Annie',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Aphelios.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Aphelios',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ashe',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/AurelionSol.png?image=e_grayscale&image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Aurelian Sol',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Azir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Azir',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Bard.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Bard',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Belveth.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Bel'Veth",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Blitzcrank.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Blitzcrank',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Brand.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Brand',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Braum.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Braum',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/14.2.1/champion/Briar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567', // TODO
    name: 'Briar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Caitlyn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Caitlyn',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Camille.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Camille',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Cassiopeia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Cassiopia',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Chogath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Cho'Gath",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Corki.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Corki',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Darius.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Darius',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Diana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Diana',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/DrMundo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Dr. Mundo',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Draven.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Draven',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ekko.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ekko',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Elise.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Elise',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Evelynn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Evelynn',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ezreal',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Fiddlesticks.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Fiddlesticks',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Fiora.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Fiora',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Fizz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Fizz',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Galio.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Galio',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Gangplank.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Gangplank',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Garen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Garen',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Gnar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Gnar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Gragas.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Gragas',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Graves.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Graves',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Gwen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Gwen',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Hecarim.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Hecarim',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Heimerdinger.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Heimerdinger',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/14.2.1/champion/Hwei.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567', // TODO
    name: 'Hwei',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Illaoi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Illaoi',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Irelia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Irelia',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ivern.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ivern',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Janna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Janna',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/JarvanIV.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Jarvin IV',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Jax',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Jayce.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Jayce',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Jhin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Jhin',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Jinx.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Jinx',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/KSante.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "K'Sante",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kaisa.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Kai'Sa",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kalista.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kaista',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Karma.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Karma',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Karthus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Karthus',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kassadin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kassadin',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Katarina.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Katarina',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kayle.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kayle',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kayn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kayn',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kennen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kennen',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Khazix.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Kha'Zix",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kindred.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kindred',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Kled.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Kled',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/KogMaw.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Kog'Maw",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Leblanc.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'LeBlanc',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/LeeSin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lee Sin',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Leona.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Leona',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Lillia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lillia',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Lissandra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lissandra',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Lucian.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lucian',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Lulu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lulu',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Lux.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Lux',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Malphite.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Malphite',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Malzahar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Malzahar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Maokai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Maokai',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/MasterYi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Master Yi',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/14.2.1/champion/Milio.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567', // TODO
    name: 'Milio',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/MissFortune.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Miss Fortune',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Mordekaiser.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Mordekaiser',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Morgana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Morgana',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/14.2.1/champion/Naafiri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567', // TODO
    name: 'Naafiri',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nami.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nami',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nasus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nasus',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nautilus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nautilus',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Neeko.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Neeko',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nidalee.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nidalee',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nilah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nilah',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nocturne.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nocturne',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Nunu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Nunu',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Olaf.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Olaf',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Orianna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Orianna',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ornn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ornn',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Pantheon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Pantheon',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Poppy.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Poppy',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Pyke.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Pyke',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Qiyana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Qiyana',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Quinn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Quinn',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Rakan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Rakan',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Rammus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Rammus',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/RekSai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Rek'Sai",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Rell.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Rell',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Renata.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Renata Glasc',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Renekton.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Renekton',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Rengar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Rengar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Riven.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Riven',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Rumble.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Rumble',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ryze.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ryze',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Samira.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Samira',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sejuani.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sejuani',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Senna',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Seraphine.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Seraphine',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sett.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sett',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Shaco.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Shaco',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Shen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Shen',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Shyvana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Shyvana',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Singed.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Singed',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sion.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sion',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sivir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sivir',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Skarner.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Skarner',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sona.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sona',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Soraka.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Soraka',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Swain.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Swain',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Sylas.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Sylas',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Syndra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Syndra',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/TahmKench.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Tahm Kench',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Taliyah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Taliyah',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Talon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Talon',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Taric.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Taric',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Teemo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Teemo',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Thresh',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Tristana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Tristana',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Trundle.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Trundle',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Tryndamere.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Tryndamere',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/TwistedFate.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Twisted Fate',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Twitch.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Twitch',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Udyr.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Udyr',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Urgot.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Urgot',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Varus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Varus',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Vayne.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Vayne',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Veigar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Veigar',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Velkoz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: "Vel'Koz",
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Vex.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Vex',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Vi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Vi',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Viego.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Veigo',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Viktor.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Viktor',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Vladimir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Vladamir',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Volibear.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Volibear',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Warwick.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Warwick',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/MonkeyKing.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Wukong',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Xayah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Xayah',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Xerath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Xerath',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Xerath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Xin Zhao',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Yasuo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Yasuo',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Yone.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Yone',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Yorick.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Yorick',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Yuumi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Yuumi',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zac.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zac',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zed.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zed',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zeri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zeri',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Ziggs.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Ziggs',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zilean.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zilean',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zoe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zoe',
  },
  {
    image:
      'https://opgg-static.akamaized.net/meta/images/lol/champion/Zyra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390', // TODO
    name: 'Zyra',
  },
]

interface ChampionListProps {
  searchText: string
}

export default class ChampionList extends React.Component<ChampionListProps> {
  render() {
    return (
      <div className="listContainer">
        {champions
          .filter((champion) => {
            return champion.name.toLowerCase().includes(this.props.searchText.toLowerCase())
          })
          .map((champion) => (
            <ChampionListItem key={champion.name} champion={champion} />
          ))}
      </div>
    )
  }
}

interface ChampionListItemProps {
  champion: Champion
}

export class ChampionListItem extends React.Component<ChampionListItemProps> {
  render() {
    return (
      <div
        className="championContainer"
        style={{
          backgroundImage: `url('${this.props.champion.image}')`,
        }}
      >
        <p className="championName">{this.props.champion.name}</p>
        {/* <img
          className="image"
          src="https://opgg-static.akamaized.net/meta/images/lol/champion/Amumu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1671465194390"
        ></img> */}
      </div>
    )
  }
}
