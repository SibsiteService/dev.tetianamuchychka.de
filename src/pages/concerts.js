import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";
import '../assets/css/concerts.css';
import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"
import Layout from "../components/Layout";
export default class ConcertsPage extends React.Component
{
    state = {}
    constructor(props)
    {
      super(props);
  
      this.state = 
      {
        LANGUAGE: new Language(),
      };
      this.toggleLanguage = (lang) =>
      {
        this.context.setLang(lang);
  
        this.setState(state => ({
          LANGUAGE:this.context
        }));
      }
      this.toggleLanguage =  this.toggleLanguage.bind(this);
      let langURL = Querystring.parse(this.props.location.search)['?lang'];
      this.state.LANGUAGE.setLang(langURL);
    }
    render(){
        return( 
        <LanguageContext.Provider value={this.state.LANGUAGE}>
          <Layout toggleLanguage ={this.toggleLanguage}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Tetiana Muchychka - Konzerte</title>
              <meta name="description" content="Aktuelle Konzerte der Akkordeonistin Tetiana Muchychka."/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,neue Konzerte,klassische Musik,NRW Kozerte,Best of NRW"></meta>
            </Helmet>
            <div className="background-underlay"/>
            <div className="flex-column concerts-section">
              <span className="biography-title">{this.state.LANGUAGE.t('concerts')}</span>

              <table className="concert-table">
                <tbody>
                <a>
                    <tr>
                        <td>
                            <span className="concert-first-title">
<<<<<<< HEAD
                            9 Februar 2021, 16:00
                            </span>
                            <span className="concert-second-title">
                            Bürgermeisterhaus Essen
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
=======
                            {this.state.LANGUAGE.t('concert_49_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_49_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_49_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_49_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_49_additional')}</td>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                    </tr>
                 </a>
                <a href = "https://www.t-a-s.net/seniorenwohnheime/marienheim/aktuelles/live-music-now-zu-gast-im-marienheim/" target="_blank">
                    <tr>
<<<<<<< HEAD
                        <td>
                            <span className="concert-first-title">
                            16 September 2020, 15:30
                            </span>
                            <span className="concert-second-title">
                            Kath. Marienheim
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
                    </tr>
                 </a>
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            25 Juni 2020, 15:00
                            </span>
                            <span className="concert-second-title">
                            Ev. Seniorenzentrum
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
                    </tr>
                 </a>
                <a href = "https://www.pressreader.com/germany/rheinische-post/20200520/282222307951456" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 Mai 2020, 16:00
                            </span>
                            <span className="concert-second-title">
                            Johanniter-Stift
                            </span>
                        </td>
                        <td>Meerbusch, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Mihajlo Milosev (Akkordeon)</td>
                    </tr>
                 </a>
               <a href = "https://www.wasgehtheuteab.de/bochum/e/97dbdecd-a822-444b-b365-4dc3825e689b" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            16 Februar 2020, 15:00
                            </span>
                            <span className="concert-second-title">
                            Anneliese Brost Musikforum Ruhr
                            </span>
                        </td>
                        <td>Bochum, Deutschland</td>
                        <td>Musikschule Bochum mit Dennis Freundel (Gitarre)</td>
                        <td>Werke von Carulli, Mendelssohn, Villa-Lobos, Piazzolla, Mees</td>
                    </tr>
                 </a>   
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            13 Februar 2020,  16:00
                            </span>
                            <span className="concert-second-title">
                            Altenzentrum Stammhaus
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Mihajlo Milosev (Akkordeon)</td>
                        <td></td>
                    </tr>
                 </a>   
                 <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Februar 2020,  9:00
                            </span>
                            <span className="concert-second-title">
                            GGS Sandstraße
                            </span>
                        </td>
                        <td>Duisburg-Marxloh, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Timon Knöll (Klarinette)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/11056-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 April 2020, 17:00
                            </span>
                            <span className="concert-second-title">
                            KABAWIL-Hinterhof
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>KABAWIL e. V.</td>
                        <td>Mit Dennis Freundel (Gitarre)</td>
                    </tr>
                    </a>
                    <a href = "https://www.novavita.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            31 Dezember 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Nova Vita Residenz
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Silvester in der Nova Vita Residenz mit Dennis Freundel (Gitarre)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.karlschule-essen.de/termine/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            7 November 2019,  8:45
                            </span>
                            <span className="concert-second-title">
                            GGS, Karlschule
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Timon Knöll (Klarinette)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.wir-lieben-bottrop.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 Oktober 2019
                            </span>
                            <span className="concert-second-title">
                            Kammerkonzertsaal im Kulturzentrum August Everding
                            </span>
                        </td>
                        <td>Bottrop, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.beethoven.de/de/konzerte" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 Oktober 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal Beethoven-Haus
                            </span>
                        </td>
                        <td>Bonn, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalplus.nrw/nachrichten/kultur-finnentrop/best-of-nrw-1-mit-tetiana-muchychka-in-schoss-bamenohl-37545" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            10 Oktober 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Bamenohl
                            </span>
                        </td>
                        <td>Finnentrop, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.kulturforum-witten.de/saalbauhauswitten/hauswitten/veranstaltungen/?event_id=109448&active_timestamp=1570572000&calendars=38" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            9 Oktober 2019, 19:30
                            </span>
                            <span className="concert-second-title">
                            Saalbau Haus Witten
                            </span>
                        </td>
                        <td>Witten, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a>
                    <a href = "https://www.musikverein-unna.de/programmleser/events/id-1-meisterkonzert-524.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 Oktober 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Erich Göpfert Stadthalle
                            </span>
                        </td>
                        <td>Unna, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.wn.de/Muensterland/Kreis-Coesfeld/Senden/3976837-Tetiana-Muchychka-Vielfach-preisgekroent-Ein-Konzert-der-Superlative" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            29 September 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Bürgersaal des Rathauses
                            </span>
                        </td>
                        <td>Senden, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.apollosiegen.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            28 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Apollo-Theater
                            </span>
                        </td>
                        <td>Siegen, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.schwelm.de/aktuelles/kalender/veranstaltungen/?event_id=105899&active_timestamp=1569535200" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            27 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Kulturfabrik Ibach-Haus e.V.
                            </span>
                        </td>
                        <td>Schwelm, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.moenchengladbach.de/de/aktuell-aktiv/veranstaltungskalender/veranstaltung/tetiana-muchychka/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            25 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            „Kunstsignal“ im Alten Bahnhof Geneicken
                            </span>
                        </td>
                        <td>Mönchengladbach, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.stadtlohn.de/bildung-und-kultur/kultur/konzerte/2019-07-19/sonntag-22.-september-2019-18-00-uhr.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            22 September 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Konzertaula Geschwister-Scholl-Gymnasium
                            </span>
                        </td>
                        <td>Stadtlohn, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalkompass.de/event/essen-borbeck/c-kultur/schwebende-klaenge-auf-dem-akkordeon-mit-tetiana-muchychka_e277989" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Borbeck
                            </span>
                        </td>
                        <td>Essen</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            18 September 2019,  14:00
                            </span>
                            <span className="concert-second-title">
                            Therapiezentrum
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Mihajlo Milosev (Akkordeon)</td>
                        <td>Werke von A. Dvorak, M. Moszkowski, E. Grieg, F. Angelis, J. Haydn</td>
                    </tr>
                    
                    <a href = "https://kreis-borken.de/de/service/aktuelles/aktuelle-pressemeldungen/?tx_news_pi1%5Bnews%5D=3477&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=bba8d4ed12ec284c138d8f9327892394" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            15 September 2019,  17:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Raesfeld
                            </span>
                        </td>
                        <td>Schloss Raesfeld, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.herdecke.de/rathaus-buergerservice/aktuelles-aus-herdecke/nachrichten/detailansicht/news/akkordeonistin-tatiana-muchychka-tritt-im-rahmen-der-konzertreihe-best-of-nrw-im-werner-richard-sa.html?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=cd00b58b965ef2be932c114a0eb6d089" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
                            </span>
                        </td>
                        <td>Herdecke, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Clubhaus SKHE
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td></td>
                        <td>Werke von J. S. Bach, J. Haydn, D. Scarlatti, P. I. Tschaikowski, F. Angelis</td>
                    </tr>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Juli 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Duisburg, Deutschland</td>
                        <td>Frische Klänge</td>
                        <td>Werke von A. Logothetis Mäandros</td>
                    </tr>
                    </a> 
                <tr>
                        <td>
                            <span className="concert-first-title">
                            6 Juli 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Orgelsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Frische Klänge</td>
                        <td>Werke von G. Katzer</td>
                    </tr>
                             
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Juli 2019,  16:00
                            </span>
                            <span className="concert-second-title">
                            Torbogensaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Bachelor-Projekt Lecture Konzert unter einem Thema „Ost und West, Musik und Literatur“</td>
                        <td>Werke von J. S. Bach, W. Jacobi, G. Katzer, A. Kusjakov</td>
                    </tr>
                 
                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            28 Mai 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Duisburg, Deutschland</td>
                        <td>Klassenabend Akkordeon</td>
                        <td>Werke von P. I. Tschaikowski</td>
                    </tr>
                    </a> 
                <a href = "https://aip-unternehmensgruppe.de/2019/03/25/veranstaltungen-karstadt-re/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Mai 2019,  17:00
                            </span>
                            <span className="concert-second-title">
                            Karstadt-Gebäude & MQR MarkQuartier
                            </span>
                        </td>
                        <td>Recklinghausen</td>
                        <td>LES FLEURS DU MALE mit Dennis Freundel (Gitarre)</td>
                        <td></td>
                    </tr>
                    </a>     
                <a href = "https://www.theater-essen.de/spielplan/a-z/takeover-by-miki--namika-87857/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Mai 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Philharmonie Essen
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Takeover Ensemble! By Miki & Namika</td>
                        <td></td>
                    </tr>
                    </a> 
                <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/10505-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            24 Januar 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Pina Bausch Theater, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Klassenabend Akkordeon</td>
                        <td>Werke von G. Katzer Toccata</td>
                    </tr>
                    </a> 
                <a href = "https://www.parkhaus-huegel.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 Dezember 2018,  19:00
                            </span>
                            <span className="concert-second-title">
                            Parkhaus Hügel
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Dennis Freundel (Gitarre) und Valerie Eickhoff (Gesang)</td>
                        <td>Werke von A. Piazzolla, K. Weill</td>
                    </tr>
                    </a> 

                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 November 2018,  10:00
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Folkwang Akkordeon Wettbewerb</td>
                        <td>Werke von J. S. Bach, W. A. Mozart, G. Katzer</td>
                    </tr>
                    </a>  
                <a href = "https://www.ggs-sonnenstrasse.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 November 2018,  10:30
                            </span>
                            <span className="concert-second-title">
                            Grundschule Sonnenstraße
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon</td>
                        <td></td>
                    </tr>
                    </a>    
                <a href = "https://luise-leven-schule.lvr.de/de/nav_main/index.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 November 2018,  10:30
                            </span>
                            <span className="concert-second-title">
                            LVR Luise-Leven-Schule
                            </span>
                        </td>

                        <td>
                        Krefeld, Deutschland  
                        </td>

                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>    
                <a href = "https://www.karlschule-essen.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 November 2018,  8:45
                            </span>
                            <span className="concert-second-title">
                            GGS, Karlschule
                            </span>
                        </td>

                        <td>
                        Essen, Deutschland  
                        </td>

                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            {this.state.LANGUAGE.t("")}
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.haus-marck.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 November 2018,  16:00
                            </span>
                            <span className="concert-second-title">
                            Wasserschloss Haus Marck
=======
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_48_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_48_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_48_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_48_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_48_additional')}</td>
                    </tr>
                 </a>
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_47_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_47_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_47_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_47_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_47_additional')}</td>
                    </tr>
                 </a>
                <a href = "https://www.pressreader.com/germany/rheinische-post/20200520/282222307951456" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_46_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_46_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_46_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_46_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_46_additional')}</td>
                    </tr>
                 </a>
                <a href = "https://kabawil.de/blog/category/hinterhofpause/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_45_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_45_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_45_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_additional')}</td>
                    </tr>
                 </a>
                <a href = "https://www.wasgehtheuteab.de/bochum/e/97dbdecd-a822-444b-b365-4dc3825e689b" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_44_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_44_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_44_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_44_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_44_additional')}</td>
                    </tr>
                 </a>   
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_43_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_43_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_43_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_43_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_43_additional')}</td>
                    </tr>
                 </a>   
                 <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_42_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_42_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_42_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_42_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_42_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/11056-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_45_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_45_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_45_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_additional')}</td>
                    </tr>
                    </a>
                    <a href = "https://www.novavita.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_41_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_41_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_41_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_41_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_41_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.karlschule-essen.de/termine/" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                        Tecklenburg, Deutschland  
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_40_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_40_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_40_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_40_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_40_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.wir-lieben-bottrop.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                            Werner Richard - Dr. Carl Dörken Stiftung
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_39_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_39_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_39_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_39_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_39_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.beethoven.de/de/konzerte" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                            
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_38_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_38_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_38_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_38_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_38_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalplus.nrw/nachrichten/kultur-finnentrop/best-of-nrw-1-mit-tetiana-muchychka-in-schoss-bamenohl-37545" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_37_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_37_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_37_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_37_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_37_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.kulturforum-witten.de/saalbauhauswitten/hauswitten/veranstaltungen/?event_id=109448&active_timestamp=1570572000&calendars=38" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_36_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_36_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_36_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_36_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_36_additional')}</td>
                    </tr>
                    </a>
<<<<<<< HEAD
                <a href = "https://www.da-kunsthaus.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            23 September 2018
                            </span>
                            <span className="concert-second-title">
                            Kunsthaus Kloster Gravenhorst
=======
                    <a href = "https://www.musikverein-unna.de/programmleser/events/id-1-meisterkonzert-524.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_35_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_35_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_35_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_35_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_35_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.wn.de/Muensterland/Kreis-Coesfeld/Senden/3976837-Tetiana-Muchychka-Vielfach-preisgekroent-Ein-Konzert-der-Superlative" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                        Hörstel, Deutschland  
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_34_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_34_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_34_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_34_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_34_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.apollosiegen.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                            Werner Richard - Dr. Carl Dörken Stiftung, Familienkonzert „Peter und der Wolf“
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_33_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_33_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_33_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_33_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_33_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.schwelm.de/aktuelles/kalender/veranstaltungen/?event_id=105899&active_timestamp=1569535200" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                            Werke von D. Scarlatti, E. Granados, E. Grieg
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_32_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_32_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_32_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_32_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_32_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.moenchengladbach.de/de/aktuell-aktiv/veranstaltungskalender/veranstaltung/tetiana-muchychka/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_31_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_31_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_31_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_31_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_31_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.stadtlohn.de/bildung-und-kultur/kultur/konzerte/2019-07-19/sonntag-22.-september-2019-18-00-uhr.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_30_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_30_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_30_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_30_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_30_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalkompass.de/event/essen-borbeck/c-kultur/schwebende-klaenge-auf-dem-akkordeon-mit-tetiana-muchychka_e277989" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_29_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_29_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_29_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_29_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_29_additional')}</td>
                    </tr>
                    </a>
<<<<<<< HEAD
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            15 September 2018
                            </span>
                            <span className="concert-second-title">
                            Schloss Benrath
=======
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_28_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_28_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_28_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_28_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_28_additional')}</td>
                    </tr>
                    
                    <a href = "https://kreis-borken.de/de/service/aktuelles/aktuelle-pressemeldungen/?tx_news_pi1%5Bnews%5D=3477&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=bba8d4ed12ec284c138d8f9327892394" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                        Düsseldorf, Deutschland  
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_27_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_27_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_27_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_27_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_27_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.herdecke.de/rathaus-buergerservice/aktuelles-aus-herdecke/nachrichten/detailansicht/news/akkordeonistin-tatiana-muchychka-tritt-im-rahmen-der-konzertreihe-best-of-nrw-im-werner-richard-sa.html?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=cd00b58b965ef2be932c114a0eb6d089" target="_blank">
                    <tr>
                        <td>
<<<<<<< HEAD
                            Wandelkonzert, Werner Richard - Dr. Carl Dörken Stiftung
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_26_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_26_place')}
                            </span>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_26_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_26_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_26_additional')}</td>
                    </tr>
                    </a> 
                    <tr>
                        <td>
<<<<<<< HEAD
                            Werke von J. S. Bach, J. Pachelbel
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            14 September 2018
                            </span>
                            <span className="concert-second-title">
                            Schloss Benrath
=======
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_25_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_25_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_25_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_25_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_25_additional')}</td>
                    </tr>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_24_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_24_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_24_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_24_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_24_additional')}</td>
                    </tr>
                    </a> 
                <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_23_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_23_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_23_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_23_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_23_additional')}</td>
                    </tr>
                             
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_22_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_22_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_22_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_22_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_22_additional')}</td>
                    </tr>
                 
                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_21_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_21_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_21_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_21_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_21_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://aip-unternehmensgruppe.de/2019/03/25/veranstaltungen-karstadt-re/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_20_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_20_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_20_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_20_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_20_additional')}</td>
                    </tr>
                    </a>     
                <a href = "https://www.theater-essen.de/spielplan/a-z/takeover-by-miki--namika-87857/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_19_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_19_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_19_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_19_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_19_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/10505-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_18_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_18_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_18_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_18_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_18_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://www.parkhaus-huegel.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_17_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_17_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_17_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_17_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_17_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_16_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_16_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_16_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_16_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_16_additional')}</td>
                    </tr>
                    </a>  
                <a href = "https://www.ggs-sonnenstrasse.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_15_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_15_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_15_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_15_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_15_additional')}</td>
                    </tr>
                    </a>    
                <a href = "https://luise-leven-schule.lvr.de/de/nav_main/index.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_14_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_14_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_14_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_14_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_14_additional')}
                        </td>
                    </tr>
                    </a>    
                <a href = "https://www.karlschule-essen.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_13_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_13_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_13_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_13_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_13_additional')}
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.haus-marck.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_12_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_12_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Düsseldorf, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_12_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            Werke von J. S. Bach, J. Pachelbel
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.konzertgesellschaft.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 September 2018
                            </span>
                            <span className="concert-second-title">
                            Lukaskirche
=======
                            {this.state.LANGUAGE.t('concert_12_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_12_additional')}
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.da-kunsthaus.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_11_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_11_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Gevelsberg, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_11_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Konzertgesellschaft Gevelsberg, Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            Werke von J. S. Bach, W.A. Mozart, J. Pachelbel,D. Scarlatti, M. Glinka, W. Jacobi
=======
                            {this.state.LANGUAGE.t('concert_11_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_11_additional')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
<<<<<<< HEAD
                            9 Juli 2018
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
=======
                            {this.state.LANGUAGE.t('concert_10_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_10_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Duisburg, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_10_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Klassenabend Akkordeon
                        </td>
                        <td>
                            W.A. Mozart Sonate Nr. 12
=======
                            {this.state.LANGUAGE.t('concert_10_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_10_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_09_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_09_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_09_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_09_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_09_additional')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                    </tr>
                    </a>
                    
                    <a href = "https://akgs-duesseldorf.lms.schulon.org/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            5 Juli 2018
                            </span>
                            <span className="concert-second-title">
                            GGS Adolf-Klarenbach-Schule
                            </span>
                        </td>
                        <td>
                        Düsseldorf, Deutschland  
                        </td>
                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>
<<<<<<< HEAD
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            21 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
=======
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_07_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_07_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Essen Werden, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_07_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Öffentliches Vorspiel für ein Musikstipendium
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.cse.ruhr/soziales-gefaehrdetenhilfe/standort/3-cafe-schliessfach/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Café Schließfach
=======
                            {this.state.LANGUAGE.t('concert_07_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_07_additional')}
                        </td>
                    </tr>
                    </a>
                    
                    <a href = "https://akgs-duesseldorf.lms.schulon.org/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_06_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_06_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Essen, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_06_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Live Music Now e.V. Rhein-Ruhr
                        </td>
                        <td>
                            Werke von J.S. Bach, W.A. Mozart, E. Granados, E. Grieg
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            10 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
=======
                            {this.state.LANGUAGE.t('concert_06_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_06_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_05_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_05_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                        <td>
<<<<<<< HEAD
                        Herdecke, Deutschland  
=======
                        {this.state.LANGUAGE.t('concert_05_city')}  
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                        <td>
<<<<<<< HEAD
                            Galakonzert der Stipendiaten der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            S. Voitenko „Offenbarung“
                        </td>
                    </tr>
                    </a>
=======
                            {this.state.LANGUAGE.t('concert_05_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_05_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.cse.ruhr/soziales-gefaehrdetenhilfe/standort/3-cafe-schliessfach/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_04_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_04_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_04_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_04_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_04_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_03_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_03_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_03_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_03_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_03_additional')}
                        </td>
                    </tr>
                    </a>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
<<<<<<< HEAD
                            4 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
                            </span>
                        </td>

                        <td>
                        Essen Werden, Deutschland  
                        </td>

                        <td>
                            Öffentliches Vorspiel für ein Musikstipendium der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            E. Granados aus „Spanische Tänze“
=======
                            {this.state.LANGUAGE.t('concert_02_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_02_place')}
                            </span>
                        </td>
                        <td>
                        {this.state.LANGUAGE.t('concert_02_city')}  
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_02_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_02_additional')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
<<<<<<< HEAD
                            2 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
=======
                            {this.state.LANGUAGE.t('concert_01_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_01_place')}
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                            </span>
                        </td>
                
                        <td>
<<<<<<< HEAD
                        Herdecke, Deutschland
                        </td>

                        <td>
                            Öffentliches Vorspiel für ein Musikstipendium der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        
                        <td class="click-raw">
                            
                        </td>    
                    </tr>
                    </a>

=======
                        {this.state.LANGUAGE.t('concert_01_city')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_01_event')}
                        </td>
                        
                        <td class="click-raw">
                            {this.state.LANGUAGE.t('concert_01_additional')}
                        </td>    
                    </tr>
                    </a>
>>>>>>> 812a3d602a9f62544979d91d417461449b33fa7a
                    
                </tbody>
              </table>
              <img className="background-img-concerts concerts-img"/>
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}
ConcertsPage.contextType = LanguageContext;